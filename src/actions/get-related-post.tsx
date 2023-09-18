const getRelatedPosts = async (categoryName, slug): Promise<any> => {
  console.log(categoryName, slug);
  const recentPosts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/front/get-related-posts/${slug}/${categoryName}`,
    { cache: "no-cache" }
  );

  if (!recentPosts.ok) {
    throw new Error("Failed to fetch data");
  }

  return recentPosts.json();
};

export default getRelatedPosts;
