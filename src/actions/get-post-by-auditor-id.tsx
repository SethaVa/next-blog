import { Category } from "../../types";

const getPostByAuthorId = async (authorId): Promise<Category> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/front/get-post-by-author-id/${authorId}`,
    { next: { revalidate: 3600 } }
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};

export default getPostByAuthorId;
