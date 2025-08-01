
import React from 'react';
import { rules } from '../data/binokelRules';
import { RuleSection } from '../types';

interface RulesViewProps {
  onSelectRule: (rule: RuleSection) => void;
}

const RuleCard: React.FC<{ rule: RuleSection; onClick: () => void }> = ({ rule, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left flex flex-col justify-between"
    aria-label={`Regeln für ${rule.title} ansehen`}
  >
    <div>
        <h3 className="text-md font-bold text-emerald-700">{rule.title}</h3>
        <p className="text-sm text-slate-600 mt-1">{rule.summary}</p>
    </div>
  </button>
);

const RulesView: React.FC<RulesViewProps> = ({ onSelectRule }) => {
  return (
    <div className="flex-grow flex flex-col relative">
       <div className="p-6 bg-slate-50 border-b border-slate-200 text-center">
         <h1 className="text-2xl font-bold text-slate-800">
           Binokel für die Dubliner Jungs
         </h1>
         <p className="text-slate-600 mt-2">
           Eure Regeln für den Ochsen, Jungs!
         </p>
         <a 
           href="https://share.google/nBhT0jT3HAUFDqSvR" 
           target="_blank" 
           rel="noopener noreferrer"
           className="text-emerald-600 hover:text-emerald-700 font-semibold mt-3 inline-block"
         >
           Infos & Anfahrt zum Dubliner
         </a>
      </div>
      <div className="flex-grow p-4 space-y-3 bg-slate-100 overflow-y-auto">
        {rules.map((rule) => (
          <RuleCard key={rule.id} rule={rule} onClick={() => onSelectRule(rule)} />
        ))}
      </div>
    </div>
  );
};

export default RulesView;
