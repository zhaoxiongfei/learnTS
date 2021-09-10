import * as Cache from "@domain.js/cache";

const logger = {
  info: console.log,
  error: console.error,
};

const cnf = {};
const deps = { logger };

const args = Cache.Before(cnf, deps);
const cache = Cache.Main(...args);
Cache.After(cache, ...args);

const sum = async (a: string, b: string): Promise<string> => {
  return `${a} join ${b} is ${a}${b}`;
};

const cached = cache.caching(
  sum,
  200,
  (a, b) => `str_join_${a}_${b}`,
  console.log.bind(console, "Hited: %s")
);

(async () => {
  console.log("The first apply: %s", await cached("hello", "world"));
  console.log("The second apply: %s", await cached("hello", "world"));
  console.log("The third apply: %s", await cached("hello", "world"));
  console.log("The forth apply: %s", await cached("hello", "world"));
  console.log("The 5th apply: %s", await cached("hello", "world"));

  console.log("status: %o", cache.hitCount());
})();
