
import Icon from "@/components/ui/icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="font-montserrat font-bold text-xl text-purple mb-2">
              Портфолио
            </div>
            <p className="text-muted-foreground">
              &copy; {currentYear} Все права защищены
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors" aria-label="GitHub">
              <Icon name="Github" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors" aria-label="LinkedIn">
              <Icon name="Linkedin" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors" aria-label="Twitter">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-purple transition-colors" aria-label="Email">
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            Разработано с <span className="text-purple">❤</span> в 2025 году
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-purple transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
