import { DBSchema } from "idb";

export interface PostListInterface {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface CreateNewPostInterface {
  title: string;
  body: string;
  userId: number | undefined;
}

export interface MyDB extends DBSchema {
  "new-post": {
    key: string;
    value: CreateNewPostInterface;
  };

  posts: {
    value: Array<PostListInterface>;
    key: number;
    indexes: { id: number };
  };

  "delete-post": {
    key: string;
    value: { postId: number };
  };
}

export interface PostCommentsInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
