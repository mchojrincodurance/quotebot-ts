"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketStudyVendor = void 0;
function getHash(blog) {
    let h = 0, l = blog.length, i = 0;
    if (l > 0) {
        while (i < l) {
            h = (h << 5) - h + blog.charCodeAt(i++) | 0;
        }
    }
    return h;
}
class MarketStudyVendor {
    averagePrice(blog) {
        if (process.env.license == null) {
            console.log("Missing license !");
            throw new Error("");
        }
        return getHash(blog) * Math.random();
    }
}
exports.MarketStudyVendor = MarketStudyVendor;
