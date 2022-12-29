import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 433,
  site: "live-demo",
  domains: ["live-demo.deco.site"],
});