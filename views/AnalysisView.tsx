import React from 'react';
import { stats } from '../services/data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const AnalysisView: React.FC = () => {
  const chartData = stats.topWeights;

  // Custom colors for the bar chart
  const colors = ['#8c3a3a', '#d4a373', '#4a5568', '#5D4037', '#795548'];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-accent mb-6 border-b pb-4">ניתוח מורפולוגי</h2>
        <p className="text-lg text-ink mb-6">
          ראובן סיוון מנתח בדוח את הנטייה של בן-יהודה לתבניות משקל מסוימות. ניתן לראות העדפה ברורה למשקל <strong>מִפְעָלָה</strong> עבור שמות מקומות וכלים, ושימוש נרחב בסיומת <strong>־וּת</strong> לשמות מופשטים.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">המשקלים והסיומות הנפוצים ביותר</h3>
          <div className="h-80 w-full" dir="ltr">
             {/* Direction LTR is forced for the chart axis to render correctly in Recharts, but labels are Hebrew */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                  interval={0}
                  tick={{fill: '#4a5568', fontSize: 14}}
                />
                <YAxis tick={{fill: '#4a5568'}} />
                <Tooltip 
                  cursor={{fill: '#f3f0e8'}}
                  contentStyle={{borderRadius: '8px', border: '1px solid #e5e7eb', direction: 'rtl'}}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-sm text-secondary mt-2">מספר החידושים לפי משקל/סיומת (מתוך 5 הקבוצות הגדולות)</p>
        </div>

        <div className="bg-paper-dark p-8 rounded-xl border border-accent/20">
          <h3 className="text-2xl font-serif font-bold text-accent mb-4">מדוע מילים נדחו?</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold border border-gray-200">1</span>
              <div>
                <h4 className="font-bold text-lg">מורכבות פונטית</h4>
                <p className="text-secondary">מילים ארוכות או מסורבלות להגייה (כמו הלחמי "אב-" ליסודות) נדחו לטובת חלופות קצרות יותר (סיומת -ָן).</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold border border-gray-200">2</span>
              <div>
                <h4 className="font-bold text-lg">זרות לשונית</h4>
                <p className="text-secondary">חידושים המבוססים על שורשים ערביים רחוקים שלא היו מוכרים לדוברי העברית (כמו "מוז" לבננה או "שיץ" לפוזל) לא נקלטו.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold border border-gray-200">3</span>
              <div>
                <h4 className="font-bold text-lg">כוחו של ההרגל</h4>
                <p className="text-secondary">מילים לועזיות שהשתרשו עמוק (כמו "בננה" או "פירמידה") היו חזקות מכדי להיות מוחלפות בחידוש עברי ("מוז", "הרם").</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};