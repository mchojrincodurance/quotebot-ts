import { AdSpace } from "./AdSpace";
import { BlogAuctionTask } from "./BlogAuctionTask";

export class AutomaticQuoteBot {
  sendAllQuotes(mode: string): void {
    const blogs: string[] = AdSpace.getAdSpaces();
    for (const blog in blogs) {
      const auctionTask: BlogAuctionTask = new BlogAuctionTask();

      auctionTask.PriceAndPublish(blog, mode);
    }
  }
}
