import React from 'react';

const CommentInPost = ({comment, index }) => {
  return (
    <li className="comment" key={index}>
      <div className="comment-username-box">
        <div className="comment-user">
          <span className="username">{comment.username}</span>
        </div>
      </div>
      <div className="comment-content">{comment.comment}</div>
    </li>)
};

export default CommentInPost;


