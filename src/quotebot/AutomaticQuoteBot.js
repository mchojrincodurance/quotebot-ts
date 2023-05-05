"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomaticQuoteBot = void 0;
const AdSpace_1 = require("./AdSpace");
const BlogAuctionTask_1 = require("./BlogAuctionTask");
class AutomaticQuoteBot {
    sendAllQuotes(mode) {
        const blogs = AdSpace_1.AdSpace.getAdSpaces();
        for (let blog in blogs) {
            const auctionTask = new BlogAuctionTask_1.BlogAuctionTask();
            auctionTask.PriceAndPublish(blog, mode);
        }
    }
}
exports.AutomaticQuoteBot = AutomaticQuoteBot;
