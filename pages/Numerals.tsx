
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, Hash, Scale, List, Table, Info, Layers } from 'lucide-react';
import { 
  basicNumerals, 
  bigNumerals, 
  numeralTypes, 
  declensionOne, 
  declensionSmall, 
  standardMeasures, 
  generalMeasures 
} from '../data/numerals';
import UniversalSection from '../components/UniversalSection';
import { useScrollToHash } from '../hooks/useScrollToHash';

const Numerals: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'counting' | 'types' | 'declension' | 'quantity'>('counting');
  useScrollToHash();

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden min-h-[500px]">
        <div className="p-8 md:p-12">
          
          <button 
            onClick={() => navigate('/grammar')}
            className="flex items-center gap-2 text-gray-500 hover:text-czech-blue mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Grammar
          </button>

          <h2 className="text-4xl text-czech-blue font-hand mb-6">Numerals</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            From counting to complex declensions and expressions of quantity.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-1">
            <TabButton active={activeTab === 'counting'} onClick={() => setActiveTab('counting')} icon={<Calculator size={18} />} label="Counting" />
            <TabButton active={activeTab === 'types'} onClick={() => setActiveTab('types')} icon={<Layers size={18} />} label="Types" />
            <TabButton active={activeTab === 'declension'} onClick={() => setActiveTab('declension')} icon={<Table size={18} />} label="Declension (Cases)" />
            <TabButton active={activeTab === 'quantity'} onClick={() => setActiveTab('quantity')} icon={<Scale size={18} />} label="Quantity" />
          </div>

          <div className="animate-in fade-in duration-300">
            {activeTab === 'counting' && <CountingSection />}
            {activeTab === 'types' && <TypesSection />}
            {activeTab === 'declension' && <DeclensionSection />}
            {activeTab === 'quantity' && <QuantitySection />}
          </div>

        </div>
      </div>
    </div>
  );
};

