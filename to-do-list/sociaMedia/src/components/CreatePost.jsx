import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReactions = postReactionsElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionsElement.current.value = "";
    postTagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postBody,
        tags: postTags,
        reactions: postReactions,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id Here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="place your UserId "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          ref={postBodyElement}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={postReactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Number of people reacted to your post"
        />
      </div>{" "}
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={postTagsElement}
          className="form-control"
          id="tags"
          placeholder="Please Enter your tags using space..."
        />
      </div>
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
