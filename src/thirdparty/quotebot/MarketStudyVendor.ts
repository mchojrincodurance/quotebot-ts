function getHash(blog: string) {
  let h = 0,
    // eslint-disable-next-line prefer-const
    l = blog.length,
    i = 0;
  if (l > 0) {
    while (i < l) {
      h = ((h << 5) - h + blog.charCodeAt(i++)) | 0;
    }
  }

  return h;
}

export class MarketStudyVendor {
  public averagePrice(blog: string): number {
    if (process.env.license == null) {
      throw new Error("Missing license !");
    }
    return getHash(blog) * Math.random();
  }
}
