import { Collection } from "scl";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class TechBlogs {

  public static async listAllBlogs(): Promise<string[]> {
    try {
      console.log("Accessing db");
      await sleep(5000); // Access to DB are very slow
    } catch (e: any) {
      throw new Error("Unexpected exception");
    }

    // @ts-ignore
    return ["HackerNews", "Reddit", "TechCrunch", "BuzzFeed","TMZ", "TheHuffPost", "GigaOM"];
  }
}