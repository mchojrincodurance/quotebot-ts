export class QuotePublisher {

  public static readonly INSTANCE: QuotePublisher = new QuotePublisher();

  public publish(todayPrice: number): void {
    throw new Error(
      "You've pushed a dummy auction to a real ads platform, the business is upset!"
    );
  }
}