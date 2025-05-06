"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Book,
  BarChart3,
  Users,
  GraduationCap,
  Shield,
  ChevronRight,
  Clock,
  Zap,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

/**
 * 홈페이지 컴포넌트
 * 시험판다 서비스의 메인 랜딩 페이지입니다.
 */
export default function Home() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 컴포넌트 마운트 상태
  useEffect(() => {
    setMounted(true);
  }, []);

  // 다크 모드 초기화
  useEffect(() => {
    if (mounted) {
      const savedDarkMode = localStorage.getItem("darkMode");
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (savedDarkMode !== null) {
        setIsDarkMode(savedDarkMode === "true");
      } else {
        setIsDarkMode(systemPrefersDark);
      }
    }
  }, [mounted]);

  // 다크 모드 토글 함수
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
  };

  // 다크 모드 적용
  useEffect(() => {
    if (mounted) {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [isDarkMode, mounted]);

  const features = [
    {
      icon: Book,
      title: "다양한 문제 유형 지원",
      description:
        "객관식, 주관식, O/X, 순서 배열, 연결하기, 빈칸 채우기 등 10가지 이상의 문제 유형으로 폭넓은 학습 평가가 가능합니다.",
    },
    {
      icon: Users,
      title: "스마트한 그룹 관리",
      description:
        "학급, 스터디 그룹, 학원 등 다양한 환경에서 학생들을 효율적으로 관리하고 권한을 세밀하게 설정할 수 있습니다.",
    },
    {
      icon: BarChart3,
      title: "상세한 성적 분석",
      description:
        "개인별, 문제별, 그룹별 통계를 통해 학습 패턴을 분석하고 취약점을 파악하여 맞춤형 학습 전략을 수립할 수 있습니다.",
    },
    {
      icon: GraduationCap,
      title: "교육 단계별 최적화",
      description:
        "초등부터 대학까지, 각 학습 단계에 맞는 문제 유형과 평가 기준을 제공하여 모든 연령대의 학습자에게 적합한 환경을 제공합니다.",
    },
    {
      icon: Shield,
      title: "안전한 데이터 관리",
      description:
        "모든 시험 데이터와 학생 정보는 암호화되어 안전하게 보관되며, 개인정보보호 정책을 엄격히 준수합니다.",
    },
    {
      icon: Clock,
      title: "유연한 시험 설정",
      description:
        "시험 기간, 문제 순서, 채점 방식 등을 세밀하게 설정할 수 있어 다양한 평가 상황에 맞춰 활용할 수 있습니다.",
    },
  ];

  // 서버 사이드 렌더링 대응
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-200">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95">
        <div className="max-w-7xl mx-auto flex h-16 items-center px-4">
          <div className="flex items-center gap-2 md:gap-3">
            <Image src="/logo.png" alt="시험판다 로고" width={32} height={32} />
            <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-wide">
              시험판다
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button onClick={() => router.push("/login")}>로그인</Button>
            <Button onClick={() => router.push("/signup")}>회원가입</Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="mr-2"
            >
              {isDarkMode ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          </div>
        </div>
      </header>
      {/* 메인 콘텐츠 */}
      <main className="flex-1">
        {/* 히어로 섹션 */}
        <section className="relative py-12 md:py-24 lg:py-24 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4">
                  <Zap className="w-4 h-4 mr-2" />
                  <span>모든 교육 환경에 최적화된 솔루션</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl  tracking-tighter text-foreground leading-tight">
                  스마트한 시험 관리,
                  <br />
                  더 나은 교육을 위한
                  <br />
                  <span className="text-primary">완벽한 플랫폼</span>
                </h2>
                <p className="text-sm md:text-lg lg:text-base text-muted-foreground max-w-[600px] leading-relaxed">
                  시험판다로 더욱 효율적인 학습 평가를 경험하세요.<br/>
                  선생님의 업무를 간소화하고 학생의 성장을 정확히 측정하는
                  <br/>신뢰할 수 있는 파트너입니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    onClick={() => router.push("/")}
                    className="w-full sm:w-auto"
                  >
                    시작하기
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform -rotate-6"></div>
                <div className="relative bg-card rounded-2xl shadow-2xl p-8 transform rotate-3">
                  <Image
                    src="/logo.png"
                    alt="시험판다 로고"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 기능 섹션 */}
        <section
          id="features"
          className="py-16 md:py-24 border-y border-border bg-secondary/50"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                강력한 기능으로 교육의 변화를 이끕니다
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                시험판다는 선생님과 학생 모두에게 필요한 모든 기능을 제공합니다
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-card-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              더 나은 교육을 위한 첫걸음을 내딛어보세요
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              14일 동안 모든 기능을 무료로 사용하고, 여러분의 교육 현장에 맞는지
              확인해보세요.
            </p>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section id="faq" className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-10">
              자주 묻는 질문
            </h2>
            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <h3 className="text-md md:text-lg font-semibold text-foreground mb-3">
                  시험판다는 어떤 교육 환경에서 사용할 수 있나요?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  초등학교부터 대학교까지, 학원, 스터디 그룹 등 모든 교육
                  환경에서 사용 가능합니다. 각 환경에 맞는 문제 유형과 평가
                  방식을 제공합니다.
                </p>
              </div>
              <div className="border-b border-border pb-8">
                <h3 className="text-md md:text-lg font-semibold text-foreground mb-3">
                  시험 결과는 어떻게 확인하나요?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  개인별, 그룹별, 문제별로 상세한 통계를 제공합니다. PDF
                  다운로드나 엑셀로 내보내기도 가능합니다.
                </p>
              </div>
              <div className="border-b border-border pb-8">
                <h3 className="font-semibold text-foreground mb-3">
                  부정행위 방지 기능이 있나요?
                </h3>
                <p className="text-muted-foreground">
                  네, 화면 녹화, 창 전환 감지, 랜덤 문제 배열 등 다양한 부정행위
                  방지 기능을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* 푸터 */}
      <footer className="border-t border-border bg-background py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-2">
            <img src="/logo.png" alt="시험판다 로고" width={24} height={24} />
            <span className="font-bold text-foreground">시험판다</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">
            © 2025 TestMaster Corp. All rights reserved.
          </p>
        </div>
      </footer>{" "}
    </div>
  );
}
