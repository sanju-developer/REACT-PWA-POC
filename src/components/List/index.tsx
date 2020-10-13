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
              className="d-flex justify-content-center align-items-center flex-wrap"
            >
              <p className="mr-2">{post.id}</p>
              {post.body}
              <div>
                <Button
                  variant="outline-danger m-2 m-2"
                  onClick={() => deleteBtnHandler(post.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="outline-info m-2 m-2"
                  onClick={() => history.push(`post/${post.id}/comments`)}
                >
                  Comments
                </Button>
              </div>
            </ListGroup.Item>
          </React.Fragment>
        ))}
    </ListGroup>
  );
}

export default withRouter(List);
