"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { X } from "lucide-react";

// shadcn 컴포넌트 임포트
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginModal() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    router.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // 실제 로그인 로직 추가
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="fixed inset-0" onClick={handleClose} />

      <Card className="w-[400px] max-w-[90vw] mx-auto z-50">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl">로그인</CardTitle>
          <CardDescription>
            계정 정보를 입력하여 시험판다에 로그인하세요
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력하세요"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">비밀번호</Label>
                <Button variant="link" className="p-0 h-auto text-xs">
                  비밀번호 찾기
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "로그인 중..." : "로그인"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">또는</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <Button variant="outline" type="button" className="w-full">
              Google
            </Button>
            <Button variant="outline" type="button" className="w-full">
              Naver
            </Button>
          </div>

          <div className="text-center text-sm">
            계정이 없으신가요?{" "}
            <Button
              variant="link"
              className="p-0 h-auto"
              onClick={() => router.push("/signup")}
            >
              회원가입
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
