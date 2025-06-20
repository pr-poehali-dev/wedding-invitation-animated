import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CoupleInfo from "@/components/CoupleInfo";
import DayProgram from "@/components/DayProgram";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-olive-100">
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="couple" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/80 backdrop-blur-sm border border-olive-200 rounded-2xl p-2">
            <TabsTrigger
              value="couple"
              className="data-[state=active]:bg-olive-100 data-[state=active]:text-olive-800 rounded-xl transition-all duration-300 font-medium"
            >
              Пара
            </TabsTrigger>
            <TabsTrigger
              value="program"
              className="data-[state=active]:bg-olive-100 data-[state=active]:text-olive-800 rounded-xl transition-all duration-300 font-medium"
            >
              Программа
            </TabsTrigger>
            <TabsTrigger
              value="venue"
              className="data-[state=active]:bg-olive-100 data-[state=active]:text-olive-800 rounded-xl transition-all duration-300 font-medium"
            >
              Место
            </TabsTrigger>
            <TabsTrigger
              value="dresscode"
              className="data-[state=active]:bg-olive-100 data-[state=active]:text-olive-800 rounded-xl transition-all duration-300 font-medium"
            >
              Дресс-код
            </TabsTrigger>
            <TabsTrigger
              value="registration"
              className="data-[state=active]:bg-olive-100 data-[state=active]:text-olive-800 rounded-xl transition-all duration-300 font-medium"
            >
              Регистрация
            </TabsTrigger>
          </TabsList>

          <TabsContent value="couple" className="mt-0">
            <CoupleInfo />
          </TabsContent>

          <TabsContent value="program" className="mt-0">
            <DayProgram />
          </TabsContent>

          <TabsContent value="venue" className="mt-0">
            <div className="text-center py-20">
              <h2 className="text-3xl font-serif text-olive-800">
                Место проведения
              </h2>
              <p className="text-olive-600 mt-4">
                Скоро здесь будет информация о месте проведения
              </p>
            </div>
          </TabsContent>

          <TabsContent value="dresscode" className="mt-0">
            <div className="text-center py-20">
              <h2 className="text-3xl font-serif text-olive-800">Дресс-код</h2>
              <p className="text-olive-600 mt-4">
                Скоро здесь будет информация о дресс-коде
              </p>
            </div>
          </TabsContent>

          <TabsContent value="registration" className="mt-0">
            <div className="text-center py-20">
              <h2 className="text-3xl font-serif text-olive-800">
                Регистрация гостей
              </h2>
              <p className="text-olive-600 mt-4">
                Скоро здесь будет форма регистрации
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
