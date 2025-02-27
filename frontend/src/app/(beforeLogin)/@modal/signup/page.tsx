"use client";

import { useRouter } from "next/navigation";

export default function SignupModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2>회원가입</h2>
        <form>{/* 회원가입 폼 내용 */}</form>
        <button onClick={() => router.back()}>닫기</button>
      </div>
    </div>
  );
}
