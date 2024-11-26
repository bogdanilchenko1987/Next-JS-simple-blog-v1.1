"use client";

import { useEffect, useState } from "react";

import { Posts } from "@/components/Posts";
import { PostsSearch } from "@/components/PostsSearch";

import { useRouter } from "next/navigation";
import { getAllPosts } from "@/services/getPosts";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const filteredContacts = () => {
    const filterlowerCase = search.toLowerCase();
    return posts.filter((post) =>
      post.title.toLowerCase().includes(filterlowerCase)
    );
  };

  return (
    <>
      <button className="button" onClick={() => router.push(`/blog/new`)}>
        Add post
      </button>

      <br />
      <PostsSearch
        onSearch={(e) => setSearch(e.target.value)}
        search={search}
      />
      {loading ? <h3>Loading...</h3> : <Posts posts={filteredContacts()} />}
    </>
  );
}