const TabButton: React.FC<{active: boolean, onClick: () => void, icon: React.ReactNode, label: string}> = ({active, onClick, icon, label}) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-t-lg font-bold transition-all border-b-2 ${
      active ? 'border-czech-blue text-czech-blue bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'
    }`}
  >
    {icon} {label}
  </button>
);

const CountingSection: React.FC = () => (
  <div className="space-y-12">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <UniversalSection
        id="num-basic"
        title="1 to 30"
        searchableTitle="Numerals 1-30"
        path="/grammar/numerals"
        category="Grammar"
        collapsible={false}
      >
        <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-200">
              {basicNumerals.map((item, idx) => (
                <tr key={idx} className="hover:bg-white transition-colors">
                  <td className="px-4 py-2 font-bold text-czech-blue w-12 text-right">{item.number}</td>
                  <td className="px-4 py-2 text-gray-700">{item.czech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </UniversalSection>

      <UniversalSection
        id="num-large"
        title="Orders of Magnitude"
        searchableTitle="Large Numbers"
        path="/grammar/numerals"
        category="Grammar"
        collapsible={false}
      >
        <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-200">
              {bigNumerals.map((item, idx) => (
                <tr key={idx} className="hover:bg-white transition-colors">
                  <td className="px-4 py-2 font-bold text-czech-blue w-24 text-right">{item.number}</td>
                  <td className="px-4 py-2 text-gray-700">{item.czech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg text-sm text-yellow-900 space-y-2">
          <p>
            <span className="font-bold block text-yellow-800">Pronunciation Rule:</span>
            <strong>čtyři</strong> (4) is often pronounced as <strong>štyry</strong> in colloquial Czech. This extends to 14, 40, 400, etc.
          </p>
          <div className="border-t border-yellow-200 my-2"></div>
          <p>
            <span className="font-bold block text-yellow-800">Zero & Negative:</span>
            0 = <strong>nula</strong><br/>
            -1 = <strong>mínus jedna</strong>
          </p>
        </div>
      </UniversalSection>
    </div>

    <UniversalSection
        id="num-decimals"
        title="Decimals & Fractions"
        searchableTitle="Decimals and Fractions"
        path="/grammar/numerals"
        category="Grammar"
        collapsible={false}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 p-5 rounded-lg bg-white">
          <h4 className="font-bold text-czech-blue mb-2">Decimals</h4>
          <p className="text-gray-600 text-sm mb-2">Written with a comma. Pronounced with "celá" (whole).</p>
          <ul className="space-y-1 text-gray-800 font-medium">
            <li>1,5 = jedna celá pět</li>
            <li>0,2 = nula celá dva</li>
          </ul>
        </div>
        <div className="border border-gray-200 p-5 rounded-lg bg-white">
          <h4 className="font-bold text-czech-blue mb-2">Fractions</h4>
          <p className="text-gray-600 text-sm mb-2">Usually ends in <strong>-ina</strong>. Irregulars for 2-4.</p>
          <ul className="space-y-1 text-gray-800 font-medium">
            <li>1/2 = polovina</li>
            <li>1/3 = třetina</li>
            <li>1/4 = čtvrtina</li>
            <li>1/5 = pětina</li>
          </ul>
        </div>
      </div>
    </UniversalSection>

  </div>
);

const TypesSection: React.FC = () => (
  <UniversalSection
    id="num-types"
    title="Types of Numerals"
    searchableTitle="Types of Numerals"
    path="/grammar/numerals"
    category="Grammar"
    collapsible={false}
  >
    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-gray-100 text-gray-600 uppercase font-bold text-xs">
          <tr>
            <th className="px-4 py-3 border-b">#</th>
            <th className="px-4 py-3 border-b">Cardinal (Count)</th>
            <th className="px-4 py-3 border-b">Ordinal (Order)</th>
            <th className="px-4 py-3 border-b">Name (Noun)</th>
            <th className="px-4 py-3 border-b">Multiplication</th>
            <th className="px-4 py-3 border-b">Generic</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {numeralTypes.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-4 py-2 font-bold text-gray-400 border-r">{row.val}</td>
              <td className="px-4 py-2 font-medium text-czech-blue">{row.cardinal}</td>
              <td className="px-4 py-2 text-gray-700">{row.ordinal}</td>
              <td className="px-4 py-2 text-gray-700 bg-gray-50/50">{row.name}</td>
              <td className="px-4 py-2 text-gray-700">{row.multiplication}</td>
              <td className="px-4 py-2 text-gray-500 italic">{row.generic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-900">
      <h4 className="font-bold mb-2">Notes on "Number Names" (Noun forms):</h4>
      <p className="mb-2">These are used for trams, buses, room numbers, grades, or beer degrees.</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Most end in <strong>-ka</strong>.</li>
        <li>9, 10, 20, 30... use <strong>-ítka</strong> (devítka, desítka).</li>
        <li>Compound numbers (e.g. 33) read the second digit first: <strong>třiatřicítka</strong>.</li>
        <li>Hundreds (200-900) use the Genitive form + stovka: 500 = <strong>pětistovka</strong>.</li>
      </ul>
    </div>
  </UniversalSection>
);

const DeclensionSection: React.FC = () => (
  <div className="space-y-10">
    
    {/* One */}
    <UniversalSection
        id="num-declension-one"
        title="Jeden / Jedna / Jedno"
        searchableTitle="Declension of One"
        subTitle="1"
        path="/grammar/numerals"
        category="Grammar"
        collapsible={false}
    >
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
            <tr>
              <th className="px-4 py-3 border-b">Case</th>
              <th className="px-4 py-3 border-b text-blue-700">Masculine</th>
              <th className="px-4 py-3 border-b text-red-600">Feminine</th>
              <th className="px-4 py-3 border-b text-green-600">Neuter</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {declensionOne.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-500 text-xs md:text-sm">
                  <span className="block text-gray-800">{row.caseName}</span>
                  <span className="text-[10px] italic">{row.question}</span>
                </td>
                <td className="px-4 py-2 font-bold text-blue-700">{row.masculine}</td>
                <td className="px-4 py-2 font-bold text-red-600">{row.feminine}</td>
                <td className="px-4 py-2 font-bold text-green-600">{row.neuter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2 italic">Endings are very similar to those of ten, ta, to.</p>
    </UniversalSection>

    {/* 2, 3, 4 */}
    <UniversalSection
        id="num-declension-small"
        title="Dva, Tři, Čtyři"
        searchableTitle="Declension of 2, 3, 4"
        subTitle="2 - 4"
        path="/grammar/numerals"
        category="Grammar"
        collapsible={false}
    >
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
            <tr>
              <th className="px-4 py-3 border-b">Case</th>
              <th className="px-4 py-3 border-b">2 (Dva/Dvě)</th>
              <th className="px-4 py-3 border-b">3 (Tři)</th>
              <th className="px-4 py-3 border-b">4 (Čtyři)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {declensionSmall.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium text-gray-800">{row.caseName}</td>
                <td className="px-4 py-2 font-bold text-czech-blue">{row.two}</td>
                <td className="px-4 py-2 font-medium text-gray-700">{row.three}</td>
                <td className="px-4 py-2 font-medium text-gray-700">{row.four}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 bg-orange-50 border border-orange-100 p-3 rounded text-sm text-orange-800">
        <strong>Note:</strong> <em>třema</em> and <em>čtyřma</em> are correct colloquial forms (officially <em>třemi, čtyřmi</em>). <em>Dvěma</em> is correct in both.
      </div>
    </UniversalSection>

    {/* 5+ */}
    <UniversalSection
        id="num-declension-large"
        title="Five and more"
        searchableTitle="Declension of 5+"
        subTitle="5 +"
        path="/grammar/numerals"
        category="Grammar"
        collapsible={false}
    >
      <p className="text-gray-700 mb-4">
        Numbers from 5 to 99 are simpler. They basically have two forms:
      </p>
      <ul className="space-y-2">
        <li className="flex items-start gap-3">
          <span className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-bold uppercase min-w-[80px] text-center">Nom / Acc</span>
          <span>Basic form (e.g. <strong>pět, šest, dvacet</strong>)</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-white border border-gray-300 px-2 py-1 rounded text-xs font-bold uppercase min-w-[80px] text-center">All Others</span>
          <span>Add ending <strong>-i</strong> (e.g. bez pět<strong>i</strong>, s dvacet<strong>i</strong>)</span>
        </li>
      </ul>
      <div className="mt-4 text-sm text-gray-500 italic">
        Compound numbers decline in all parts: <em>bez dvacet<strong>i</strong> pět<strong>i</strong></em>.
      </div>
    </UniversalSection>

  </div>
);

const QuantitySection: React.FC = () => (
  <div className="space-y-12">
    
    <UniversalSection
        id="num-quantity"
        title="Expressing Quantity"
        searchableTitle="Expressing Quantity"
        path="/grammar/numerals"
        category="Grammar"
        collapsible={false}
    >
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <p className="text-yellow-900 font-bold text-lg">Rule of Thumb</p>
        <p className="text-yellow-800">
          The word being measured is always in the <strong>Genitive Case</strong> (Koho? Čeho?).
          <br/>
          <span className="font-normal italic text-sm">Example: málo knih (few books), kilo meruněk (kilo of apricots).</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Standard Measures */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-bold text-gray-700">Standard Measures</div>
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 uppercase font-bold text-xs">
              <tr>
                <th className="px-4 py-2 border-b">Unit</th>
                <th className="px-4 py-2 border-b">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {standardMeasures.map((m, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2">
                    <span className="font-bold text-czech-blue">{m.unit}</span>
                    <span className="block text-xs text-gray-400">{m.english}</span>
                  </td>
                  <td className="px-4 py-2 italic text-gray-700">{m.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* General Measures */}
        <div className="border border-gray-200 rounded-lg overflow-hidden h-fit">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-bold text-gray-700">General Measures</div>
          <div className="p-4 bg-white grid grid-cols-1 gap-2">
            {generalMeasures.map((m, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                <span className="font-bold text-purple-700">{m.czech}</span>
                <span className="text-gray-600 text-sm">{m.english}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </UniversalSection>

    {/* All vs Every */}
    <UniversalSection
        id="num-all-every"
        title='"All" vs. "Every/Each"'
        searchableTitle="All vs Every"
        path="/grammar/numerals"
        category="Grammar"
        collapsible={false}
        className="bg-blue-50 border border-blue-200 rounded-xl overflow-hidden shadow-sm"
        headerClass="bg-blue-100/50 p-4 md:p-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-lg text-czech-blue mb-2">Všichni (All)</h4>
          <p className="text-gray-700 mb-2">Refers to the total group.</p>
          <div className="bg-white p-3 rounded border border-blue-100 italic text-gray-800">
            "Všichni studenti umějí číst."<br/>
            <span className="text-gray-500 text-sm not-italic">(All students can read.)</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg text-czech-blue mb-2">Každý (Every/Each)</h4>
          <p className="text-gray-700 mb-2">Refers to individual members.</p>
          <div className="bg-white p-3 rounded border border-blue-100 italic text-gray-800">
            "Každý člověk má srdce."<br/>
            <span className="text-gray-500 text-sm not-italic">(Every person has a heart.)</span>
          </div>
        </div>
      </div>
    </UniversalSection>

  </div>
);

export default Numerals;
