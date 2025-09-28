import { Card } from "@/components/ui/card"
import Image from "next/image"

export function TeachersSection() {
  const teachers = [
    {
      name: "조윤제 원장",
      role: "원장",
      image: "/images/director-jo.png",
      description: "수학 교육 전문가",
      expertise: "교육과정 설계 및 학습 전략 개발",
    },
    {
      name: "차제우 강사",
      role: "수학 강사",
      image: "/images/teacher-cha.png",
      description: "중고등 수학 전문",
      expertise: "개념 이해 중심의 맞춤형 수업",
    },
  ]

  return (
    <section id="teachers" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">전문 강사진</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            풍부한 경험과 전문성을 갖춘 수학 교육 전문가들이 함께합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-4 sm:p-6 text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-background shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={teacher.image || "/placeholder.svg"}
                        alt={teacher.name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {teacher.name}
                    </h3>
                    <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      <p className="text-xs sm:text-sm font-semibold text-primary">{teacher.role}</p>
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2 pt-1">
                    <p className="text-sm sm:text-base font-medium text-foreground/90">{teacher.description}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-2">{teacher.expertise}</p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
