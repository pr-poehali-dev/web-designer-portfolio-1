import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce платформа",
      description: "Редизайн интернет-магазина с увеличением конверсии на 45%",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Дизайн UI/UX", "Электронная коммерция", "Мобильная версия"],
      category: "Web Design",
    },
    {
      id: 2,
      title: "Мобильное приложение",
      description: "Дизайн фитнес-приложения с интуитивным интерфейсом",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["Мобильное приложение", "Здоровье", "iOS"],
      category: "Mobile App",
    },
    {
      id: 3,
      title: "Корпоративный сайт",
      description: "Современный сайт для IT-компании с анимациями",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Корпоративный", "Анимация", "Адаптивный"],
      category: "Web Design",
    },
    {
      id: 4,
      title: "Дашборд аналитики",
      description: "Интерфейс для сложных данных с удобной навигацией",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Панель управления", "Визуализация данных", "SaaS"],
      category: "UI Design",
    },
    {
      id: 5,
      title: "Лендинг стартапа",
      description: "Продающая страница с высокой конверсией",
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop",
      tags: ["Лендинг", "Стартап", "Конверсия"],
      category: "Web Design",
    },
    {
      id: 6,
      title: "Дизайн-система",
      description: "Комплексная система компонентов для продуктовой команды",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
      tags: ["Дизайн-система", "Компоненты", "Figma"],
      category: "System Design",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">
            Портфолио
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Open_Sans']">
            Избранные проекты, которые демонстрируют мой подход к решению
            дизайн-задач
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-gray-100"
                  >
                    <Icon name="ExternalLink" size={16} />
                    Посмотреть проект
                  </Button>
                </div>
                <Badge className="absolute top-4 left-4 bg-purple-600 text-white">
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            <Icon name="Plus" size={20} />
            Посмотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
