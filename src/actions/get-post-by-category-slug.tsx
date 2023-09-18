import { Category } from "../../types";

const getPostByCategorySlug = async (slug): Promise<Category> => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/front/get-post-by-category-slug/${slug}`,
    { cache: "no-cache" }
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};

export default getPostByCategorySlug;
