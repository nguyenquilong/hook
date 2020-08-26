import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  posts: PropTypes.array,
};
PostList.defaultProps = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;
  console.log(posts);
  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
