import { Collection } from "scl";
import { TechBlogs } from "./TechBlogs";

export class AdSpace {
  private static cache: Map<String, Collection<String>> = new Map<String, Collection<String>>();

  static async getAdSpaces(): Collection<String> {
    if (this.cache.has("blogs list")) {
      return this.cache.get("blogs list");
    }
    // FIXME : only return blogs that start with a 'T'
    const listAllBlogs: string[] = await TechBlogs.listAllBlogs();
    this.cache.set("blogs list", listAllBlogs);

    return listAllBlogs;
  }
}