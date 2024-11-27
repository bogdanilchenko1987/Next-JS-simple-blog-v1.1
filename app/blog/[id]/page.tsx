"use client";

import { deletePost, getDataById, updatePost } from "@/app/services/getPosts";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Post() {
  const [post, setPost] = useState({ title: "", body: "" });
  const params = useParams<{ id: string }>();
  const router = useRouter();

  useEffect(() => {
    getDataById(params.id).then(setPost);
  }, []);

  const postUpdate: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const { title, body } = Object.fromEntries(formData.entries());
    const id = params.id;
    updatePost({ title, body, id });
    router.push(`/blog`);
  };

  const onDelete = () => {
    deletePost(params.id);
    router.push(`/blog`);
  };

  return (
    <>
      <Link href="/blog">Back to Blog</Link>
      <br />
      <br />
      <form onSubmit={postUpdate}>
        <input
          name="title"
          className="input border"
          defaultValue={post.title}
        />
        <br />

        <textarea
          autoCorrect="on"
          name="body"
          className="textarea border"
          defaultValue={post.body}
          rows={8}
          cols={6}
        />

        <button type="submit">Update</button>
      </form>
      <button className="button delete" type="button" onClick={onDelete}>
        Delete
      </button>
    </>
  );
}
