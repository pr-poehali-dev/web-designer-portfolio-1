import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "Mail",
      title: "Почта",
      value: "anna.designer@example.com",
      link: "mailto:anna.designer@example.com",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      title: "Местоположение",
      value: "Москва, Россия",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: "Github", name: "GitHub", url: "#" },
    { icon: "Linkedin", name: "LinkedIn", url: "#" },
    { icon: "Instagram", name: "Instagram", url: "#" },
    { icon: "Twitter", name: "Twitter", url: "#" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-['Open_Sans']">
            Готова обсудить ваш проект и найти лучшие дизайн-решения
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-black/20 backdrop-blur-sm border-gray-300/30 text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Icon
                        name={item.icon as any}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-purple-300 hover:text-purple-200 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-black/20 backdrop-blur-sm border-gray-300/30">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="border-gray-400/50 text-gray-900 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                      asChild
                    >
                      <a href={social.url}>
                        <Icon name={social.icon as any} size={20} />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-black/20 backdrop-blur-sm border-gray-300/30">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Написать сообщение
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тема
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-purple-400 focus:outline-none"
                    placeholder="Тема сообщения"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-purple-400 focus:outline-none resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                  <Icon name="Send" size={20} className="text-white" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
