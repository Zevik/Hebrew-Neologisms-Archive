import React from 'react';

export const MethodologyView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in duration-500">
      
      <header>
        <h2 className="text-4xl font-serif font-bold text-accent mb-4">מתודולוגיות של תחייה</h2>
        <p className="text-xl text-secondary">השוואה בין שתי הגישות המרכזיות בהחייאת השפה העברית</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-4">
          <div className="h-1 w-20 bg-accent mb-4"></div>
          <h3 className="text-2xl font-serif font-bold text-ink">אליעזר בן-יהודה</h3>
          <h4 className="text-sm font-bold text-accent uppercase tracking-wider">המפעל הלקסיקוגרפי</h4>
          <p className="text-ink leading-relaxed">
            בן-יהודה פעל מתוך דחיפות לאומית ליצור שפה שימושית לחיי היום-יום. גישתו הייתה פרגמטית וטכנית:
          </p>
          <ul className="list-disc list-inside text-secondary space-y-2 text-sm">
            <li><strong>גזירה מורפולוגית:</strong> התאמת שורשים למשקלים קבועים (כמו משקל המכשירים).</li>
            <li><strong>שאילה משפות שמיות:</strong> אימוץ מילים מערבית (כמו "אדיב" או "גרב") והתאמתן לפונולוגיה העברית.</li>
            <li><strong>חידוש יש מאין:</strong> המצאת שורשים חדשים או הלחמים (כמו "חיידק" - חי+דק) לתיאור מונחים מדעיים.</li>
            <li><strong>מבחן האקוסטיקה:</strong> ניסוי המילים בבית (כמו בסיפור ה"קלף" וה"כלב").</li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="h-1 w-20 bg-blue-600 mb-4"></div>
          <h3 className="text-2xl font-serif font-bold text-ink">חיים נחמן ביאליק</h3>
          <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider">גילוי הרבדים הנשכחים</h4>
          <p className="text-ink leading-relaxed">
            ביאליק, בניגוד לבן-יהודה, נרתע מהמצאת מילים מלאכותיות ("בית חרושת למילים"). גישתו הייתה "ארכיאולוגית":
          </p>
          <ul className="list-disc list-inside text-secondary space-y-2 text-sm">
            <li><strong>חשיפה:</strong> איתור מילים נדירות במקרא, במשנה ובמדרש (כמו "גחלילית" או "מטוס").</li>
            <li><strong>הרחבת משמעות:</strong> הענקת משמעות מודרנית למילה עתיקה (כמו "חשמל" או "אגדה").</li>
            <li><strong>מצלול ופיוט:</strong> העדפה למילים בעלות צליל "עברי" שורשי ועמוק, גם אם המשמעות הוסטה.</li>
            <li><strong>משקלים קלאסיים:</strong> שימוש בתבניות מסורתיות ללא עיוות השורש.</li>
          </ul>
        </section>
      </div>

      <section className="bg-paper-dark p-8 rounded-xl border border-gray-200 mt-8">
        <h3 className="text-xl font-bold mb-4 font-serif">המקורות למחקר</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <strong className="block mb-2">עבור בן-יהודה:</strong>
            <p className="text-secondary mb-2">מבוסס על הקונטרס "חידושי המלים של א' בן-יהודה" מאת ראובן סיוון ("לשוננו לעם", תשכ"א) ועל המילון הגדול.</p>
          </div>
          <div>
            <strong className="block mb-2">עבור ביאליק:</strong>
            <p className="text-secondary">מבוסס על מחקרים של האקדמיה ללשון העברית, כתבי ביאליק וניתוחי שירתו שבהם שובצו החידושים לראשונה.</p>
          </div>
        </div>
      </section>

    </div>
  );
};