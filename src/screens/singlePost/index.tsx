import React, { useEffect, useState } from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";

import { getPostComments } from "src/services";
import { PostCommentsInterface } from "src/interfaces/PostListInterface";
import { setPostCommentInDb, getPostCommentFromInDb } from "src/indexDb";

function SinglePost(props: any) {
  const params: any = useParams();
  const [postComments, setPostComments] = useState<
    Array<PostCommentsInterface>
  >([]);

  useEffect(() => {
    if (params)
      getPostComments(params.id)
        .then(res => {
          setPostComments(res);
          setPostCommentInDb("comment", res);
        })
        .catch(async () => {
          const commentsFromIDB = await getPostCommentFromInDb("comment");
          setPostComments(commentsFromIDB);
        });
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-end p-3">
        <Button variant="secondary" onClick={() => props.history.goBack()}>
          Back
        </Button>
      </div>
      <Jumbotron fluid>
        <Container>
          <h1 className="mb-3">Post comments:{params.id}</h1>
          {postComments.map((comment: PostCommentsInterface) => (
            <div
              className="mt-2 mb-2 text-left bg-white rounded p-3"
              key={comment.id}
            >
              <h3>{comment.name}</h3>
              <h6>{comment.email}</h6>
              <p>{comment.body}</p>
            </div>
          ))}
        </Container>
      </Jumbotron>
    </div>
  );
}

export default withRouter(SinglePost);
