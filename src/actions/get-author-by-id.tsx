const getAuthorById = async (authorId): Promise<any> => {
  console.log(authorId);
  const author = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/authors/${authorId}`,
    { next: { revalidate: 3600 } }
  );

  if (!author.ok) {
    throw new Error("Failed to fetch data");
  }

  return author.json();
};

export default getAuthorById;
