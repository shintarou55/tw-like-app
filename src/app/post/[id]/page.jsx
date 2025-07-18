"use client";
import React from "react";
import { Navigation } from "../../../components/Navigation";
import { useParams } from "next/navigation";
import { Post } from "../../../components/Post";
import { mockPosts } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowLeft, ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PostDetailPage() {
  const params = useParams();
  const postId = params.id;
  // createdAtがDateでなかった場合の対処
  // 文字列や数値からDateオブジェクトに変換する関数
  // もしDateオブジェクトであればそのまま返す
  // 文字列や数値であればDateオブジェクトに変換して返す
  // それ以外の型の場合は現在の日付を返す
  // これにより、createdAtが常にDateオブジェクトとして扱える
  const parseDate = (value) => {
    if (value instanceof Date) return value;
    if (typeof value === "string" || typeof value === "number")
      return new Date(value);
    return new Date();
  };

  //components/Post.jsx
  // 投稿IDが数値であることを確認
  const post = mockPosts.find((p) => String(p.id) === String(postId));
  console.log("Post ID:", postId, "Post:", post);
  return (
    <div className="flex flex-row min-h-screen bg-slate-50">
      <Navigation />
      {/* Post */}
      <main className="flex-1 pb-16 md:pb-0">
        <div className="max-w-4xl mx-auto ml-4">
          <div className="mb-4 mt-2">
            <Link href="/home" className="flex items-center">
              <Button variant="ghost" size="sm" className="mr-2 ml-1">
                <ArrowLeftIcon className="w-4 h-4" />
              </Button>
              <p className="text-lg font-bold">戻る</p>
            </Link>
          </div>
          <Post
            id={post.id}
            content={post.content}
            authorId={post.authorId}
            authorName={post.authorName}
            authorUsername={post.authorUsername}
            authorAvatar={post.authorAvatar}
            images={post.images}
            likes={post.likes}
            comments={post.comments}
            createdAt={parseDate(post.createdAt)}
            visibility={post.public}
          />
        </div>
      </main>
    </div>
  );
}
