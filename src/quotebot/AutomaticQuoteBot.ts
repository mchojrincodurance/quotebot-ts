import { AdSpace } from "./AdSpace";
import { BlogAuctionTask } from "./BlogAuctionTask";

export class AutomaticQuoteBot {
  sendAllQuotes(mode: String): void {
    console.log("Sending in mode " + mode);
    const blogs: string[] = AdSpace.getAdSpaces();
    for (let blog in blogs) {
      const auctionTask: BlogAuctionTask = new BlogAuctionTask();

      auctionTask.PriceAndPublish(blog, mode);
    }
  }
}