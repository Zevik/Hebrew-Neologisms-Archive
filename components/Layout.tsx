import React, { ReactNode, useState } from 'react';
import { Menu, X, BookOpen, BarChart2, Info, Search } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'סקירה כללית', icon: BookOpen },
    { id: 'dictionary', label: 'מילון החידושים', icon: Search },
    { id: 'analysis', label: 'ניתוח ומחקר', icon: BarChart2 },
    { id: 'methodology', label: 'על המחקר', icon: Info },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-paper-dark border-b border-gray-200">
        <h1 className="text-xl font-serif font-bold text-accent">חידושי אב"י</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 right-0 z-50 w-64 bg-paper-dark border-l border-gray-200 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6 border-b border-gray-200/50">
          <h1 className="text-2xl font-serif font-bold text-accent mb-2">חידושי אב"י</h1>
          <p className="text-sm text-secondary">דוח מחקר פילולוגי מאת ראובן סיוון</p>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activePage === item.id 
                  ? 'bg-accent text-white shadow-md' 
                  : 'hover:bg-gray-200 text-ink'
              }`}
            >
              <item.icon size={20} className="ml-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-6 text-xs text-secondary border-t border-gray-200">
          <p>מבוסס על "לשוננו לעם", תשכ"א.</p>
          <p className="mt-1">האקדמיה ללשון העברית.</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen relative">
         <div className="max-w-6xl mx-auto p-4 md:p-8">
            {children}
         </div>
      </main>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};