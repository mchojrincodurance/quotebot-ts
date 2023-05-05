import { AutomaticQuoteBot } from "./AutomaticQuoteBot";

const bot: AutomaticQuoteBot = new AutomaticQuoteBot();
console.log("Starting the app");
bot.sendAllQuotes("FAST");
console.log("All done!");