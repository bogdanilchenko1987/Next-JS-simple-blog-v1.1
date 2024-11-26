import { getDataById } from "@/services/getPosts";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params;
    const post = await getDataById(id);

    return {
      title: post.title,
    };
  } catch (error) {
    throw new Error();
  }
}
export default function blogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
