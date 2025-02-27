"use client";

import { useRouter } from "next/navigation";
import styles from "./LoginModal.module.css";

export default function LoginModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>로그인</h2>
          <button className={styles.closeButton} onClick={handleClose}>
            ✕
          </button>
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              이메일
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            로그인
          </button>
        </form>

        <div className={styles.socialLogin}>
          <p>소셜 로그인</p>
          <div className={styles.socialButtons}>
            <button className={styles.socialButton}>구글</button>
            <button className={styles.socialButton}>네이버</button>
          </div>
        </div>
      </div>
    </div>
  );
}
