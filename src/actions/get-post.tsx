const getPosts = async (): Promise<any> => {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/front/get-posts`,
    { next: { revalidate: 3600 } }
  );

  if (!posts.ok) {
    throw new Error("Failed to fetch data");
  }

  return posts.json();
};

export default getPosts;
