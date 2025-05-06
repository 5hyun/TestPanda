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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignupModal() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    router.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // 실제 회원가입 로직 추가
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="fixed inset-0" onClick={handleClose} />
      
      <Card className="w-[450px] max-w-[90vw] mx-auto z-50 max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-xl">회원가입</CardTitle>
          <CardDescription>
            시험판다 회원이 되어 다양한 학습 관리 기능을 활용하세요
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                placeholder="이름을 입력하세요"
                required
              />
            </div>
            
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
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
              <Input
                id="passwordConfirm"
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="userType">사용자 유형</Label>
              <Select>
                <SelectTrigger id="userType">
                  <SelectValue placeholder="사용자 유형을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">학생</SelectItem>
                  <SelectItem value="teacher">교사</SelectItem>
                  <SelectItem value="parent">학부모</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                <span>이용약관과 </span>
                <Button variant="link" className="p-0 h-auto text-xs" type="button">
                  개인정보 처리방침
                </Button>
                <span>에 동의합니다</span>
              </Label>
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "가입 중..." : "회원가입"}
            </Button>
          </form>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            이미 계정이 있으신가요?{" "}
            <Button 
              variant="link" 
              className="p-0 h-auto"
              onClick={() => router.push("/login")}
            >
              로그인
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
