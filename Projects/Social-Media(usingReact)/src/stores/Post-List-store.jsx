import { createContext, useReducer } from "react";
import React from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (posts) => posts.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      id: Date.now(),
      type: "ADD_POST",
      payload: {
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <>
      <PostList.Provider value={{ postList, addPost, deletePost }}>
        {children}
      </PostList.Provider>
    </>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to solukhumbu",
    body: "Hello friends im in solukhumbu.Hope to see you there.Enjoy a Lot",
    reactions: 2,
    userId: "user-998",
    tags: ["vacation", "enjoying", "Nepal"],
  },
  {
    id: "2",
    title: "Hiking in Langtang Valley",
    body: "Hey everyone, I just started my trek in Langtang Valley. The mountains look amazing and the weather is perfect. Loving every moment here!",
    reactions: 5,
    userId: "user-1023",
    tags: ["hiking", "trekking", "Nepal", "mountains"],
  },
];
export default PostListProvider;
