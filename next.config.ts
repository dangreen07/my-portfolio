import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
};

export default withPayload(nextConfig)