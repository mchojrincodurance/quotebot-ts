import { TechBlogs } from "./TechBlogs";

export class AdSpace {
  private static cache: Map<string, string[]> = new Map();

  static getAdSpaces(): string[] {
    if (this.cache.has("blogs list")) {
      return this.cache.get("blogs list") as [];
    }

    // FIXME : only return blogs that start with a 'T'
    const listAllBlogs: string[] = TechBlogs.listAllBlogs();
    this.cache.set("blogs list", listAllBlogs);

    return listAllBlogs;
  }
}
