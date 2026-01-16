import React, { useState, useMemo } from 'react';
import { wordList } from '../services/data';
import { WordCard } from '../components/WordCard';
import { WordStatus, Author } from '../types';
import { Search, Filter, User, Feather } from 'lucide-react';

export const DictionaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [authorFilter, setAuthorFilter] = useState<string>('all');

  const filteredWords = useMemo(() => {
    return wordList.filter(entry => {
      const matchesSearch = 
        entry.word.includes(searchTerm) || 
        entry.definition.includes(searchTerm) ||
        entry.translation.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || entry.status === statusFilter;
      const matchesAuthor = authorFilter === 'all' || entry.author === authorFilter;

      return matchesSearch && matchesStatus && matchesAuthor;
    });
  }, [searchTerm, statusFilter, authorFilter]);

  const sortedWords = useMemo(() => {
    return [...filteredWords].sort((a, b) => a.word.localeCompare(b.word));
  }, [filteredWords]);

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Controls Container */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 sticky top-0 z-10 space-y-4 md:space-y-0">
        
        {/* Search Bar */}
        <div className="relative w-full">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="חיפוש מילה, הגדרה או תרגום..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50"
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          
          {/* Author Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-sm font-bold text-secondary ml-1 shrink-0">מחדש:</span>
            <button 
              onClick={() => setAuthorFilter('all')}
              className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors border ${authorFilter === 'all' ? 'bg-gray-800 text-white border-gray-800' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'}`}
            >
              הכל
            </button>
            <button 
              onClick={() => setAuthorFilter(Author.BEN_YEHUDA)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors border ${authorFilter === Author.BEN_YEHUDA ? 'bg-accent text-white border-accent' : 'bg-white text-gray-600 border-gray-300 hover:bg-red-50'}`}
            >
              <User size={14} />
              בן-יהודה
            </button>
            <button 
              onClick={() => setAuthorFilter(Author.BIALIK)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors border ${authorFilter === Author.BIALIK ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50'}`}
            >
              <Feather size={14} />
              ביאליק
            </button>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-t md:border-t-0 md:border-r border-gray-100 pt-2 md:pt-0 pr-0 md:pr-4">
            <span className="text-sm font-bold text-secondary ml-1 shrink-0">סטטוס:</span>
            <button 
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${statusFilter === 'all' ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
            >
              הכל
            </button>
            <button 
              onClick={() => setStatusFilter(WordStatus.ACCEPTED)}
              className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${statusFilter === WordStatus.ACCEPTED ? 'bg-green-100 text-green-800 border border-green-200' : 'text-gray-500 hover:bg-green-50'}`}
            >
              נקלטו
            </button>
            <button 
              onClick={() => setStatusFilter(WordStatus.REJECTED)}
              className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${statusFilter === WordStatus.REJECTED ? 'bg-red-100 text-red-800 border border-red-200' : 'text-gray-500 hover:bg-red-50'}`}
            >
              נדחו
            </button>
          </div>
        </div>
      </div>

      <div className="text-sm text-secondary">
        נמצאו {sortedWords.length} תוצאות
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedWords.map(entry => (
          <WordCard key={entry.id} entry={entry} />
        ))}
      </div>

      {sortedWords.length === 0 && (
        <div className="text-center py-20 text-secondary">
          <p className="text-xl">לא נמצאו תוצאות התואמות את החיפוש.</p>
          <button 
            onClick={() => {setSearchTerm(''); setStatusFilter('all'); setAuthorFilter('all');}}
            className="mt-4 text-accent underline hover:text-red-700"
          >
            נקה סינון
          </button>
        </div>
      )}
    </div>
  );
};