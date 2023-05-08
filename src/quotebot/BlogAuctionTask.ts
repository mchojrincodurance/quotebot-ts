import { MarketStudyVendor } from "../thirdparty/quotebot/MarketStudyVendor";
import { QuotePublisher } from "../thirdparty/quotebot/QuotePublisher";

export class BlogAuctionTask {

  private readonly marketDataRetriever: MarketStudyVendor = new MarketStudyVendor();

  //@SuppressWarnings("deprecation")
  public PriceAndPublish(blog: string, mode: string): void {
    const avgPrice: number = this.marketDataRetriever.averagePrice(blog);
    // FIXME should actually be +2 not +1
    let proposal: number = avgPrice + 1;
    let timeFactor = 1;
    if (mode == "SLOW") {
      timeFactor = 2;
    }
    if (mode == "MEDIUM") {
      timeFactor = 4;
    }
    if (mode == "FAST") {
      timeFactor = 8;
    }
    if (mode == "ULTRAFAST") {
      timeFactor = 13;
    }
    proposal =
      proposal % 2 == 0
        ? 3.14 * proposal
        : 3.15 *
          timeFactor *
          (new Date().getTime() - new Date("2000-01-01").getTime());
    QuotePublisher.INSTANCE.publish(proposal);
  }
}
