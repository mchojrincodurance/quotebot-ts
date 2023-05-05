function getHash(blog: String) {
  let h = 0, l = blog.length, i = 0;
  if (l > 0) {
    while (i < l) {
      h = (h << 5) - h + blog.charCodeAt(i++) | 0;
    }
  }

  return h;
}

export class MarketStudyVendor {
  public averagePrice(blog: String): number {
    if (process.env.license == null) {
      console.log("Missing license !");

      throw new Error("");
    }
    return getHash(blog) * Math.random();
  }
}