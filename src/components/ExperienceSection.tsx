
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useRef } from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  description: string;
  technologies: string[];
  icon: string;
  delay?: string;
}

function ExperienceItem({ 
  title, 
  company, 
  date, 
  description, 
  technologies, 
  icon,
  delay = "0ms"
}: ExperienceItemProps) {
  return (
    <Card className={`appear delay-[${delay}] shadow-md hover:shadow-lg transition-shadow`}>
      <CardHeader className="flex flex-row items-start space-x-4 pb-2">
        <div className="h-12 w-12 rounded-md bg-purple/10 flex items-center justify-center text-purple">
          <Icon name={icon} size={24} />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-muted-foreground">
            <span className="font-medium">{company}</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-sm">{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ExperienceSection() {
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

  return (
    <section id="experience" ref={sectionRef} className="bg-muted/30">
      <div className="section-container">
        <h2 className="section-title appear">Опыт работы</h2>
        
        <div className="space-y-8 relative">
          {/* Вертикальная линия для временной шкалы */}
          <div className="absolute left-[17px] top-2 h-[calc(100%-80px)] w-0.5 bg-border hidden sm:block"></div>
          
          <ExperienceItem 
            title="Ведущий разработчик"
            company="Компания А"
            date="2020 - Настоящее время"
            description="Руководил командой разработчиков и участвовал в разработке крупномасштабного приложения. Внедрил новые технологии и методы разработки, что позволило повысить производительность команды на 30%."
            technologies={["React", "TypeScript", "Node.js", "Docker"]}
            icon="BriefcaseBusiness"
            delay="100ms"
          />
          
          <ExperienceItem 
            title="Разработчик ПО"
            company="Компания Б"
            date="2018 - 2020"
            description="Работал над разработкой и поддержкой веб-приложений. Создал и внедрил систему автоматизации, которая значительно сократила время выполнения рутинных задач."
            technologies={["JavaScript", "Vue.js", "Python", "PostgreSQL"]}
            icon="Code"
            delay="200ms"
          />
          
          <ExperienceItem 
            title="Младший разработчик"
            company="Компания В"
            date="2016 - 2018"
            description="Участвовал в разработке внутренних инструментов компании. Помогал с улучшением пользовательского интерфейса и исправлением ошибок в существующих проектах."
            technologies={["HTML", "CSS", "JavaScript", "jQuery"]}
            icon="Code2"
            delay="300ms"
          />
        </div>
      </div>
    </section>
  );
}
