import React, { useEffect, useState } from "react";
import {
  Container,
  Spinner,
  Button,
  Tabs,
  Tab,
  Alert,
  Row,
  Col,
  Image
} from "react-bootstrap";

import {
  setNewlyAddedPostInDb,
  setDeletingPostIdInDb,
  setPostListInDb,
  getPostsFromInDb
} from "src/indexDb";
import AddPost from "src/components/AddPost";
import List from "src/components/List";
import { getPostsList, createPosts, deletePost } from "src/services";
import { PostListInterface } from "src/interfaces/PostListInterface";

function Posts() {
  const [postList, setPostList] = useState<Array<PostListInterface>>([]);
  const [isAddPostBtnClicked, setAddPostButtonClicked] = useState<boolean>(
    false
  );
  const [mode, setMode] = useState<boolean>(false);
  const [isCrudOperInOfflineMode, setIsCrudOperInOfflineMode] = useState<
    boolean
  >(false);
  const [postForm, setPostForm] = useState({
    title: "vivek",
    body: "rajoriya",
    userId: 777
  });
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [key, setKey] = useState<string | null>("pwa");

  useEffect(() => {
    if (key === "list") makeGetPostApiCall(); // to keep uptodate after deleting and addding opertation as well
  }, [key]);

  useEffect(() => {
    if (isCrudOperInOfflineMode) {
      setTimeout(() => {
        setIsCrudOperInOfflineMode(false);
      }, 5000);
    }
  }, [isCrudOperInOfflineMode]);

  const makeGetPostApiCall = () => {
    getPostsList()
      .then(res => {
        setMode(false);
        const AsPerRes = res.slice(0, 20);
        setPostList(AsPerRes);
        setPostListInDb("posts", res);
      })
      .catch(async () => {
        const postListFromStorage: Array<PostListInterface> = await getPostsFromInDb(
          "posts"
        );
        setMode(true);
        setPostList(postListFromStorage);
      });
  };

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e;
    setPostForm(prev => ({ ...prev, [name]: value } as any));
  };

  const addPostBtnHandler = () => {
    setShowLoader(true);
    if (navigator.onLine) {
      setMode(false);
      createPosts(postForm).then(res => {
        const copyPostList = [...postList];
        copyPostList.unshift(res);
        setPostList(copyPostList);
        setShowLoader(false);
        setAddPostButtonClicked(false);
      });
    } else {
      setMode(true);
      setNewlyAddedPostInDb("adding-postItem", postForm);
      navigator.serviceWorker.ready.then(function (swRegistration) {
        swRegistration.sync.register("add-post");
      });
      setIsCrudOperInOfflineMode(true);
      setShowLoader(false);
      setAddPostButtonClicked(false);
    }
  };

  const deleteBtnHandler = (postId: number) => {
    setShowLoader(true);
    if (navigator.onLine) {
      setMode(false);
      deletePost(postId).then(() => {
        const updatedPostList = postList.filter(item => item.id !== postId);
        setPostList(updatedPostList);
        setShowLoader(false);
      });
    } else {
      setMode(true);
      setDeletingPostIdInDb("postId", postId);
      setShowLoader(false);
      navigator.serviceWorker.ready.then(function (swRegistration) {
        swRegistration.sync.register("delete-post");
      });
      setIsCrudOperInOfflineMode(true);
    }
  };

  const backToListBtnHandler = () => {
    setShowLoader(false);
    makeGetPostApiCall();
    setAddPostButtonClicked(!isAddPostBtnClicked);
  };

  const showNotification = () => {
    navigator.serviceWorker
      .getRegistration()
      .then(reg => {
        reg && reg.showNotification("Work @appinventiv!");
      })
      .catch(err =>
        console.log("some error occured while generating STATIC notification")
      );
  };

  return (
    <>
      {mode && (
        <Alert key="warn-id" variant="warning" className="m-0">
          Your are under offline mode!
        </Alert>
      )}
      {isCrudOperInOfflineMode && (
        <Alert key="warn-id" variant="warning">
          Your opertation is cached once you connected with internet, server
          will get notified!
        </Alert>
      )}
      <div className="d-flex justify-content-center align-items-center p-3">
        <h1 className="mt-4 mb-4">
          React-Pwa-Poc
          <div style={{ fontSize: 14 }}>Hope, You liked it!</div>
        </h1>
      </div>
      <Container fluid>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
        >
          <Tab eventKey="pwa" title="PWA">
            <p className="w-75 m-auto pt-3 pb-4 text-center">
              A progressive web application is a type of application software
              delivered through the web, built using common web technologies
              including HTML, CSS and JavaScript. It is intended to work on any
              platform that uses a standards-compliant browser, including both
              desktop and mobile devices
            </p>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Progressive_Web_Apps_Logo.svg/400px-Progressive_Web_Apps_Logo.svg.png"
              fluid
              alt="pwa"
              className="pb-3"
            />
          </Tab>
          <Tab eventKey="list" title="List">
            <div className="d-flex justify-content-around align-items-start mt-3 mb-2 flex-wrap">
              {showLoader && !isAddPostBtnClicked && (
                <span className="pb-3">
                  <span className="pr-2">Deleting post...</span>
                  <Spinner animation="grow" />
                </span>
              )}
              {isAddPostBtnClicked ? (
                <AddPost
                  addPostBtnHandler={addPostBtnHandler}
                  onchangeHandler={onchangeHandler}
                  form={postForm}
                  showLoader={showLoader}
                  backToListBtnHandler={backToListBtnHandler}
                />
              ) : postList && postList.length !== 0 ? (
                <Container fluid>
                  <Row>
                    <Col md={10} sm={12}>
                      <List
                        postList={postList}
                        deleteBtnHandler={deleteBtnHandler}
                      />
                    </Col>
                    <Col md={2} sm={12}>
                      <Button
                        className="mt-3"
                        variant="success"
                        onClick={() =>
                          setAddPostButtonClicked(!isAddPostBtnClicked)
                        }
                      >
                        Add post
                      </Button>
                    </Col>
                  </Row>
                </Container>
              ) : (
                <>
                  <p>Fetching posts...</p>
                  <Spinner animation="grow" />
                </>
              )}
            </div>
          </Tab>
          {"Notification" in window && navigator.serviceWorker && (
            <Tab eventKey="notification" title="Notification">
              <p className="pt-4 text-success">
                A notification is a message that pops up on the user's device.
                Notifications can be triggered locally by an open application,
                or they can be "pushed" from the server to the user even when
                the app is not running. They allow your users to opt-in to
                timely updates and allow you to effectively re-engage users with
                customized content.
              </p>
              <p className="text-info">
                Push Notifications are assembled using two APIs: the&nbsp;
                <strong>Notifications API and the Push API</strong>. The
                Notifications API lets the app display system notifications to
                the user. The Push API allows a service worker to handle Push
                Messages from a server, even while the app is not active.
              </p>
              <Button variant="dark" className="m-3" onClick={showNotification}>
                Give me fake notification
              </Button>
            </Tab>
          )}
          <Tab eventKey="ingredients" title="Ingredients">
            <h3 className="text-left mt-4 pl-4">PWA features and others:</h3>
            <ul className="text-left mt-4 mb-4">
              <li className="text-primary">Offline support</li>
              <li className="text-secondary">Use of IndexDB</li>
              <li className="text-success">Background sync</li>
              <li className="text-danger">FCM (Firebase cloud messaging)</li>
              <li className="text-info">Fake notification</li>
              <li className="text-warning">Hosting on firebase</li>
            </ul>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Posts;
