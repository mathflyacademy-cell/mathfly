"use client"

import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-lg">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex h-16 sm:h-18 md:h-20 items-center justify-between">
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 hover:scale-105"
        >
          <Image src="/logo.png" alt="수학날다 로고" width={140} height={45} className="h-8 sm:h-10 md:h-12 w-auto" />
        </button>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm lg:text-base font-semibold hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            학원소개
          </button>
          <button
            onClick={() => scrollToSection("programs")}
            className="text-sm lg:text-base font-semibold hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            수업과정
          </button>
          <button
            onClick={() => scrollToSection("teachers")}
            className="text-sm lg:text-base font-semibold hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            강사진
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm lg:text-base font-semibold hover:text-primary transition-all duration-300 hover:scale-110 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            오시는길
          </button>
        </nav>

        <button
          className="md:hidden p-2 sm:p-3 hover:bg-muted/80 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/98 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-2 duration-300">
          <nav className="container px-4 sm:px-6 py-4 sm:py-6 space-y-1">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-muted/80 rounded-xl transition-all duration-300 hover:translate-x-2 active:scale-95"
            >
              학원소개
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="block w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-muted/80 rounded-xl transition-all duration-300 hover:translate-x-2 active:scale-95"
            >
              수업과정
            </button>
            <button
              onClick={() => scrollToSection("teachers")}
              className="block w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-muted/80 rounded-xl transition-all duration-300 hover:translate-x-2 active:scale-95"
            >
              강사진
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-muted/80 rounded-xl transition-all duration-300 hover:translate-x-2 active:scale-95"
            >
              오시는길
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
