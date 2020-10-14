import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";

function AddPost(props: any) {
  const {
    onchangeHandler,
    form,
    addPostBtnHandler,
    showLoader,
    backToListBtnHandler
  } = props;

  return (
    <div className="form-container">
      {showLoader && (
        <>
          <p>Posting post</p>
          <Spinner animation="grow" />
        </>
      )}
      <Form className="w-100 d-flex flex-wrap">
        <Form.Group
          controlId="formBasicTitle"
          className="w-100 justify-content-start"
        >
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={onchangeHandler}
            type="email"
            value={form.title}
            name="title"
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicBody"
          className="w-100 justify-content-start"
        >
          <Form.Label>Body</Form.Label>
          <Form.Control
            onChange={onchangeHandler}
            type="text"
            value={form.body}
            name="body"
            placeholder="body"
          />
        </Form.Group>
        <Form.Group
          controlId="formBasicUserId"
          className="w-100 justify-content-start"
        >
          <Form.Label>User Id</Form.Label>
          <Form.Control
            onChange={onchangeHandler}
            type="number"
            placeholder="User id"
            value={form.userId}
            name="userId"
          />
          <Form.Text className="text-muted">
            We'll never share your user id with anyone else.
          </Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-between align-item-end">
          <Button
            variant="primary"
            type="button"
            onClick={addPostBtnHandler}
            disabled={showLoader}
          >
            Post
          </Button>
          <Button
            className="ml-2"
            variant="secondary"
            type="default"
            onClick={backToListBtnHandler}
          >
            Back
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddPost;
