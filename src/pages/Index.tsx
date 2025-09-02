import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const portfolioItems = [
    {
      id: 1,
      image: '/img/c42b604a-cad9-4adc-8029-43d9d594b44c.jpg',
      title: 'Романтичный букет невесты',
      description: 'Нежная композиция из пионовидных роз и эвкалипта'
    },
    {
      id: 2,
      image: '/img/b5f3ff4b-3e23-4a4f-bde7-fb8797ab40cc.jpg',
      title: 'Золотая сервировка стола',
      description: 'Элегантное оформление с золотыми акцентами и живыми цветами'
    },
    {
      id: 3,
      image: '/img/0ba55fe7-d223-41f4-88e6-c6954eacc237.jpg',
      title: 'Свадебная арка мечты',
      description: 'Воздушная арка с драпировкой и цветочными композициями'
    }
  ]

  const services = [
    { icon: 'Heart', title: 'Букеты и бутоньерки', description: 'Создаем уникальные букеты из свежих цветов по вашим пожеланиям' },
    { icon: 'Sparkles', title: 'Оформление зала', description: 'Полное декорирование банкетного зала в выбранном стиле' },
    { icon: 'Camera', title: 'Фотозона', description: 'Стильные фотозоны для незабываемых снимков' },
    { icon: 'Gift', title: 'Президиум молодоженов', description: 'Особенное оформление стола новобрачных' }
  ]

  const testimonials = [
    { name: 'Анна и Дмитрий', text: 'Потрясающий декор! Все гости были в восторге от оформления нашей свадьбы.' },
    { name: 'Екатерина', text: 'Профессиональный подход и внимание к деталям. Рекомендую всем!' },
    { name: 'Мария и Сергей', text: 'Спасибо за воплощение нашей мечты! Свадьба прошла идеально.' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-wedding-white to-soft-gray">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-wedding-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-cormorant text-2xl font-bold text-primary">
              Wedding Dreams
            </div>
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Портфолио', 'Услуги', 'Отзывы', 'Контакты'].map((item, index) => {
                const id = ['home', 'portfolio', 'services', 'testimonials', 'contacts'][index]
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(id)}
                    className={`font-open transition-colors hover:text-primary ${
                      activeSection === id ? 'text-primary font-medium' : 'text-gray-600'
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Создаем сказку
              <br />
              <span className="text-primary">вашей мечты</span>
            </h1>
            <p className="font-open text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессиональное оформление свадеб с особым вниманием к деталям. 
              Воплощаем ваши мечты в жизнь с любовью и творческим подходом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-open px-8 py-3 bg-primary hover:bg-primary/90"
                onClick={() => scrollToSection('portfolio')}
              >
                <Icon name="Heart" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="font-open px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-wedding-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Наше портфолио
            </h2>
            <p className="font-open text-gray-600 max-w-2xl mx-auto">
              Каждая свадьба уникальна. Посмотрите на некоторые из наших работ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-cormorant text-xl font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="font-open text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Наши услуги
            </h2>
            <p className="font-open text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для создания идеальной свадьбы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-cormorant text-lg font-semibold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="font-open text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-wedding-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Пакеты услуг
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Базовый', price: '25 000', features: ['Букет невесты', 'Бутоньерка', 'Оформление стола молодых'] },
              { name: 'Стандарт', price: '45 000', features: ['Все из базового', 'Фотозона', 'Центральные композиции', 'Арка для церемонии'] },
              { name: 'Премиум', price: '75 000', features: ['Все из стандарта', 'Полное оформление зала', 'Выездная регистрация', 'Консультации'] }
            ].map((pack, index) => (
              <Card key={pack.name} className={`p-6 ${index === 1 ? 'border-primary border-2 scale-105' : ''} hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-0 text-center">
                  {index === 1 && (
                    <Badge className="mb-4 bg-primary text-white">Популярный</Badge>
                  )}
                  <h3 className="font-cormorant text-2xl font-bold mb-2">{pack.name}</h3>
                  <div className="mb-6">
                    <span className="font-cormorant text-3xl font-bold text-primary">{pack.price}</span>
                    <span className="font-open text-gray-600"> ₽</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="font-open text-sm text-gray-600 flex items-center justify-center">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="font-open text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас молодожены
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-open text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-cormorant font-semibold text-gray-800">
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 bg-wedding-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Блог и советы
            </h2>
            <p className="font-open text-gray-600 max-w-2xl mx-auto">
              Полезные статьи о свадебной флористике и декоре
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Как выбрать цветовую гамму свадьбы', date: '15 августа 2024', excerpt: 'Советы по подбору идеальной палитры для вашего торжества' },
              { title: 'Тренды свадебной флористики 2024', date: '10 августа 2024', excerpt: 'Самые актуальные направления в оформлении свадеб' },
              { title: 'Сезонность в выборе цветов', date: '5 августа 2024', excerpt: 'Какие цветы лучше выбрать в зависимости от времени года' }
            ].map((post, index) => (
              <Card key={post.title} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-48 bg-gradient-to-r from-soft-pink to-secondary/50"></div>
                <CardContent className="p-6">
                  <p className="font-open text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="font-cormorant text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-open text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-open text-sm group-hover:underline">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            О нас
          </h2>
          <div className="prose max-w-none">
            <p className="font-open text-lg text-gray-600 mb-6">
              Мы — команда профессиональных флористов и декораторов с более чем 5-летним опытом создания 
              незабываемых свадеб. Каждое торжество для нас — это возможность воплотить мечты влюбленных в жизнь.
            </p>
            <p className="font-open text-lg text-gray-600 mb-8">
              Наша философия основана на внимании к деталям, использовании только свежих цветов высочайшего 
              качества и индивидуальном подходе к каждой паре.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '200+', label: 'Счастливых пар' },
                { number: '5', label: 'Лет опыта' },
                { number: '100%', label: 'Довольных клиентов' },
                { number: '24/7', label: 'Поддержка' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="font-cormorant text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-open text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-wedding-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="font-open text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить вашу свадьбу мечты? Мы всегда рады помочь!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-cormorant font-semibold text-gray-800">Телефон</p>
                  <p className="font-open text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-cormorant font-semibold text-gray-800">Email</p>
                  <p className="font-open text-gray-600">info@weddingdreams.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-cormorant font-semibold text-gray-800">Адрес</p>
                  <p className="font-open text-gray-600">г. Москва, ул. Цветочная, д. 15</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-cormorant font-semibold text-gray-800">Режим работы</p>
                  <p className="font-open text-gray-600">Пн-Вс: 9:00 - 20:00</p>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-cormorant text-2xl font-semibold mb-6 text-gray-800">
                  Оставьте заявку
                </h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 border border-gray-200 rounded-lg font-open focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="w-full p-3 border border-gray-200 rounded-lg font-open focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <input 
                      type="date" 
                      placeholder="Дата свадьбы" 
                      className="w-full p-3 border border-gray-200 rounded-lg font-open focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Расскажите о вашей свадьбе..." 
                      rows={4}
                      className="w-full p-3 border border-gray-200 rounded-lg font-open focus:border-primary focus:outline-none resize-none"
                    />
                  </div>
                  <Button className="w-full font-open py-3">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-cormorant text-2xl font-bold mb-4 md:mb-0">
              Wedding Dreams
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="font-open text-gray-400">
              © 2024 Wedding Dreams. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}