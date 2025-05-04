"use client";

import Image from "next/image";
import { Book, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

/**
 * 홈페이지 컴포넌트
 * 시험판다 서비스의 메인 랜딩 페이지입니다.
 */
export default function Home() {
  const router = useRouter();

  return (
      <div className="min-h-screen bg-gradient-to-b from-bg-gradient-start to-bg-gradient-end">
        <header className="flex justify-between items-center p-4 md:p-6 bg-bg-primary shadow-sm">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="시험판다 로고" width={40} height={40} />
            <h1 className="text-2xl font-bold text-text-primary">
              시험판다
            </h1>
          </div>
          <nav className="flex items-center gap-4">
            <Button
                variant="ghost"
                onClick={() => router.push("/login")}
                className="text-red-500"
            >
              로그인
            </Button>
            <Button
                variant="default"
                onClick={() => router.push("/signup")}
                className="bg-brand-primary text-bg-primary hover:bg-brand-secondary"
            >
              회원가입
            </Button>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                똑똑한
                <br />
                <span className="text-brand-highlight">
                시험 관리 플랫폼
              </span>
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                선생님은 문제를 내고, 학생들은 시험을 볼 수 있는 서비스입니다.
                <br />
                초등학생부터 대학생까지, 모든 교육 단계에서 활용 가능합니다.
              </p>
              <Button
                  size="lg"
                  className="text-lg px-6 py-3 bg-brand-primary text-bg-primary hover:bg-brand-secondary font-medium"
              >
                시작하기
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                  src="/logo.png"
                  alt="Test Platform"
                  width={400}
                  height={400}
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-bg-primary rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Book className="text-brand-primary mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  다양한 문제 유형
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  객관식, 주관식, 순서 배열, 연결하기 등 다양한 문제 유형을
                  지원합니다.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-bg-primary rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <FileText
                    className="text-brand-primary mb-4"
                    size={48}
                />
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  체계적인 그룹 관리
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  그룹별 학생 관리와 권한 설정으로 효율적인 학습 환경을
                  구축합니다.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-bg-primary rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <BarChart3
                    className="text-brand-primary mb-4"
                    size={48}
                />
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  성적 분석 통계
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  문제별 정답률, 평균, 표준편차 등 다양한 통계로 학습 성과를
                  분석합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="bg-bg-secondary py-8 text-center text-text-secondary mt-20 text-lg">
          <p>© 2024 TestMaster. All rights reserved.</p>
        </footer>
      </div>
  );
}