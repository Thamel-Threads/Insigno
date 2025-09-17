// 🌸 INSIGNO CACHE (LRU)
import { LRUCache } from "lru-cache";

const cache = new LRUCache<string, Uint8Array>({
  max: 500,           // store up to 500 badges
  ttl: 1000 * 60 * 60, // optional: 1 hour TTL
  updateAgeOnGet: true, // refresh age on access
  allowStale: false,    // do not return stale items
});

export function getCache(key: string) {
  return cache.get(key);
}

export function setCache(key: string, value: Uint8Array) {
  cache.set(key, value);
}

export function clearCache() {
  cache.clear();
}
