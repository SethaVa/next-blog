const getPostById = async (postId): Promise<any> => {
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}`,
    { next: { revalidate: 3600 } }
  );

  if (!post.ok) {
    throw new Error("Failed to fetch data");
  }

  return post.json();
};

export default getPostById;
