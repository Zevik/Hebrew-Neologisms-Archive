import React from 'react';
import { WordEntry, WordStatus, Author } from '../types';
import { CheckCircle, XCircle, AlertCircle, HelpCircle, User, Feather } from 'lucide-react';

interface WordCardProps {
  entry: WordEntry;
}

export const WordCard: React.FC<WordCardProps> = ({ entry }) => {
  const getStatusIcon = (status: WordStatus) => {
    switch (status) {
      case WordStatus.ACCEPTED:
        return <CheckCircle size={16} className="text-green-600" />;
      case WordStatus.REJECTED:
        return <XCircle size={16} className="text-red-500" />;
      case WordStatus.MODIFIED:
        return <AlertCircle size={16} className="text-amber-500" />;
      default:
        return <HelpCircle size={16} className="text-gray-400" />;
    }
  };

  const getStatusLabel = (status: WordStatus) => {
    switch (status) {
      case WordStatus.ACCEPTED: return "נקלטה";
      case WordStatus.REJECTED: return "נדחתה";
      case WordStatus.MODIFIED: return "משמעות שונתה";
      case WordStatus.UNCERTAIN: return "לא נפוצה";
      default: return "לא ידוע";
    }
  };

  const getStatusClass = (status: WordStatus) => {
    switch (status) {
      case WordStatus.ACCEPTED: return "bg-green-50 border-green-200 text-green-800";
      case WordStatus.REJECTED: return "bg-red-50 border-red-200 text-red-800";
      case WordStatus.MODIFIED: return "bg-amber-50 border-amber-200 text-amber-800";
      default: return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const isBenYehuda = entry.author === Author.BEN_YEHUDA;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow duration-200 flex flex-col h-full relative overflow-hidden">
      {/* Author Indicator Strip */}
      <div className={`absolute top-0 right-0 left-0 h-1 ${isBenYehuda ? 'bg-accent' : 'bg-blue-600'}`} />
      
      <div className="flex justify-between items-start mb-3 pt-2">
        <div>
          <h3 className="text-2xl font-serif font-bold text-ink mb-1">{entry.word}</h3>
          <span className="text-sm font-mono text-secondary bg-gray-100 px-2 py-0.5 rounded">
            {entry.translation}
          </span>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-bold ${getStatusClass(entry.status)}`}>
          {getStatusIcon(entry.status)}
          <span>{getStatusLabel(entry.status)}</span>
        </div>
      </div>

      <div className="flex-grow">
        <p className="text-ink mb-4 text-lg leading-relaxed font-serif">
          {entry.definition}
        </p>

        <div className="space-y-2 text-sm text-secondary border-t border-gray-100 pt-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2">
            {isBenYehuda ? <User size={14} className="text-accent" /> : <Feather size={14} className="text-blue-600" />}
            <span className={isBenYehuda ? "text-accent" : "text-blue-600"}>{entry.author}</span>
          </div>

          {entry.etymology && (
            <div className="flex gap-2">
              <span className="font-bold text-ink shrink-0">אטימולוגיה:</span>
              <span>{entry.etymology}</span>
            </div>
          )}
          
          <div className="flex gap-2">
            <span className="font-bold text-ink shrink-0">משקל/תבנית:</span>
            <span>{entry.weight}</span>
          </div>

          {entry.notes && (
            <div className="mt-3 p-3 bg-paper-dark rounded border border-gray-200 italic text-xs">
              <span className="font-bold block mb-1 not-italic uppercase tracking-wider text-gray-500">הערות:</span>
              {entry.notes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};