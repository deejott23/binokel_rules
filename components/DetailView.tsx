
import React from 'react';
import { RuleSection } from '../types';
import { ArrowLeft } from './Icons';

interface DetailViewProps {
  rule: RuleSection;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ rule, onBack }) => {
  return (
    <div className="flex flex-col h-full">
        <header className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 border-b border-slate-200 flex items-center">
            <button onClick={onBack} className="p-2 rounded-full hover:bg-slate-100 mr-3">
                <ArrowLeft className="w-6 h-6 text-slate-600" />
            </button>
            <h2 className="text-lg font-bold text-slate-800 truncate">{rule.title}</h2>
        </header>
        <div className="p-5 text-slate-700 text-base leading-relaxed space-y-3 overflow-y-auto flex-grow">
            {rule.content}
        </div>
    </div>
  );
};

export default DetailView;
