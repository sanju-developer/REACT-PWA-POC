import { openDB } from "idb";
import {
  MyDB,
  CreateNewPostInterface,
  PostListInterface,
  PostCommentsInterface
} from "src/interfaces/PostListInterface";

let db: any;
export async function initIndexDb() {
  db = await openDB<MyDB>("pwa-poc-db", 1, {
    upgrade(db) {
      db.createObjectStore("posts");
      db.createObjectStore("delete-post");
      db.createObjectStore("new-post");
    }
  });
}

export async function setNewlyAddedPostInDb(
  key: string,
  data: CreateNewPostInterface
) {
  return (await db).put("new-post", data, key);
}

export async function setDeletingPostIdInDb(key: string, postId: number) {
  return (await db).put("delete-post", postId, key);
}

export async function getNewlyAddedPostInDb(key: string) {
  return (await db).get("new-post", key);
}

export async function setPostListInDb(
  key: string,
  data: Array<PostListInterface>
) {
  return (await db).put("posts", data, key);
}

export async function getPostsFromInDb(key: string) {
  return (await db).get("posts", key);
}

export async function setPostCommentInDb(
  key: string,
  data: Array<PostCommentsInterface>
) {
  return (await db).put("posts", data, key);
}

export async function getPostCommentFromInDb(key: string) {
  return (await db).get("posts", key);
}
