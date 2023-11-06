import { Post } from "../../types";

const getFeaturePosts = async (): Promise<Post> => {
  const featuredPosts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/front/get-featured-posts`,
    { next: { revalidate: 3600 } }
  );

  if (!featuredPosts.ok) {
    throw new Error("Failed to fetch data");
  }

  return featuredPosts.json();
};

export default getFeaturePosts;
