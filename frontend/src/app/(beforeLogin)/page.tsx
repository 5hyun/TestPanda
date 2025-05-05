"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { 
  Book, 
  FileText, 
  BarChart3, 
  Users, 
  GraduationCap, 
  Shield, 
  CheckCircle,
  Star,
  ChevronRight,
  Award,
  Clock,
  Zap,
  PlayCircle,
  Moon,
  Sun
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
      const savedDarkMode = localStorage.getItem('darkMode');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedDarkMode !== null) {
        setIsDarkMode(savedDarkMode === 'true');
      } else {
        setIsDarkMode(systemPrefersDark);
      }
    }
  }, [mounted]);

  // 다크 모드 토글 함수
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
  };

  // 다크 모드 적용
  useEffect(() => {
    if (mounted) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode, mounted]);

  const features = [
    {
      icon: Book,
      title: "다양한 문제 유형 지원",
      description: "객관식, 주관식, O/X, 순서 배열, 연결하기, 빈칸 채우기 등 10가지 이상의 문제 유형으로 폭넓은 학습 평가가 가능합니다."
    },
    {
      icon: Users,
      title: "스마트한 그룹 관리",
      description: "학급, 스터디 그룹, 학원 등 다양한 환경에서 학생들을 효율적으로 관리하고 권한을 세밀하게 설정할 수 있습니다."
    },
    {
      icon: BarChart3,
      title: "상세한 성적 분석",
      description: "개인별, 문제별, 그룹별 통계를 통해 학습 패턴을 분석하고 취약점을 파악하여 맞춤형 학습 전략을 수립할 수 있습니다."
    },
    {
      icon: GraduationCap,
      title: "교육 단계별 최적화",
      description: "초등부터 대학까지, 각 학습 단계에 맞는 문제 유형과 평가 기준을 제공하여 모든 연령대의 학습자에게 적합한 환경을 제공합니다."
    },
    {
      icon: Shield,
      title: "안전한 데이터 관리",
      description: "모든 시험 데이터와 학생 정보는 암호화되어 안전하게 보관되며, 개인정보보호 정책을 엄격히 준수합니다."
    },
    {
      icon: Clock,
      title: "유연한 시험 설정",
      description: "시험 기간, 문제 순서, 채점 방식 등을 세밀하게 설정할 수 있어 다양한 평가 상황에 맞춰 활용할 수 있습니다."
    }
  ];

  const testimonials = [
    {
      name: "김민지 선생님",
      role: "서울 교육대학교 부설초등학교",
      content: "시험판다 덕분에 학생들의 학습 패턴을 더 잘 이해하게 되었어요. 특히 개인별 성적 분석 기능이 정말 유용해요.",
      rating: 5
    },
    {
      name: "박준호 교수",
      role: "한양대학교 컴퓨터공학과",
      content: "온라인 수업에서 중간고사를 진행하는 데 정말 탁월한 도구입니다. 부정행위 방지 기능도 만족스럽네요.",
      rating: 5
    },
    {
      name: "이수연 원장",
      role: "강남 영어학원",
      content: "다양한 문제 유형과 자동 채점 기능으로 업무 효율이 크게 향상되었습니다. 학부모님들도 만족하고 계세요.",
      rating: 4
    }
  ];

  const stats = [
    { number: "1,000+", label: "등록된 선생님" },
    { number: "10,000+", label: "누적 학생 수" },
    { number: "50,000+", label: "진행된 시험" },
    { number: "98%", label: "사용자 만족도" }
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
              <Image 
                src="/logo.png" 
                alt="시험판다 로고" 
                width={32} 
                height={32}
              />
              <h1 className="text-lg md:text-xl font-bold text-foreground">
                시험판다
              </h1>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  기능
                </a>
                <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  사용 후기
                </a>
                <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </nav>
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
                <span className="sr-only">다크 모드 토글</span>
              </Button>
              <Button
                  variant="ghost"
                  onClick={() => router.push("/login")}
              >
                로그인
              </Button>
              <Button
                  onClick={() => router.push("/signup")}
              >
                무료로 시작하기
              </Button>
            </div>
          </div>
        </header>

        {/* 메인 콘텐츠 */}
        <main className="flex-1">
          {/* 히어로 섹션 */}
          <section className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-transparent">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Zap className="w-4 h-4 mr-2" />
                    <span>모든 교육 환경에 최적화된 솔루션</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-foreground">
                    스마트한 시험 관리,<br />
                    더 나은 교육을 위한<br />
                    <span className="text-primary">
                      완벽한 플랫폼
                    </span>
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[600px]">
                    시험판다로 더욱 효율적인 학습 평가를 경험하세요. 
                    선생님의 업무를 간소화하고 학생의 성장을 정확히 측정하는 
                    신뢰할 수 있는 파트너입니다.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                        size="lg"
                        onClick={() => router.push("/signup")}
                        className="w-full sm:w-auto"
                    >
                      14일 무료 체험 시작하기
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

          {/* 통계 섹션 */}
          <section className="py-16 md:py-24 border-y border-border bg-secondary/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 기능 섹션 */}
          <section id="features" className="py-16 md:py-24">
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
                    <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 사용 후기 섹션 */}
          <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  선생님들의 실제 사용 후기
                </h2>
                <p className="text-lg text-muted-foreground">
                  전국의 교육자들이 시험판다와 함께하고 있습니다
                </p>
              </div>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-bold text-primary">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-card-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA 섹션 */}
          <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                더 나은 교육을 위한 첫걸음을 내딛어보세요
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                14일 동안 모든 기능을 무료로 사용하고, 
                여러분의 교육 현장에 맞는지 확인해보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => router.push("/signup")}
                >
                  무료 체험 시작하기
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white bg-white/10 hover:bg-white/20"
                >
                  상담 신청하기
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ 섹션 */}
          <section id="faq" className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
                자주 묻는 질문
              </h2>
              <div className="space-y-8">
                <div className="border-b border-border pb-8">
                  <h3 className="font-semibold text-foreground mb-3">
                    시험판다는 어떤 교육 환경에서 사용할 수 있나요?
                  </h3>
                  <p className="text-muted-foreground">
                    초등학교부터 대학교까지, 학원, 스터디 그룹 등 모든 교육 환경에서 사용 가능합니다. 
                    각 환경에 맞는 문제 유형과 평가 방식을 제공합니다.
                  </p>
                </div>
                <div className="border-b border-border pb-8">
                  <h3 className="font-semibold text-foreground mb-3">
                    시험 결과는 어떻게 확인하나요?
                  </h3>
                  <p className="text-muted-foreground">
                    개인별, 그룹별, 문제별로 상세한 통계를 제공합니다. 
                    PDF 다운로드나 엑셀로 내보내기도 가능합니다.
                  </p>
                </div>
                <div className="border-b border-border pb-8">
                  <h3 className="font-semibold text-foreground mb-3">
                    부정행위 방지 기능이 있나요?
                  </h3>
                  <p className="text-muted-foreground">
                    네, 화면 녹화, 창 전환 감지, 랜덤 문제 배열 등 다양한 부정행위 방지 기능을 제공합니다.
                  </p>
                </div>
                <div className="border-b border-border pb-8">
                  <h3 className="font-semibold text-foreground mb-3">
                    가격은 어떻게 되나요?
                  </h3>
                  <p className="text-muted-foreground">
                    14일 무료 체험 이후 월 9,900원부터 시작하는 다양한 요금제를 제공합니다. 
                    교육 기관용 특별 할인도 준비되어 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* 푸터 */}
        <footer className="border-t border-border bg-background">
          <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Image 
                    src="/logo.png" 
                    alt="시험판다 로고" 
                    width={24} 
                    height={24}
                  />
                  <span className="font-bold text-foreground">시험판다</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  모든 교육 환경을 위한<br />
                  스마트한 시험 관리 플랫폼
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">서비스</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">특징</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">가격</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">API</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">지원</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">도움말 센터</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">커뮤니티</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">상태</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">회사</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">회사 소개</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">블로그</a></li>
                  <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">채용</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                © 2024 TestMaster Corp. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}