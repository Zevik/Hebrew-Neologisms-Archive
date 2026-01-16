import React from 'react';
import { wordList, stats } from '../services/data';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { WordStatus, Author } from '../types';

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const acceptedCount = wordList.filter(w => w.status === WordStatus.ACCEPTED).length;
  const rejectedCount = wordList.filter(w => w.status === WordStatus.REJECTED).length;
  const bialikCount = wordList.filter(w => w.author === Author.BIALIK).length;
  const benYehudaCount = wordList.filter(w => w.author === Author.BEN_YEHUDA).length;

  const statusData = [
    { name: 'נקלטו', value: acceptedCount, color: '#16a34a' },
    { name: 'נדחו/אחר', value: wordList.length - acceptedCount, color: '#ef4444' },
  ];

  const authorData = [
    { name: 'בן-יהודה', value: benYehudaCount, color: '#8c3a3a' },
    { name: 'ביאליק', value: bialikCount, color: '#2563eb' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="text-center max-w-4xl mx-auto py-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
          קורפוס החידושים הלשוניים
        </h1>
        <h2 className="text-2xl font-serif text-ink mb-2">
          אליעזר בן-יהודה וחיים נחמן ביאליק
        </h2>
        <p className="text-lg text-secondary font-light">
          ניתוח לקסיקלי של מפעלי התחייה העברית: מהקדחת של בן-יהודה ועד הגחלילית של ביאליק
        </p>
      </header>

      {/* Stats Cards */}
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-ink mb-1">{wordList.length}</div>
          <div className="text-xs text-secondary font-bold uppercase tracking-wider">סך הכל חידושים</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-green-600 mb-1">{Math.round((acceptedCount / wordList.length) * 100)}%</div>
          <div className="text-xs text-secondary font-bold uppercase tracking-wider">אחוז קליטה</div>
        </div>
      </div>

      <div className="text-center py-4">
        <button
          onClick={() => onNavigate('dictionary')}
          className="bg-ink hover:bg-black text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
        >
          <span>לצפייה בכל הערכים</span>
          <span>←</span>
        </button>
      </div>
    </div>
  );
};