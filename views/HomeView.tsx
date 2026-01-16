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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-ink mb-1">{wordList.length}</div>
          <div className="text-xs text-secondary font-bold uppercase tracking-wider">סך הכל חידושים</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-green-600 mb-1">{Math.round((acceptedCount / wordList.length) * 100)}%</div>
          <div className="text-xs text-secondary font-bold uppercase tracking-wider">אחוז קליטה</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-accent/30 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-2 h-full bg-accent"></div>
          <div className="text-3xl font-bold text-accent mb-1">{benYehudaCount}</div>
          <div className="text-xs text-secondary font-bold uppercase tracking-wider">מחידושי בן-יהודה</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-200 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-2 h-full bg-blue-600"></div>
          <div className="text-3xl font-bold text-blue-600 mb-1">{bialikCount}</div>
          <div className="text-xs text-secondary font-bold uppercase tracking-wider">מחידושי ביאליק</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Charts Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold font-serif mb-4 w-full border-b pb-2">התפלגות לפי מחדש</h2>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={authorData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {authorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-6 text-sm mt-2">
            {authorData.map(d => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }}></div>
                <span className="font-bold">{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Anecdotes */}
        <div className="space-y-4">
           <div className="bg-paper-dark p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold font-serif text-accent mb-2">בן-יהודה: הכימאי והמהנדס</h3>
            <p className="text-sm leading-relaxed text-ink">
              בן-יהודה התמקד בבניית תשתית מודרנית למדינה שבדרך. הוא חידש מילים "קשות" כמו <strong>בטון, מגהץ, ואופניים</strong>, לעיתים על ידי תרגום שאילות משפות אירופיות והלבשתן בשורש עברי.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold font-serif text-blue-800 mb-2">ביאליק: המשורר והארכיאולוג</h3>
            <p className="text-sm leading-relaxed text-ink">
              ביאליק נמנע לרוב מהמצאת שורשים. הוא חפר במקורות (משנה, תלמוד) ומצא מילים נשכחות כמו <strong>גחלילית</strong> (ממדרש) או <strong>מטוס</strong> (משורש טו"ס העתיק), תוך הענקת משמעות פיוטית וחדשה.
            </p>
          </div>
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