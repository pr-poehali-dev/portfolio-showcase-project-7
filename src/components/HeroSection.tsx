import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useRef } from "react";

export default function HeroSection() {
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
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".appear");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-background to-purple-light/20"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="appear text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-purple">Привет,</span> я Антон Невежин
            </h1>
            <h2 className="appear delay-[200ms] text-2xl md:text-3xl mb-6 text-muted-foreground">
              Разработчик программного обеспечения
            </h2>
            <p className="appear delay-[300ms] text-lg mb-8 max-w-xl">
              Я специализируюсь на создании высококачественных веб-приложений и
              программных решений, которые помогают бизнесу и пользователям
              достигать своих целей.
            </p>
            <div className="appear delay-[400ms] flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full">
                Связаться со мной
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Посмотреть резюме
              </Button>
            </div>
            <div className="appear delay-[500ms] flex gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="GitHub"
              >
                <Icon name="Github" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Twitter"
              >
                <Icon name="Twitter" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Email"
              >
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>

          <div className="appear delay-[300ms] relative hidden lg:block">
            <div className="aspect-square bg-gradient-to-br from-purple to-purple-dark rounded-full p-2 mx-auto max-w-[400px]">
              <div className="h-full w-full bg-background rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"
                  alt="Портрет"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-purple-light p-4 rounded-lg shadow-lg">
              <Icon name="Code2" className="h-8 w-8 text-purple-dark" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-purple-light p-4 rounded-lg shadow-lg">
              <Icon name="Laptop" className="h-8 w-8 text-purple-dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
