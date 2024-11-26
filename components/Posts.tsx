import Link from "next/link";

type Props = {
  posts: any[];
};

const Posts = ({ posts }: Props) => {
  return (
    <ol>
      {posts.map((post: any) => (
        <li key={post.id}>
          <i>
            <Link href={`blog/${post.id}`}>{post.title}</Link>
          </i>
        </li>
      ))}
    </ol>
  );
};

export { Posts };
