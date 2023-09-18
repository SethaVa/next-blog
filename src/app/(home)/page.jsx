import getPosts from "@/actions/get-post";
import PostList from "./components/PostList";

const Home = async () => {
  const posts = await getPosts();

  return (
    <>
      <PostList posts={posts} />
    </>
  );
};

export default Home;
