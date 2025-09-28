import { Card } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">오시는 길 & 문의</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty px-4 sm:px-0">
            수학날다 학원으로 언제든지 문의해 주세요. 성심껏 상담해 드리겠습니다.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 sm:p-8 mx-4 sm:mx-0">
            <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-center sm:text-left">학원 정보</h3>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 text-primary mt-0.5 flex-shrink-0 text-lg sm:text-xl">📍</div>
                <div className="flex-1">
                  <div className="font-medium text-base sm:text-lg mb-1 sm:mb-2">주소</div>
                  <div className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    서울 마포구 월드컵북로 207 (성산동)
                    <br />
                    근영빌딩 4층
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 text-primary mt-0.5 flex-shrink-0 text-lg sm:text-xl">📞</div>
                <div className="flex-1">
                  <div className="font-medium text-base sm:text-lg mb-1 sm:mb-2">전화번호</div>
                  <div className="text-muted-foreground text-sm sm:text-base">02-374-0599</div>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-6 h-6 sm:w-7 sm:h-7 text-primary mt-0.5 flex-shrink-0 text-lg sm:text-xl">🕒</div>
                <div className="flex-1">
                  <div className="font-medium text-base sm:text-lg mb-1 sm:mb-2">운영시간</div>
                  <div className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    월~금: 14:30 - 22:00
                    <br />
                    주말: 휴무
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
