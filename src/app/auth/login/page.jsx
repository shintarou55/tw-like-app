"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function loginPage() {
  const { signInUser, signInWithGoogle } = useAuth();
  const router = useRouter();

  // Googleログイン処理
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      if (result.success) {
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="bg-[#1d9bf0] text-white w-[40px] h-[40px] rounded-[8px] flex justify-center items-center mx-auto">
            kw
          </div>
          <CardTitle className="text-2xl">おかえりなさい</CardTitle>
          <CardDescription>アカウントにログインしてください</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <div>
                <Input type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <div>
                <Input type="password" />
              </div>
            </div>
            <Button
              asChild
              type="submit"
              className="w-full bg-[#1d9bf0] hover:bg-[#1da3f0] font-bold"
            >
              <Link href="/home">ログイン</Link>
            </Button>
          </form>
          <Separator className="my-6" />
          <p className="text-center my-6">or</p>
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full my-6"
          >
            Continue with Google
          </Button>
          <div>
            アカウントを持っていませんか？
            <Link
              href="/auth/signup"
              className="text-[#1d9bf0] hover:text-[#1da3f0] ml-2"
            >
              サインアップ
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
