"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/8 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-accent/8 via-transparent to-transparent"></div>

      <div className="container px-6 sm:px-8 mx-auto relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance mb-8 sm:mb-10 leading-[1.1] sm:leading-tight">
            <span className="block mb-2 sm:mb-4">수학의 날개를 달고</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
              꿈을 향해 날아오르세요
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground text-pretty mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            체계적인 커리큘럼과 개인별 맞춤 지도로 수학 실력을 한 단계 끌어올리는 수학날다 학원입니다.
          </p>

          <div className="mb-16 sm:mb-20 lg:mb-24">
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="text-lg sm:text-xl px-10 sm:px-16 py-6 sm:py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary font-semibold"
            >
              학원 둘러보기
              <svg className="ml-3 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          <Card className="p-8 sm:p-10 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-0 bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
              <span className="text-3xl sm:text-4xl">📚</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-5 text-balance">체계적 커리큘럼</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              단계별 맞춤 학습으로 기초부터 심화까지 완벽하게
            </p>
          </Card>

          <Card className="p-8 sm:p-10 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-0 bg-gradient-to-br from-background via-background to-accent/5 backdrop-blur-sm">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
              <span className="text-3xl sm:text-4xl">👨‍🏫</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-5 text-balance">전문 강사진</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              풍부한 경험의 수학 전문 선생님들과 함께
            </p>
          </Card>

          <Card className="p-8 sm:p-10 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-0 bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
              <span className="text-3xl sm:text-4xl">📈</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl mb-4 sm:mb-5 text-balance">성적 향상</h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              개인별 맞춤 관리로 확실한 성적 상승 보장
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
