import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { withRouter } from "react-router";

import { PostListInterface } from "src/interfaces/PostListInterface";

function List(props: any) {
  const { postList, deleteBtnHandler, history } = props;
  return (
    <ListGroup className="w-75 d-inline-flex">
      <ListGroup.Item>
        Your Posts&nbsp;<b>{postList.length}</b>
      </ListGroup.Item>
      {postList &&
        postList.map((post: PostListInterface) => (
          <React.Fragment key={post.id}>
            <ListGroup.Item
              variant="info"
              className="d-flex justify-content-center align-items-center"
            >
              <p className="mr-2">{post.id}</p>
              {post.body}
              <Button
                variant="outline-danger ml-2 mr-2"
                onClick={() => deleteBtnHandler(post.id)}
              >
                Delete
              </Button>
              <Button
                variant="outline-info ml-2 mr-2"
                onClick={() => history.push(`post/${post.id}/comments`)}
              >
                Comments
              </Button>
            </ListGroup.Item>
          </React.Fragment>
        ))}
    </ListGroup>
  );
}

export default withRouter(List);
