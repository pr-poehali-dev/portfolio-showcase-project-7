
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Проверяем предпочтения пользователя по системным настройкам
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-montserrat font-bold text-xl text-purple">
            Портфолио
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="font-medium hover:text-purple transition-colors">
              Главная
            </a>
            <a href="#experience" className="font-medium hover:text-purple transition-colors">
              Опыт
            </a>
            <a href="#skills" className="font-medium hover:text-purple transition-colors">
              Навыки
            </a>
            <a href="#contact" className="font-medium hover:text-purple transition-colors">
              Контакты
            </a>
          </nav>
          
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Переключить темную тему"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
