// app/providers.tsx
'use client'

import { POSTHOGPageView } from '@/analitycs/posthog/page-views'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect, type FC, type ReactNode } from 'react'


type PostHogProviderProps = {
  children: ReactNode
}
const POSTHOGProvider: FC<PostHogProviderProps> = ({ children }) => {
    useEffect(() => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false // Disable automatic pageview capture, as we capture manually
      })
  }, [])

  return (
    <PostHogProvider client={posthog}>
      <POSTHOGPageView />
      {children}
    </PostHogProvider>
  )
}

export { POSTHOGProvider }