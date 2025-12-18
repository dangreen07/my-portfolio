// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from './client'

type LiveClient = Parameters<typeof defineLive>[number]['client']

const LIVE_API_VERSION = 'vX' as const
const liveToken = process.env.SANITY_API_READ_TOKEN
const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/

if (!isoDateRegex.test(LIVE_API_VERSION)) {
  console.warn(
    `[sanity/lib/live] LIVE_API_VERSION (${LIVE_API_VERSION}) is not an ISO date (YYYY-MM-DD). Live mode requires a concrete version string matching the experimental API date.`,
  )
}

if (client.config().apiVersion !== LIVE_API_VERSION) {
  console.warn(
    `[sanity/lib/live] Expected client apiVersion ${LIVE_API_VERSION} but got ${client.config().apiVersion}. Live mode requires the experimental API.`,
  )
}

if (!liveToken) {
  console.warn(
    '[sanity/lib/live] Missing SANITY_API_READ_TOKEN. Live content will fall back to public content only and fail if drafts are required.',
  )
}

const liveClient = client.withConfig({
  // Live content is currently only available on the experimental API
  // https://www.sanity.io/docs/api-versioning
  apiVersion: LIVE_API_VERSION,
}) as unknown as LiveClient

export const { sanityFetch, SanityLive } = defineLive({
  client: liveClient,
})
