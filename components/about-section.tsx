import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-balance">
            수학날다를 선택하는 이유
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            체계적인 교육 시스템으로 학생들의 수학 실력 향상을 책임집니다.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <Card className="p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-background to-primary/5 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary text-2xl sm:text-3xl">👤</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">개인별 맞춤 교육</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                학생 개개인의 수준과 특성을 파악하여 최적화된 학습 계획을 제공합니다.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-background to-accent/5 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-accent text-2xl sm:text-3xl">👥</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">소수정예 수업</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                소규모 반 구성으로 모든 학생에게 세심한 관리와 지도를 제공합니다.
              </p>
            </Card>

            <Card className="p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-gradient-to-br from-background to-primary/5 group sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary text-2xl sm:text-3xl">📊</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">체계적인 관리 시스템</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                정기적인 학습 진도 점검과 학부모 상담을 통해 지속적인 성장을 도모합니다.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
