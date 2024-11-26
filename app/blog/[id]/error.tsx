"use client";

import Link from "next/link";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <h3>
      {" "}
      Oops!! This post is deleted.
      <br />
      <i>
        <Link href={"/blog"}>Go back to blog page</Link>
      </i>
    </h3>
  );
}
