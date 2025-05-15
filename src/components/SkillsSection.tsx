
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react";

interface SkillCategoryProps {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
  delay?: string;
}

function SkillCategory({ title, icon, skills, delay = "0ms" }: SkillCategoryProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setVisible(true), 300);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Card className={`appear delay-[${delay}]`} ref={ref}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-md bg-purple/10 flex items-center justify-center text-purple">
            <Icon name={icon} size={20} />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress 
                value={visible ? skill.level : 0} 
                className="h-2 transition-all duration-1000 ease-out"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function SkillsSection() {
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
    <section id="skills" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title appear">Мои навыки</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Фронтенд"
            icon="Layout"
            skills={[
              { name: "HTML/CSS", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "React", level: 85 },
              { name: "TypeScript", level: 80 }
            ]}
            delay="100ms"
          />
          
          <SkillCategory 
            title="Бэкенд"
            icon="Server"
            skills={[
              { name: "Node.js", level: 80 },
              { name: "Python", level: 75 },
              { name: "SQL", level: 70 },
              { name: "MongoDB", level: 65 }
            ]}
            delay="200ms"
          />
          
          <SkillCategory 
            title="Инструменты"
            icon="Wrench"
            skills={[
              { name: "Git", level: 90 },
              { name: "Docker", level: 70 },
              { name: "CI/CD", level: 75 },
              { name: "Тестирование", level: 80 }
            ]}
            delay="300ms"
          />
        </div>
        
        <div className="appear delay-[400ms] mt-16 bg-muted/50 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">Достижения</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-purple text-3xl font-bold mb-2">5+</div>
              <div className="text-muted-foreground">Лет опыта</div>
            </div>
            <div className="p-4">
              <div className="text-purple text-3xl font-bold mb-2">20+</div>
              <div className="text-muted-foreground">Завершенных проектов</div>
            </div>
            <div className="p-4">
              <div className="text-purple text-3xl font-bold mb-2">15+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="p-4">
              <div className="text-purple text-3xl font-bold mb-2">5+</div>
              <div className="text-muted-foreground">Наград</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
