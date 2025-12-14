
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, UserCheck, MapPin, HelpCircle, RefreshCw } from 'lucide-react';
import { 
  personalPronouns, 
  possessivePronouns, 
  demonstrativePronouns, 
  vsechnoPronouns, 
  indefinitePronouns, 
  reflexivePronouns 
} from '../data/pronouns';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Pronouns: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'personal' | 'possessive' | 'demonstrative' | 'indefinite' | 'reflexive'>('personal');
  useScrollToHash();

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        <div className="p-8 md:p-12">
          
          <button 
            onClick={() => navigate('/grammar')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Grammar
          </button>

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Pronouns</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Essential words that substitute nouns. Personal, possessive, demonstrative, and more.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-100 pb-1">
            <button 
              onClick={() => setActiveTab('personal')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'personal' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <User size={18} /> Personal
            </button>
            <button 
              onClick={() => setActiveTab('possessive')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'possessive' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <UserCheck size={18} /> Possessive
            </button>
            <button 
              onClick={() => setActiveTab('demonstrative')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'demonstrative' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <MapPin size={18} /> Demonstrative
            </button>
            <button 
              onClick={() => setActiveTab('indefinite')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'indefinite' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <HelpCircle size={18} /> Indefinite/Negative
            </button>
            <button 
              onClick={() => setActiveTab('reflexive')}
              className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
                activeTab === 'reflexive' ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <RefreshCw size={18} /> Reflexive
            </button>
          </div>

          <div className="animate-in fade-in duration-300">
            {activeTab === 'personal' && <PersonalSection />}
            {activeTab === 'possessive' && <PossessiveSection />}
            {activeTab === 'demonstrative' && <DemonstrativeSection />}
            {activeTab === 'indefinite' && <IndefiniteSection />}
            {activeTab === 'reflexive' && <ReflexiveSection />}
          </div>

        </div>
      </div>
    </div>
  );
};

const TableRenderer = ({ headers, rows, subHeaders }: { headers: string[], rows: string[][], subHeaders?: string[] }) => (
  <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-8">
    <table className="w-full text-sm text-left">
      <thead className="bg-gray-100 text-gray-700 font-bold uppercase text-xs">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="px-4 py-3 border-b border-gray-200">{h}</th>
          ))}
        </tr>
        {subHeaders && (
          <tr className="bg-gray-50 text-gray-500 font-semibold text-[10px]">
            {subHeaders.map((h, i) => (
              <th key={i} className="px-4 py-1 border-b border-gray-200">{h}</th>
            ))}
          </tr>
        )}
      </thead>
      <tbody className="divide-y divide-gray-100">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-blue-50/30 transition-colors">
            {row.map((cell, j) => (
              <td 
                key={j} 
                className={`px-4 py-2 border-r border-gray-50 last:border-0 ${j === 0 ? 'font-bold text-gray-600 bg-gray-50/50' : ''}`}
                dangerouslySetInnerHTML={{__html: cell}}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PersonalSection: React.FC = () => (
  <UniversalSection
    id="personal-pronouns"
    title="Personal Pronouns"
    searchableTitle="Personal Pronouns"
    path="/grammar/pronouns"
    category="Grammar"
    collapsible={false}
  >
    <p className="text-gray-600 mb-6">
      Forms vary depending on whether they follow a preposition. "Já", "ty", "on" also have stressed forms.
    </p>

    <h4 className="text-lg font-bold text-czech-blue mb-2">Without Preposition (Unstressed)</h4>
    <TableRenderer headers={personalPronouns.noPrep.headers} rows={personalPronouns.noPrep.rows} />

    <h4 className="text-lg font-bold text-czech-blue mb-2">After Preposition</h4>
    <TableRenderer headers={personalPronouns.withPrep.headers} rows={personalPronouns.withPrep.rows} />

    <h4 className="text-lg font-bold text-czech-blue mb-2">Strong Forms (Start of Sentence / Stressed)</h4>
    <TableRenderer headers={personalPronouns.strong.headers} rows={personalPronouns.strong.rows} />
  </UniversalSection>
);

const PossessiveSection: React.FC = () => (
  <>
    <UniversalSection
        id="possessive-main"
        title="Possessive Pronouns"
        searchableTitle="Possessive Pronouns"
        path="/grammar/pronouns"
        category="Grammar"
        collapsible={false}
    >
        <p className="text-gray-600 mb-6">
        Express possession (my, your, their). Forms mark the gender and case of the *possessed* noun.
        </p>
        <TableRenderer headers={possessivePronouns.main.headers} rows={possessivePronouns.main.rows} />
    </UniversalSection>

    <UniversalSection
        id="possessive-svuj"
        title='"Svůj" - The Reflexive Possessive'
        searchableTitle="Reflexive Possessive 'Svůj'"
        path="/grammar/pronouns"
        category="Grammar"
        collapsible={false}
        className="bg-yellow-50 border border-yellow-200 rounded-xl overflow-hidden shadow-sm"
        headerClass="bg-yellow-100/50 p-4 md:p-5"
    >
      <p className="text-yellow-900 mb-4">
        Used when the possessor is also the <strong>subject</strong> of the sentence. Rough equivalent of "my own", "his own".
      </p>
      <p className="text-sm text-yellow-800 italic mb-4">
        Example: Šel navštívit <strong>jeho</strong> bratra (someone else's brother) vs. <strong>svého</strong> bratra (his own brother).
      </p>
      <TableRenderer headers={possessivePronouns.svuj.headers} rows={possessivePronouns.svuj.rows} />
    </UniversalSection>
  </>
);

const DemonstrativeSection: React.FC = () => (
  <>
    <UniversalSection
        id="demonstrative-main"
        title="Demonstrative Pronouns (Ten, Ta, To)"
        searchableTitle="Demonstrative Pronouns"
        path="/grammar/pronouns"
        category="Grammar"
        collapsible={false}
    >
        <TableRenderer 
        headers={demonstrativePronouns.main.headers} 
        subHeaders={demonstrativePronouns.main.subHeaders}
        rows={demonstrativePronouns.main.rows} 
        />

        <h4 className="text-lg font-bold text-czech-blue mb-2">This vs. That (Variants)</h4>
        <p className="text-gray-600 mb-4 text-sm">
        <strong>Tento/Tenhle</strong> is used for pointing at something specific (This here). <strong>Tamten</strong> is used for distant objects (That there).
        </p>
        <TableRenderer headers={demonstrativePronouns.variants.headers} rows={demonstrativePronouns.variants.rows} />
    </UniversalSection>

    <UniversalSection
        id="vsechno-pronoun"
        title="Všechno (Everything/All)"
        searchableTitle="Pronoun 'Všechno'"
        path="/grammar/pronouns"
        category="Grammar"
        collapsible={false}
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <h4 className="text-lg font-bold text-gray-600 mb-2">Singular</h4>
            <TableRenderer headers={vsechnoPronouns.singular.headers} rows={vsechnoPronouns.singular.rows} />
        </div>
        <div>
            <h4 className="text-lg font-bold text-gray-600 mb-2">Plural</h4>
            <TableRenderer headers={vsechnoPronouns.plural.headers} rows={vsechnoPronouns.plural.rows} />
        </div>
        </div>
    </UniversalSection>
  </>
);

const IndefiniteSection: React.FC = () => (
  <UniversalSection
    id="indefinite-main"
    title="Interrogative, Indefinite & Negative"
    searchableTitle="Indefinite Pronouns"
    path="/grammar/pronouns"
    category="Grammar"
    collapsible={false}
  >
    <TableRenderer headers={indefinitePronouns.table.headers} rows={indefinitePronouns.table.rows} />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {indefinitePronouns.other.map((item, idx) => (
        <div key={idx} className="border border-gray-200 p-4 rounded-lg bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-czech-blue bg-white px-2 py-1 rounded border border-gray-200">
              {item.prefix || item.suffix}
            </span>
            <span className="text-gray-600 italic">{item.meaning}</span>
          </div>
          <p className="text-sm text-gray-800">{item.examples}</p>
        </div>
      ))}
    </div>
  </UniversalSection>
);

const ReflexiveSection: React.FC = () => (
  <UniversalSection
    id="reflexive-main"
    title="Reflexive Pronouns (Se, Si)"
    searchableTitle="Reflexive Pronouns"
    path="/grammar/pronouns"
    category="Grammar"
    collapsible={false}
  >
    <p className="text-gray-600 mb-6">
      Refers back to the subject. <strong>Se</strong>/<strong>Si</strong> are unstressed forms.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <TableRenderer headers={reflexivePronouns.table.headers} rows={reflexivePronouns.table.rows} />
      
      <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 h-fit">
        <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
          <HelpCircle size={16}/> Difference
        </h4>
        <ul className="space-y-2 text-yellow-900 text-sm">
          <li><strong>Se</strong> has the meaning of Accusative (Koho? Co?).</li>
          <li><strong>Si</strong> has the meaning of Dative (Komu? Čemu?).</li>
          <li>Unlike English, Czech uses one form for all persons (myself, yourself, themselves -> se/si).</li>
        </ul>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-xl font-bold text-czech-blue mb-4 border-b pb-2">Uses of SE</h4>
        <div className="space-y-4">
          {reflexivePronouns.seUses.map((u, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-bold text-gray-700 text-sm">{u.use}</span>
                <span className="text-xs text-gray-500 italic">{u.desc}</span>
              </div>
              <p className="text-sm bg-gray-50 p-2 rounded border border-gray-100">{u.examples}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold text-czech-blue mb-4 border-b pb-2">Uses of SI</h4>
        <div className="space-y-4">
          {reflexivePronouns.siUses.map((u, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-bold text-gray-700 text-sm">{u.use}</span>
                <span className="text-xs text-gray-500 italic">{u.desc}</span>
              </div>
              <p className="text-sm bg-gray-50 p-2 rounded border border-gray-100">{u.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </UniversalSection>
);

export default Pronouns;
