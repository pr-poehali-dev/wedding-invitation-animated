import { Clock, Calendar, Users } from "lucide-react";

const DayProgram = () => {
  const programItems = [
    {
      time: "14:00",
      title: "Сбор гостей",
      description:
        "Мы подготовили для вас много сюрпризов и гарантируем веселое времяпровождение",
      icon: <Users className="w-6 h-6 text-olive-600" />,
    },
    {
      time: "14:30",
      title: "Церемония",
      description:
        "Будем рады разделить этот трогательный момент вместе с Вами",
      icon: <Calendar className="w-6 h-6 text-olive-600" />,
    },
    {
      time: "15:00",
      title: "Банкет",
      description: "Поздравления, вкусные блюда и развлечения",
      icon: <Clock className="w-6 h-6 text-olive-600" />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-olive-800 mb-4">
          Программа дня
        </h2>
        <div className="w-24 h-0.5 bg-olive-400 mx-auto"></div>
      </div>

      <div className="space-y-8">
        {programItems.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-sm border border-olive-100 p-8 hover:shadow-lg transition-all duration-500 animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-olive-50 rounded-full flex items-center justify-center border-2 border-olive-200 group-hover:border-olive-400 transition-colors duration-300">
                  {item.icon}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-2xl font-bold text-olive-700 bg-olive-50 px-4 py-2 rounded-full">
                    {item.time}
                  </span>
                  <h3 className="text-2xl font-serif text-olive-800">
                    {item.title}
                  </h3>
                </div>

                <p className="text-olive-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-olive-200 to-olive-400 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-olive-50 rounded-2xl p-8 border border-olive-100">
          <p className="text-olive-700 text-lg italic">
            Мы с нетерпением ждем этого особенного дня вместе с вами! 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayProgram;
