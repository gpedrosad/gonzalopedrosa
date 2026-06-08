"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((mod) => mod.Analytics),
  { ssr: false },
);

export function DeferredAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in globalThis) {
      const id = globalThis.requestIdleCallback(() => setReady(true), {
        timeout: 3000,
      });
      return () => globalThis.cancelIdleCallback(id);
    }

    const timeoutId = setTimeout(() => setReady(true), 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!ready) {
    return null;
  }

  return <Analytics />;
}
