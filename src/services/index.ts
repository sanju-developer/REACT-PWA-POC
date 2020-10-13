import {
  PostListInterface,
  CreateNewPostInterface,
  PostCommentsInterface
} from "src/interfaces/PostListInterface";

export function getPostsList(): Promise<Array<PostListInterface>> {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => json);
}

export function createPosts(
  newPost: CreateNewPostInterface
): Promise<PostListInterface> {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost)
  })
    .then(response => response.json())
    .then(json => json);
}

export function deletePost(postId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE"
  });
}

export function getPostComments(
  postId: number
): Promise<Array<PostCommentsInterface>> {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(json => json);
}
