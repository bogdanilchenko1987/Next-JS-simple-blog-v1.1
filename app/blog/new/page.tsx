"use client";

import { addPost } from "@/app/services/getPosts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

export default function NewPost() {
  const router = useRouter();

  const handleAddPost: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form: any = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    await addPost(data);

    form.reset();
    router.push(`/blog/`);
  };

  return (
    <>
      <Link href="/blog">Back to Blog</Link>
      <br />
      <br />
      <form onSubmit={handleAddPost}>
        <input name="title" className="input " defaultValue={""} />
        <br />

        <textarea
          autoCorrect="on"
          name="body"
          className="textarea "
          defaultValue={""}
          rows={8}
          cols={6}
        />

        <button type="submit">Add post</button>
      </form>
    </>
  );
}
