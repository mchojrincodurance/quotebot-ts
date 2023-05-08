function requestToDB(ms: number) {
  const now = new Date();

  while (new Date().getTime() - now.getTime() < ms);
}
export class TechBlogs {
  public static listAllBlogs(): string[] {
    try {
      requestToDB(5000);
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
