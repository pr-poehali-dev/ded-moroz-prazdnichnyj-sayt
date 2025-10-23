import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    phone: '',
    email: '',
    wishes: ''
  });

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = '❄';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
      snowflake.style.fontSize = Math.random() * 1 + 0.5 + 'em';
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 8000);
    };

    const interval = setInterval(createSnowflake, 300);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎅",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения деталей.",
    });
    setFormData({
      childName: '',
      childAge: '',
      parentName: '',
      phone: '',
      email: '',
      wishes: ''
    });
  };

  const videoExamples = [
    {
      title: "Стандартное поздравление",
      price: "1 990 ₽",
      duration: "2-3 минуты",
      features: ["Имя ребёнка", "Возраст", "Добрые пожелания", "Новогодняя песенка"]
    },
    {
      title: "Премиум поздравление",
      price: "3 990 ₽",
      duration: "5-7 минут",
      features: ["Всё из стандарта", "Упоминание достижений", "Особые пожелания", "Видео с домашними питомцами"]
    },
    {
      title: "VIP поздравление",
      price: "5 990 ₽",
      duration: "10-15 минут",
      features: ["Всё из премиума", "Видеозвонок в реальном времени", "Интерактивное общение", "Памятный подарок"]
    }
  ];

  const features = [
    {
      icon: "Video",
      title: "HD качество",
      description: "Профессиональная съёмка в высоком разрешении"
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description: "Каждое видео создаётся персонально для вашего ребёнка"
    },
    {
      icon: "Clock",
      title: "Быстрая доставка",
      description: "Готовое видео за 24-48 часов"
    },
    {
      icon: "Gift",
      title: "Волшебная атмосфера",
      description: "Настоящий Дед Мороз с красивой резиденцией"
    }
  ];

  const faqs = [
    {
      question: "Как быстро будет готово видео?",
      answer: "Обычно видеопоздравление готовится в течение 24-48 часов после получения всех данных. В предновогодние дни срок может увеличиться до 3-4 дней."
    },
    {
      question: "Можно ли добавить особые пожелания?",
      answer: "Конечно! Вы можете указать любые пожелания, достижения ребёнка, его увлечения, и Дед Мороз обязательно упомянет это в видео."
    },
    {
      question: "В каком формате я получу видео?",
      answer: "Видео отправляется на вашу электронную почту в формате MP4, который можно смотреть на любых устройствах."
    },
    {
      question: "Можно ли заказать видео для нескольких детей?",
      answer: "Да! При заказе укажите имена всех детей, и Дед Мороз поздравит каждого ребёнка персонально."
    },
    {
      question: "Есть ли возрастные ограничения?",
      answer: "Видеопоздравления подходят для детей от 1 года до 12 лет. Мы адаптируем содержание под возраст ребёнка."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold sparkle">
                  <Icon name="Sparkles" size={16} />
                  Новогоднее чудо для вашего ребёнка
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Видеопоздравление от настоящего Деда Мороза
              </h1>
              
              <p className="text-xl text-white/90">
                Персональное видеопоздравление с упоминанием имени, возраста и достижений вашего ребёнка. Создайте незабываемое новогоднее волшебство!
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Gift" className="mr-2" size={20} />
                  Заказать поздравление
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30 font-semibold text-lg px-8 py-6"
                  onClick={() => document.getElementById('video-examples')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Посмотреть примеры
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-white/20 backdrop-blur-sm rounded-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/b1e37abc-f374-4fcc-b112-59cee7b1c48c/files/6eac0d1b-e0b3-459d-b4ee-c01d498c624a.jpg"
                alt="Дед Мороз с ребёнком"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl font-bold text-2xl sparkle">
                от 1 990 ₽
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создаём настоящее новогоднее волшебство для вашего ребёнка
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="video-examples" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Выберите своё поздравление
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Три варианта на любой вкус и бюджет
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoExamples.map((example, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${index === 1 ? 'border-4 border-accent scale-105' : 'border-2'}`}>
                {index === 1 && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold sparkle">
                    Популярный
                  </div>
                )}
                <CardHeader className="space-y-4">
                  <CardTitle className="text-2xl">{example.title}</CardTitle>
                  <div>
                    <div className="text-4xl font-bold text-primary">{example.price}</div>
                    <CardDescription className="text-lg mt-2">
                      <Icon name="Clock" size={16} className="inline mr-1" />
                      {example.duration}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {example.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={index === 1 ? "default" : "outline"}
                    size="lg"
                    onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Закажите видеопоздравление
              </h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму, и мы свяжемся с вами для уточнения деталей
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="childName">Имя ребёнка *</Label>
                      <Input 
                        id="childName"
                        required
                        placeholder="Например: Маша"
                        value={formData.childName}
                        onChange={(e) => setFormData({...formData, childName: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="childAge">Возраст ребёнка *</Label>
                      <Input 
                        id="childAge"
                        type="number"
                        required
                        placeholder="Например: 5"
                        min="1"
                        max="12"
                        value={formData.childAge}
                        onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentName">Ваше имя *</Label>
                    <Input 
                      id="parentName"
                      required
                      placeholder="Как к вам обращаться?"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        required
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wishes">Особые пожелания</Label>
                    <Textarea 
                      id="wishes"
                      placeholder="Расскажите о достижениях, увлечениях ребёнка или особых пожеланиях для видео..."
                      rows={5}
                      value={formData.wishes}
                      onChange={(e) => setFormData({...formData, wishes: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Частые вопросы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о наших видеопоздравлениях
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Дед Мороз Видео</h3>
              <p className="text-white/80">
                Создаём новогоднее волшебство для детей с 2020 года
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  santa@video.ru
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="bg-white/20 border-white/50 hover:bg-white/30 text-white">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/20 border-white/50 hover:bg-white/30 text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/20 border-white/50 hover:bg-white/30 text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>© 2024 Дед Мороз Видео. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;