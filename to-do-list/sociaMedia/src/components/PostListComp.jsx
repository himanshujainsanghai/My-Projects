import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostListComp = () => {
  const { postList, fetching } = useContext(PostListContext);

  // const handleGetPostsOnFetch = () => {};

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length == 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostListComp;
