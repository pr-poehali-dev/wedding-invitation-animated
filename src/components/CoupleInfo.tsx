import React from "react";

const CoupleInfo: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Couple Names */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-serif text-olive-800 mb-4 tracking-wide">
            Сергей
            <span className="text-olive-600 mx-6">&</span>
            Екатерина
          </h1>
          <div className="w-32 h-px bg-olive-400 mx-auto"></div>
        </div>

        {/* Wedding Date */}
        <div className="mb-16 animate-scale-in">
          <div className="inline-block border-2 border-olive-300 rounded-lg px-8 py-6 bg-white/70 backdrop-blur-sm shadow-lg">
            <p className="text-olive-600 text-lg font-medium mb-2">
              Дата свадьбы
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-olive-800 font-bold">
              16.05.2026
            </h2>
          </div>
        </div>

        {/* Invitation Text */}
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-olive-200">
            <div className="text-olive-700 text-lg leading-relaxed space-y-4">
              <p className="font-medium">Дорогие друзья и родные!</p>
              <p>
                Мы с радостью приглашаем вас разделить с нами один из самых
                важных дней в нашей жизни. Ваше присутствие сделает этот день
                ещё более особенным и незабываемым.
              </p>
              <p className="font-medium text-olive-800">
                Не пропустите событие года — нашу свадьбу!
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <div className="w-12 h-px bg-olive-300"></div>
              <span className="text-2xl text-olive-400">💐</span>
              <div className="w-12 h-px bg-olive-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleInfo;
