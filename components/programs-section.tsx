import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProgramsSection() {
  const programs = [
    {
      title: "초등 수학",
      grade: "초 3~6학년",
      description: "수학의 기초를 탄탄히 다지는 단계별 학습",
      features: ["기초 연산 완성", "문제 해결력 향상", "수학적 사고력 개발"],
      gradient: "from-blue-500/10 to-blue-600/5",
      iconBg: "from-blue-500/20 to-blue-600/10",
      icon: "🧮",
    },
    {
      title: "중등 수학",
      grade: "중 1~3학년",
      description: "체계적인 개념 학습과 문제 해결 능력 배양",
      features: ["개념 완전 정복", "내신 대비 완벽", "고등 수학 연계"],
      gradient: "from-purple-500/10 to-purple-600/5",
      iconBg: "from-purple-500/20 to-purple-600/10",
      icon: "📐",
    },
    {
      title: "고등 수학",
      grade: "고 1~3학년",
      description: "수능과 내신을 동시에 대비하는 심화 학습",
      features: ["수능 완벽 대비", "내신 1등급 목표", "대학 입시 전략"],
      gradient: "from-green-500/10 to-green-600/5",
      iconBg: "from-green-500/20 to-green-600/10",
      icon: "🎯",
    },
  ]

  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-balance">수업 과정</h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            학년별 맞춤 커리큘럼으로 체계적이고 효과적인 수학 학습을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br ${program.gradient} group w-full`}
            >
              <div className="text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${program.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl">{program.icon}</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">{program.title}</h3>
                <div className="text-xs sm:text-sm md:text-base font-medium text-primary mb-2 sm:mb-3 lg:mb-4 px-2 sm:px-3 py-1 bg-primary/10 rounded-full inline-block">
                  {program.grade}
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm md:text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full bg-background/50 hover:bg-background transition-all duration-300 text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-2.5"
              >
                자세히 보기
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
