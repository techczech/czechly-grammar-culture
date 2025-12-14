
import React from 'react';
import { Bookmark } from '../hooks/useBookmarks';

// Import Data Sources
import { verbs150Data } from '../data/verbs150';
import { irregularVerbsData } from '../data/irregularVerbs';
import { verbPrefixData } from '../data/verbPrefixes';
import { functionalCzechData } from '../data/functionalCzech';
import { cultureData } from '../data/cultureData';
import { caseFormsData } from '../data/caseForms';
import { caseUsageData } from '../data/caseUsage';
import { genderData } from '../data/gender';
import { adjectivesData } from '../data/adjectives';
import { conjugationModelsData } from '../data/conjugationModels';
import { conjunctionsData } from '../data/conjunctions';
import * as pronounsData from '../data/pronouns';
import * as numeralsData from '../data/numerals';
import * as prepositionsData from '../data/prepositions';
import * as adverbsData from '../data/adverbs';
import { verbsGeneralData } from '../data/verbsGeneral';

// Generic Table Component
const SimpleTable: React.FC<{ headers?: string[], rows: (string|number|React.ReactNode)[][], className?: string }> = ({ headers, rows, className = "" }) => (
    <div className={`overflow-x-auto border border-gray-200 rounded-lg shadow-sm bg-white ${className} max-w-full my-4 break-inside-avoid`}>
        <table className="w-full text-left text-base md:text-lg">
            {headers && (
                <thead className="bg-gray-100 text-gray-700 font-bold uppercase text-xs md:text-sm">
                    <tr>
                        {headers.map((h, i) => <th key={i} className="px-4 py-3 border-b border-gray-200" dangerouslySetInnerHTML={{__html: h}} />)}
                    </tr>
                </thead>
            )}
            <tbody className="divide-y divide-gray-100">
                {rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                        {row.map((cell, j) => (
                            <td key={j} className="px-4 py-3 border-r border-gray-50 last:border-0 align-top">
                                {typeof cell === 'string' ? <span dangerouslySetInnerHTML={{__html: cell}} /> : cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

interface ContentRendererProps {
    item: Bookmark;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ item }) => {
    if (!item) return null;
    const id = decodeURIComponent(item.id);
    const title = item.title;

    // --- Helper to render generic text array ---
    const renderText = (texts: string[]) => (
        <div className="space-y-4 text-left text-lg leading-relaxed text-gray-800">
            {texts.map((t, i) => <p key={i} dangerouslySetInnerHTML={{__html: t}} />)}
        </div>
    );

    // --- 1. Verbs 150 ---
    if (id.startsWith('verb-')) {
        const verb = verbs150Data.find(v => `verb-${v.infinitive}` === id);
        if (verb) return (
        <div className="space-y-6 w-full">
            <div className="text-2xl text-gray-500 italic text-center">{verb.english}</div>
            <div className="grid grid-cols-2 gap-4 text-left bg-gray-50 p-6 rounded-xl text-lg border border-gray-100">
                <div><span className="text-gray-400 text-xs uppercase font-bold block">Aspect</span> {verb.aspect}</div>
                <div><span className="text-gray-400 text-xs uppercase font-bold block">Past</span> {verb.past}</div>
                <div><span className="text-gray-400 text-xs uppercase font-bold block">3rd Sg</span> {verb.thirdSingular}</div>
                <div><span className="text-gray-400 text-xs uppercase font-bold block">Imperative</span> {verb.imperative}</div>
            </div>
        </div>
        );
    }

    // --- 2. Functional Czech ---
    if (id.startsWith('func-')) {
        const found = functionalCzechData.find(f => {
            const safeId = `func-${f.czech.replace(/\s+/g, '-').replace(/[?.,!]/g, '').toLowerCase()}`;
            return safeId === id;
        });
        if (found) return (
            <div className="text-center py-8">
                <div className="text-4xl md:text-5xl text-czech-blue font-hand mb-6">{found.czech}</div>
                <div className="text-2xl text-gray-600 mb-8">{found.english}</div>
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-full text-base text-gray-500 font-bold uppercase">{found.functionCategory}</div>
            </div>
        );
    }

    // --- 3. Irregular Verbs ---
    if (id.startsWith('irr-')) {
        const verb = irregularVerbsData.find(v => `irr-${v.infinitive}` === id);
        if (verb) return (
            <div className="space-y-6 w-full">
                <div className="text-2xl text-gray-500 italic mb-4 text-center">{verb.english}</div>
                <SimpleTable 
                    headers={["Form", "Value"]}
                    rows={[
                        ["1st Sg (Já)", verb.firstSingular],
                        ["3rd Sg (On)", verb.thirdSingular],
                        ["3rd Pl (Oni)", verb.thirdPlural],
                        ["Past", verb.past],
                        ["Imperative", verb.imperative]
                    ]}
                />
            </div>
        );
    }

    // --- 4. Verb Prefixes ---
    if (id.startsWith('prefix-')) {
        const p = verbPrefixData.find(item => `prefix-${item.prefix}` === id);
        if (p) return (
            <div className="text-left space-y-6 w-full">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <strong className="block text-gray-400 text-sm uppercase mb-2">Meanings</strong>
                    <ul className="list-disc pl-5 text-gray-800 text-lg space-y-2">{p.meanings.map((m, i) => <li key={i}>{m}</li>)}</ul>
                </div>
                <div>
                    <strong className="block text-gray-400 text-sm uppercase mb-2">Examples</strong>
                    <ul className="list-disc pl-5 text-gray-600 italic text-lg space-y-2">{p.examples.map((ex, i) => <li key={i}>{ex}</li>)}</ul>
                </div>
            </div>
        );
    }

    // --- 5. Case Forms (Declension Models) ---
    if (id.startsWith('model-') && !id.startsWith('model--')) { // Exclude conjugation models starting with -
        const modelName = id.replace('model-', '');
        const declModel = caseFormsData.find(m => m.model === modelName);
        if (declModel) return (
            <div className="text-left space-y-6 w-full">
                <div className="flex gap-2 mb-2 justify-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase">{declModel.gender}</span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-bold uppercase">{declModel.partOfSpeech}</span>
                </div>
                <SimpleTable 
                    headers={["Case", "Singular", "Plural"]}
                    rows={[
                        ["Nom", declModel.singularForms.nominative, declModel.pluralForms.nominative],
                        ["Gen", declModel.singularForms.genitive, declModel.pluralForms.genitive],
                        ["Dat", declModel.singularForms.dative, declModel.pluralForms.dative],
                        ["Acc", declModel.singularForms.accusative, declModel.pluralForms.accusative],
                        ["Voc", declModel.singularForms.vocative, declModel.pluralForms.vocative],
                        ["Loc", declModel.singularForms.locative, declModel.pluralForms.locative],
                        ["Instr", declModel.singularForms.instrumental, declModel.pluralForms.instrumental]
                    ]}
                />
            </div>
        );
    }

    // --- 6. Case Usage ---
    const caseUsage = caseUsageData.find(c => c.id === id);
    if (caseUsage) {
        return (
            <div className="text-left space-y-6 w-full">
                <div className="text-xl text-gray-500 text-center italic">{caseUsage.subtitle}</div>
                {caseUsage.function && <ul className="list-disc pl-5 text-lg space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-100">{caseUsage.function.map((f, i) => <li key={i}>{f}</li>)}</ul>}
                {caseUsage.formTable && <SimpleTable headers={caseUsage.formTable.headers} rows={caseUsage.formTable.rows.map(r => [r.label, ...r.values])} />}
                {caseUsage.specialContent?.sections && (
                    <div className="space-y-4">
                        {caseUsage.specialContent.sections.map((sec, i) => (
                            <div key={i} className="break-inside-avoid">
                                {sec.heading && <h4 className="font-bold text-czech-blue mt-4">{sec.heading}</h4>}
                                {sec.text && renderText(sec.text)}
                                {sec.summaryTable && <SimpleTable headers={["Q", "Func", "Name"]} rows={sec.summaryTable.map(r => [r.q, r.func, r.name])} />}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // --- 7. Adjectives ---
    const adjSection = adjectivesData.find(a => a.id === id);
    if (adjSection) {
        return (
            <div className="text-left space-y-6 w-full">
                {adjSection.text && renderText(adjSection.text)}
                {adjSection.tables && adjSection.tables.map((t, i) => (
                    <div key={i} className="break-inside-avoid">
                        <h4 className="font-bold text-gray-700 mb-2">{t.title}</h4>
                        <SimpleTable headers={t.headers} rows={t.rows} />
                    </div>
                ))}
            </div>
        );
    }

    // --- 8. Gender ---
    if (id.startsWith('gender-sec-')) {
        const idx = parseInt(id.replace('gender-sec-', ''));
        const genderSec = genderData[idx];
        if (genderSec) {
            return (
                <div className="text-left space-y-6 w-full">
                    {renderText(genderSec.text)}
                    {genderSec.tables && genderSec.tables.map((t, i) => <SimpleTable key={i} headers={t.headers} rows={t.rows} />)}
                </div>
            );
        }
    }

    // --- 9. Conjugation Models ---
    if (id.startsWith('model--')) { // starts with model- and the model starts with - (e.g. model--e)
        const modelSuffix = id.replace('model-', ''); // e.g. -e
        const conjData = conjugationModelsData.filter(m => m.model === modelSuffix);
        if (conjData.length > 0) return (
                <div className="text-left w-full">
                    <p className="mb-4 text-gray-600 text-lg">Verbs ending in <strong>{modelSuffix}</strong>:</p>
                    <SimpleTable 
                    headers={["Present", "Past", "Infinitive", "Examples"]}
                    rows={conjData.map(r => [r.present, r.past, r.infinitive, r.examples])}
                    />
                </div>
        );
    }

    // --- 10. Numerals ---
    if (id.startsWith('num-')) {
        const subId = id.replace('num-', '');
        if (subId === 'basic') return <SimpleTable headers={["#", "Czech"]} rows={numeralsData.basicNumerals.map(n => [n.number, n.czech])} />;
        if (subId === 'large') return <SimpleTable headers={["#", "Czech"]} rows={numeralsData.bigNumerals.map(n => [n.number, n.czech])} />;
        if (subId === 'types') return <SimpleTable headers={["#", "Cardinal", "Ordinal", "Name"]} rows={numeralsData.numeralTypes.map(n => [n.val, n.cardinal, n.ordinal, n.name])} />;
        if (subId === 'declension-one') return <SimpleTable headers={["Case", "M", "F", "N"]} rows={numeralsData.declensionOne.map(r => [r.caseName, r.masculine, r.feminine, r.neuter])} />;
        if (subId === 'declension-small') return <SimpleTable headers={["Case", "2", "3", "4"]} rows={numeralsData.declensionSmall.map(r => [r.caseName, r.two, r.three, r.four])} />;
        if (subId === 'declension-large') return renderText(["5-99: <strong>-i</strong> ending for all cases except Nom/Acc."]);
        if (subId === 'quantity') return <SimpleTable headers={["Unit", "Pattern"]} rows={numeralsData.standardMeasures.map(m => [m.unit, m.pattern])} />;
    }

    // --- 11. Prepositions ---
    if (id.startsWith('prep-')) {
        if (id === 'prep-time') return <SimpleTable headers={["Prep", "Case", "Example"]} rows={prepositionsData.timePrepositions.map(p => [p.prep, p.case, p.example])} />;
        if (id === 'prep-space-cases') return renderText(["Location (Kde?): v/na (Loc), u (Gen)", "Direction (Kam?): do (Gen), na (Acc), k (Dat)"]);
        if (id === 'prep-static-dynamic') return <SimpleTable headers={["Static (Loc)", "Dynamic (Acc)"]} rows={prepositionsData.spatialPairs.map(p => [p.static.prep, p.dynamic.prep])} />;
        if (id === 'prep-misc') return <SimpleTable headers={["Prep", "Case", "Meaning"]} rows={prepositionsData.miscPrepositions.map(p => [p.prep, p.case, p.meaning])} />;
    }

    // --- 12. Adverbs ---
    if (id.startsWith('adv-')) {
        if (id === 'adv-derivation') return <SimpleTable headers={["Adj", "Change", "Adv"]} rows={adverbsData.mannerFormation.map(i => [i.adjective, i.suffixChange, i.adverb])} />;
        if (id === 'adv-place') return <SimpleTable headers={["English", "Location", "Direction"]} rows={adverbsData.placeAdverbs.map(a => [a.english, a.location, a.direction])} />;
        if (id === 'adv-time') return <SimpleTable headers={["Czech", "English"]} rows={adverbsData.timeAdverbs.map(a => [a.czech, a.english])} />;
        if (id === 'adv-quantity') return <SimpleTable headers={["Czech", "English"]} rows={adverbsData.quantityAdverbs.map(a => [a.czech, a.english])} />;
        if (id === 'adv-comparison-forms') return <SimpleTable headers={["Base", "Comp", "Super"]} rows={adverbsData.comparisonAdverbs.map(a => [a.base, a.comparative, a.superlative])} />;
    }

    // --- 13. Conjunctions ---
    if (id.startsWith('cat-')) {
        const catName = id.replace('cat-', '').replace(/-/g, ' '); 
        const cat = conjunctionsData.find(c => c.title.toLowerCase() === catName || c.title.toLowerCase().includes(catName));
        if (cat) return <SimpleTable headers={["Term", "English", "Example"]} rows={cat.items.map(i => [i.term, i.english, i.czechExample])} />;
    }

    // --- 14. Culture Sections ---
    // Handle both 'cult-sec-' and 'sec-' prefixes (and 'cult-cat-')
    if (id.startsWith('cult-sec-') || id.startsWith('sec-') || id.startsWith('cult-cat-')) {
        for (const cat of cultureData) {
            const section = cat.sections.find((sec, idx) => {
                // Exact title match (best)
                if (title === sec.title) return true;
                
                // Normalized check
                const normTitle = sec.title.replace(/\s+/g, '-').toLowerCase().substring(0, 20);
                return id.includes(normTitle);
            });

            if (section) {
                if (section.type === 'text') return renderText(section.content);
                
                if (section.type === 'key-value') return <SimpleTable rows={section.content.map((kv:any) => [kv.key, kv.value])} />;
                
                if (section.type === 'biography') return <div className="text-left space-y-6">{section.content.map((b:any, i:number) => <div key={i} className="border-b border-gray-100 pb-4 last:border-0 break-inside-avoid"><strong className="text-lg block mb-1 text-czech-blue">{b.name}</strong><span className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{__html: b.desc}} /></div>)}</div>;
                
                if (section.type === 'timeline') return <SimpleTable headers={["Time", "Event"]} rows={section.content.map((t:any) => [t.time, t.czech])} />;
                
                if (section.type === 'menu') {
                    return (
                        <div className="space-y-6 text-left w-full">
                            {section.content.map((cat:any, i:number) => (
                                <div key={i} className="border border-gray-200 rounded-lg p-4 bg-gray-50 break-inside-avoid">
                                    <h4 className="font-bold text-czech-blue mb-2 text-center border-b border-gray-200 pb-1">{cat.category}</h4>
                                    <div className="space-y-2">
                                        {cat.items.map((item:any, j:number) => (
                                            <div key={j} className="flex justify-between">
                                                <div><strong>{item.name}</strong> <span className="text-xs text-gray-500 ml-1">{item.desc}</span></div>
                                                <div className="text-red-700 font-mono">{item.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                }

                if (section.type === 'checklist' || section.type === 'quiz') {
                        // Simplified checklist/quiz view
                        const items = section.type === 'quiz' ? section.content.map((q:any) => q.q) : section.content;
                        return (
                            <div className="text-left w-full space-y-2">
                                <p className="italic text-gray-500 mb-2">Interactive elements disabled in slideshow.</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    {items.map((it:any, i:number) => <li key={i}>{it}</li>)}
                                </ul>
                            </div>
                        );
                }

                if (section.type === 'song-comparison') {
                    return (
                        <div className="text-left w-full space-y-4">
                            <p className="italic">{section.content.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border p-4 rounded bg-gray-50">
                                    <strong className="block mb-2 text-czech-blue">Czech: {section.content.czech.title}</strong>
                                    {section.content.czech.lyrics && <pre className="whitespace-pre-wrap text-xs text-gray-600 font-sans">{section.content.czech.lyrics}</pre>}
                                </div>
                                <div className="border p-4 rounded bg-gray-50">
                                    <strong className="block mb-2 text-red-700">Original: {section.content.original.title}</strong>
                                    {section.content.original.lyrics && <pre className="whitespace-pre-wrap text-xs text-gray-600 font-sans">{section.content.original.lyrics}</pre>}
                                </div>
                            </div>
                        </div>
                    );
                }
                
                // Fallback for types like 'scale'
                return renderText(["Content type '" + section.type + "' best viewed on full page."]);
            }
        }
    }

    // --- 15. Verbs General (Fallback) ---
    for (const tab of verbsGeneralData) {
        const sec = tab.sections.find(s => s.title === title || id.includes(s.title.replace(/\s+/g, '-').toLowerCase()));
        if (sec) {
            return (
                <div className="space-y-6 w-full text-left">
                    {sec.content.map((block, idx) => {
                        if (block.type === 'text') return <React.Fragment key={idx}>{renderText(block.value)}</React.Fragment>;
                        if (block.type === 'table') return <div key={idx} className="break-inside-avoid"><strong>{block.title}</strong><SimpleTable headers={block.headers} rows={block.rows} /></div>;
                        if (block.type === 'list') return <ul key={idx} className="list-disc pl-5 text-lg">{block.items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{__html: it}} />)}</ul>;
                        if (block.type === 'kv') return <SimpleTable key={idx} rows={block.items.map(it => [it.k, it.v])} />;
                        return null;
                    })}
                </div>
            );
        }
    }

    // --- 16. Pronouns (Fallback) ---
    if (id === 'personal-pronouns') return <SimpleTable headers={pronounsData.personalPronouns.noPrep.headers} rows={pronounsData.personalPronouns.noPrep.rows} />;
    if (id === 'possessive-main') return <SimpleTable headers={pronounsData.possessivePronouns.main.headers} rows={pronounsData.possessivePronouns.main.rows} />;
    if (id === 'demonstrative-main') return <SimpleTable headers={pronounsData.demonstrativePronouns.main.headers} rows={pronounsData.demonstrativePronouns.main.rows} />;
    if (id === 'indefinite-main') return <SimpleTable headers={pronounsData.indefinitePronouns.table.headers} rows={pronounsData.indefinitePronouns.table.rows} />;
    if (id === 'reflexive-main') return <SimpleTable headers={pronounsData.reflexivePronouns.table.headers} rows={pronounsData.reflexivePronouns.table.rows} />;


    // Default Fallback
    return (
        <div className="text-center text-gray-500 py-8">
            <p>Content view not available for this item type.</p>
            <p className="text-sm mt-2">Click title to open full page.</p>
        </div>
    );
};

export default ContentRenderer;
