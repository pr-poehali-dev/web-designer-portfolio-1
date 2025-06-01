import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const skills = [
    "UI/UX Дизайн",
    "Figma",
    "Adobe XD",
    "Sketch",
    "Photoshop",
    "Illustrator",
    "Прототипирование",
    "Wireframing",
    "Исследования пользователей",
    "Дизайн-системы",
    "HTML/CSS",
    "JavaScript",
  ];

  const achievements = [
    { number: "50+", label: "Проектов" },
    { number: "5", label: "Лет опыта" },
    { number: "30+", label: "Клиентов" },
    { number: "98%", label: "Довольных клиентов" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">
            Обо мне
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Open_Sans']">
            Веб-дизайнер с 5-летним опытом создания современных интерфейсов для
            стартапов и крупных компаний
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon name="User" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Анна Петрова
                    </h3>
                    <p className="text-purple-600">Senior UI/UX Designer</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Специализируюсь на создании интуитивных и красивых
                  интерфейсов. Помогаю брендам выделиться через продуманный
                  дизайн и отличный пользовательский опыт.
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    Москва, Россия
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={16} />
                    anna@example.com
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {item.number}
                  </div>
                  <div className="text-gray-600">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Icon name="Zap" size={24} className="text-purple-600" />
              Навыки и технологии
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
