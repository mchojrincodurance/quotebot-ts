export class TechBlogs {
  public static listAllBlogs(): string[] {
    try {
      console.log("Accessing db");
      await sleep(5000); // Access to DB are very slow
    } catch (e: any) {
      throw new Error("Unexpected exception");
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return [
      "HackerNews",
      "Reddit",
      "TechCrunch",
      "BuzzFeed",
      "TMZ",
      "TheHuffPost",
      "GigaOM"
    ];
  }
}
