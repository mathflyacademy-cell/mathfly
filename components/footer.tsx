"use client"

export function Footer() {
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
    <footer className="bg-gradient-to-br from-muted/30 via-muted/50 to-muted/70 py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-primary border-b-2 border-primary/20 pb-2 inline-block">
              수학날다 학원
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed font-medium">
                수학의 날개를 달고 꿈을 향해 날아오르세요
              </p>
              <div className="bg-card/50 rounded-lg p-3 sm:p-4 border border-border/50">
                <div className="text-sm sm:text-base font-semibold text-foreground mb-2">원장: 조윤제</div>
                <div className="space-y-1">
                  <div className="font-semibold text-sm sm:text-base text-primary">운영시간</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">월~금 14:30 ~ 22:00</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">주말 휴무</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-primary border-b-2 border-primary/20 pb-2 inline-block">
              바로가기
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left p-3 sm:p-4 text-sm sm:text-base text-muted-foreground hover:text-primary hover:bg-card/50 rounded-lg transition-all duration-300 hover:translate-x-2 hover:shadow-md border border-transparent hover:border-border/50"
              >
                학원소개
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-left p-3 sm:p-4 text-sm sm:text-base text-muted-foreground hover:text-primary hover:bg-card/50 rounded-lg transition-all duration-300 hover:translate-x-2 hover:shadow-md border border-transparent hover:border-border/50"
              >
                수업과정
              </button>
              <button
                onClick={() => scrollToSection("teachers")}
                className="text-left p-3 sm:p-4 text-sm sm:text-base text-muted-foreground hover:text-primary hover:bg-card/50 rounded-lg transition-all duration-300 hover:translate-x-2 hover:shadow-md border border-transparent hover:border-border/50"
              >
                강사진
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left p-3 sm:p-4 text-sm sm:text-base text-muted-foreground hover:text-primary hover:bg-card/50 rounded-lg transition-all duration-300 hover:translate-x-2 hover:shadow-md border border-transparent hover:border-border/50"
              >
                오시는길
              </button>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6 sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-primary border-b-2 border-primary/20 pb-2 inline-block">
              연락처
            </h4>
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card/50 rounded-lg border border-border/50 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-lg sm:text-xl">📞</span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground">전화번호</div>
                  <span className="text-base sm:text-lg lg:text-xl font-bold text-foreground">02-374-0599</span>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card/50 rounded-lg border border-border/50 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-primary text-lg sm:text-xl">📍</span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">주소</div>
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-foreground leading-relaxed">
                    서울 마포구 월드컵북로 207 (성산동)
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">근영빌딩 4층</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 sm:pt-8 text-center">
          <div className="bg-card/30 rounded-lg p-4 sm:p-6 border border-border/30">
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              &copy; 2025 수학날다 학원. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
