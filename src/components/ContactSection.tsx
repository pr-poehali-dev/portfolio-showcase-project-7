
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useRef, useEffect } from "react";

interface ContactItemProps {
  icon: string;
  title: string;
  content: string;
  delay?: string;
}

function ContactItem({ icon, title, content, delay = "0ms" }: ContactItemProps) {
  return (
    <div className={`appear delay-[${delay}] flex items-start gap-4`}>
      <div className="h-12 w-12 rounded-full bg-purple/10 flex items-center justify-center text-purple shrink-0">
        <Icon name={icon} size={24} />
      </div>
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll(".appear");
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы код отправки формы
    alert("В реальном приложении сообщение было бы отправлено!");
  };

  return (
    <section id="contact" ref={sectionRef} className="bg-muted/30">
      <div className="section-container">
        <h2 className="section-title appear">Связаться со мной</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="appear text-lg">
              Хотите обсудить проект или просто поздороваться? Заполните форму или используйте контактную информацию ниже.
            </p>
            
            <div className="space-y-6">
              <ContactItem 
                icon="Mail" 
                title="Email" 
                content="example@email.com"
                delay="100ms"
              />
              <ContactItem 
                icon="Phone" 
                title="Телефон" 
                content="+7 (123) 456-78-90"
                delay="200ms"
              />
              <ContactItem 
                icon="MapPin" 
                title="Адрес" 
                content="г. Москва, Россия"
                delay="300ms"
              />
            </div>
            
            <div className="appear delay-[400ms]">
              <h3 className="font-medium text-lg mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full" aria-label="GitHub">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="LinkedIn">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Twitter">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" aria-label="Instagram">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <Card className="appear delay-[200ms]">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Ваше имя
                  </label>
                  <Input id="name" placeholder="Имя Фамилия" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="example@email.com" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    Сообщение
                  </label>
                  <Textarea id="message" placeholder="Ваше сообщение..." rows={5} required />
                </div>
                
                <Button type="submit" className="w-full">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
