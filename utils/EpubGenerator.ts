
import JSZip from 'jszip';

interface EpubChapter {
  title: string;
  content: string; // HTML string
}

export class EpubGenerator {
  private zip: JSZip;
  private title: string;
  private author: string;
  private chapters: EpubChapter[];

  constructor(title: string, author: string = "Czechly") {
    this.zip = new JSZip();
    this.title = title;
    this.author = author;
    this.chapters = [];
  }

  addChapter(title: string, contentHtml: string) {
    this.chapters.push({ title, content: this.fixXhtml(contentHtml) });
  }

  /**
   * Ensures the HTML string is valid XHTML for EPUB.
   * Fixes unclosed void tags like <br>, <hr>, <input>, <img> and entities.
   * Fixes boolean attributes (checked -> checked="checked").
   */
  private fixXhtml(html: string): string {
    let fixed = html;
    
    // 1. Fix Entities
    fixed = fixed.replace(/&nbsp;/g, '&#160;');

    // 2. Fix Boolean Attributes (e.g. checked -> checked="checked")
    // This is crucial for XHTML compliance. React renders <input checked> which XML hates.
    const booleanAttrs = ['checked', 'disabled', 'readonly', 'selected', 'multiple', 'required', 'autofocus'];
    booleanAttrs.forEach(attr => {
        // Look for attribute preceded by space, not followed by ="
        const regex = new RegExp(`(\\s${attr})(?![=\\w-])`, 'gi');
        fixed = fixed.replace(regex, `$1="${attr}"`);
    });

    // 3. Fix Void Elements (br, hr, img, input, meta, link)
    // Explicitly handle simple tags first for robustness against greedy matching issues
    fixed = fixed.replace(/<br\s*\/?>/gi, '<br/>');
    fixed = fixed.replace(/<hr\s*\/?>/gi, '<hr/>');

    // Handle complex tags with attributes (img, input, etc.)
    const complexVoidTags = ['img', 'input', 'meta', 'link'];
    
    complexVoidTags.forEach(tag => {
      // Regex matches <tag ... >
      // Captures attributes in group 1
      const regex = new RegExp(`<${tag}(\\s+[^>]*)?>`, 'gi');
      
      fixed = fixed.replace(regex, (match, attrs) => {
        const fullAttrs = attrs || '';
        // If it already ends in /> (ignoring whitespace), return as is
        if (match.trim().endsWith('/>')) {
            return match;
        }
        // Construct self-closing tag
        return `<${tag}${fullAttrs.replace(/\/$/, '')} />`;
      });
    });
    
    return fixed;
  }

  private getContainerXml() {
    return `<?xml version="1.0"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;
  }

  private getContentOpf() {
    const itemRefs = this.chapters.map((_, i) => `<itemref idref="chap${i}"/>`).join('\n');
    const items = this.chapters.map((_, i) => `<item id="chap${i}" href="chapter${i}.xhtml" media-type="application/xhtml+xml"/>`).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="2.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
    <dc:title>${this.title}</dc:title>
    <dc:creator opf:role="aut">${this.author}</dc:creator>
    <dc:language>en</dc:language>
    <meta name="cover" content="cover-image" />
  </metadata>
  <manifest>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="style" href="css/style.css" media-type="text/css"/>
    ${items}
  </manifest>
  <spine toc="ncx">
    ${itemRefs}
  </spine>
</package>`;
  }

  private getTocNcx() {
    const navPoints = this.chapters.map((ch, i) => `
    <navPoint id="navPoint-${i + 1}" playOrder="${i + 1}">
      <navLabel><text>${ch.title}</text></navLabel>
      <content src="chapter${i}.xhtml"/>
    </navPoint>`).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="urn:uuid:12345"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle><text>${this.title}</text></docTitle>
  <navMap>
    ${navPoints}
  </navMap>
</ncx>`;
  }

  private getCss() {
    return `
      body { font-family: sans-serif; line-height: 1.6; color: #333; }
      h1 { color: #164e87; text-align: center; margin-bottom: 20px; font-size: 2em; }
      h2 { color: #164e87; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 30px; }
      h3 { color: #444; margin-top: 20px; }
      h4 { color: #164e87; margin-top: 15px; font-weight: bold; }
      p { margin-bottom: 10px; }
      table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.9em; }
      th { background-color: #f3f4f6; text-align: left; padding: 8px; font-weight: bold; border-bottom: 2px solid #ddd; }
      td { padding: 8px; border-bottom: 1px solid #eee; vertical-align: top; }
      ul { padding-left: 20px; }
      li { margin-bottom: 5px; }
      input[type="checkbox"] { margin-right: 10px; }
      .tag { display: inline-block; padding: 2px 6px; border-radius: 4px; background: #eee; font-size: 0.8em; margin-right: 5px; }
      .meta { margin-bottom: 20px; text-align: center; }
    `;
  }

  private getChapterXhtml(title: string, content: string) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>${title}</title>
  <link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>
<body>
  <h1>${title}</h1>
  ${content}
</body>
</html>`;
  }

  public async generateBlob(): Promise<Blob> {
    this.zip.file('mimetype', 'application/epub+zip', { compression: "STORE" });
    this.zip.file('META-INF/container.xml', this.getContainerXml());
    this.zip.file('OEBPS/content.opf', this.getContentOpf());
    this.zip.file('OEBPS/toc.ncx', this.getTocNcx());
    this.zip.file('OEBPS/css/style.css', this.getCss());

    this.chapters.forEach((ch, i) => {
      this.zip.file(`OEBPS/chapter${i}.xhtml`, this.getChapterXhtml(ch.title, ch.content));
    });

    return await this.zip.generateAsync({ type: 'blob', mimeType: 'application/epub+zip' });
  }

  public async download() {
    const blob = await this.generateBlob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.epub`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
