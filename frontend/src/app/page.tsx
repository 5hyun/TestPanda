'use client';

import Link from 'next/link';
import { Book, Rocket, Users } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img
                        src="logo.png"
                        alt="Panda Logo"
                        width={40}
                        height={40}
                    />
                    <h1 className={styles.logoTitle}>PandaLearn</h1>
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
                            함께 성장하는<br />
                            <span className={styles.heroHighlight}>스마트 학습 플랫폼</span>
                        </h2>
                        <p className={styles.heroText}>
                            귀여운 판다와 함께 즐겁게 배우며 성장하세요.<br />
                            맞춤형 학습 경험을 통해 여러분의 목표를 달성합니다.
                        </p>
                        <button className={styles.heroCta}>
                            무료로 시작하기
                        </button>
                    </div>
                    <div className={styles.heroImage}>
                        <img
                            src="logo.png"
                            alt="Study Panda"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>

                <div className={styles.features}>
                    <div className={styles.featureCard}>
                        <Book className={styles.featureIcon} size={48} />
                        <h3 className={styles.featureTitle}>맞춤형 커리큘럼</h3>
                        <p className={styles.featureText}>
                            개인의 학습 스타일과 속도에 맞는 최적화된 학습 경험을 제공합니다.
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <Rocket className={styles.featureIcon} size={48} />
                        <h3 className={styles.featureTitle}>실시간 피드백</h3>
                        <p className={styles.featureText}>
                            AI 기반 실시간 피드백으로 효율적인 학습을 지원합니다.
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <Users className={styles.featureIcon} size={48} />
                        <h3 className={styles.featureTitle}>함께 학습</h3>
                        <p className={styles.featureText}>
                            다른 학습자들과 함께 공부하고 성장할 수 있는 커뮤니티를 제공합니다.
                        </p>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <p>© 2024 PandaLearn. All rights reserved.</p>
            </footer>
        </div>
    );
}