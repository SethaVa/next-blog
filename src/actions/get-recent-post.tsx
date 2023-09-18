const getRecentPosts = async (): Promise<any> => {
  const recentPosts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/front/get-recent-posts`,
    { cache: "no-cache" }
  );

  if (!recentPosts.ok) {
    throw new Error("Failed to fetch data");
  }

  return recentPosts.json();
};

export default getRecentPosts;
