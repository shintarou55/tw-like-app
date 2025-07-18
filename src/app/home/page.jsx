import React from "react";
import { PostList } from "../../components/PostList";
import { Navigation } from "../../components/Navigation";
import AuthGuard from "@/components/AuthGuard";

export default function HomePage() {
  return (
    <AuthGuard>
      <main className="flex flex-row w-full min-h-screen bg-slate-50">
        <div className="flex w-full">
          <Navigation />
          <PostList />
        </div>
      </main>
    </AuthGuard>
  );
}
