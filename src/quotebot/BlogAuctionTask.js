"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogAuctionTask = void 0;
const MarketStudyVendor_1 = require("../thirdparty/quotebot/MarketStudyVendor");
const QuotePublisher_1 = require("../thirdparty/quotebot/QuotePublisher");
class BlogAuctionTask {
    constructor() {
        this.marketDataRetriever = new MarketStudyVendor_1.MarketStudyVendor();
    }
    //@SuppressWarnings("deprecation")
    PriceAndPublish(blog, mode) {
        const avgPrice = this.marketDataRetriever.averagePrice(blog);
        // FIXME should actually be +2 not +1
        let proposal = avgPrice + 1;
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
        proposal = proposal % 2 == 0 ? 3.14 * proposal : 3.15
            * timeFactor
            * (new Date().getTime() - new Date("2000-01-01")
                .getTime());
        QuotePublisher_1.QuotePublisher.INSTANCE.publish(proposal);
    }
}
exports.BlogAuctionTask = BlogAuctionTask;
