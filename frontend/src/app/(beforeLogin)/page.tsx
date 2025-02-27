"use client";

import Link from "next/link";
import { Book, FileText, BarChart3 } from "lucide-react";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="logo.png" alt="Test Platform Logo" width={40} height={40} />
          <h1 className={styles.logoTitle}>시험판다</h1>
        </div>
        <nav className={styles.nav}>
          <Link href="/login" className={styles.loginBtn}>
            로그인
          </Link>
          <Link href="/signup" className={styles.signupBtn}>
            회원가입
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>
              똑똑한
              <br />
              <span className={styles.heroHighlight}>시험 관리 플랫폼</span>
            </h2>
            <p className={styles.heroText}>
              선생님은 문제를 내고, 학생들은 시험을 볼 수 있는 서비스입니다.
              <br />
              초등학생부터 대학생까지, 모든 교육 단계에서 활용 가능합니다.
            </p>
            <button className={styles.heroCta}>무료로 시작하기</button>
          </div>
          <div className={styles.heroImage}>
            <img src="logo.png" alt="Test Platform" width={400} height={400} />
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <Book className={styles.featureIcon} size={48} />
            <h3 className={styles.featureTitle}>다양한 문제 유형</h3>
            <p className={styles.featureText}>
              객관식, 주관식, 순서 배열, 연결하기 등 다양한 문제 유형을
              지원합니다.
            </p>
          </div>
          <div className={styles.featureCard}>
            <FileText className={styles.featureIcon} size={48} />
            <h3 className={styles.featureTitle}>체계적인 그룹 관리</h3>
            <p className={styles.featureText}>
              그룹별 학생 관리와 권한 설정으로 효율적인 학습 환경을 구축합니다.
            </p>
          </div>
          <div className={styles.featureCard}>
            <BarChart3 className={styles.featureIcon} size={48} />
            <h3 className={styles.featureTitle}>성적 분석 통계</h3>
            <p className={styles.featureText}>
              문제별 정답률, 평균, 표준편차 등 다양한 통계로 학습 성과를
              분석합니다.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 TestMaster. All rights reserved.</p>
      </footer>
    </div>
  );
}
