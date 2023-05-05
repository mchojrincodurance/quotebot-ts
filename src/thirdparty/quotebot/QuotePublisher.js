"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotePublisher = void 0;
class QuotePublisher {
    publish(todayPrice) {
        throw new Error("You've pushed a dummy auction to a real ads platform, the business is upset!");
    }
}
exports.QuotePublisher = QuotePublisher;
QuotePublisher.INSTANCE = new QuotePublisher();
