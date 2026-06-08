import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../stores/Post-List-store";

export default function PostList() {
  const { postList, deletePost } = useContext(PostListData);
  console.log(postList);
  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} post={post} deletePost={deletePost}></Post>
      ))}
    </div>
  );
}
