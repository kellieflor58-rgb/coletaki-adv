'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';

const POSTHOG_KEY = 'phc_kXpctQ7ZvVdpqoxP7TkRz2vbdT4BdftELpQCT6Gko5yw';
const POSTHOG_HOST = 'https://us.i.posthog.com';

let initialized = false;

if (typeof window !== 'undefined' && !initialized) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    session_recording: {
      maskAllInputs: true,
    },
  });
  initialized = true;
}

export default function PostHogProvider({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== 'undefined') {
      const url = window.origin + pathname + (searchParams?.toString() ? '?' + searchParams.toString() : '');
      posthog.capture('$pageview', { '$current_url': url });
    }
  }, [pathname, searchParams]);

  return children;
}
