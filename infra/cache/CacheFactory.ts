import NodeCache from "node-cache";


export class CacheFactory {

    private static cache: NodeCache;
  
    static initCache(): NodeCache {
      if (!CacheFactory.cache) {
        CacheFactory.cache = new NodeCache();
      }
      return CacheFactory.cache;
    }

  }