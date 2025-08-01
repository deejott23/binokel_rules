
import React, { useState, useCallback } from 'react';
import { RuleSection } from './types';
import RulesView from './components/RulesView';
import DetailView from './components/DetailView';

type View = 'rules' | 'detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('rules');
  const [selectedRule, setSelectedRule] = useState<RuleSection | null>(null);

  const handleSelectRule = useCallback((rule: RuleSection) => {
    setSelectedRule(rule);
    setCurrentView('detail');
  }, []);

  const handleBackToRules = useCallback(() => {
    setCurrentView('rules');
    setSelectedRule(null);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'rules':
        return <RulesView onSelectRule={handleSelectRule} />;
      case 'detail':
        return selectedRule ? <DetailView rule={selectedRule} onBack={handleBackToRules} /> : <RulesView onSelectRule={handleSelectRule} />;
      default:
        return <RulesView onSelectRule={handleSelectRule} />;
    }
  };

  return (
    <div className="h-screen bg-slate-100 flex flex-col justify-center items-center">
      <main className="w-full max-w-lg h-full flex flex-col bg-white shadow-2xl">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
