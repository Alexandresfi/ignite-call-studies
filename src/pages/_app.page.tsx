import '../lib/day'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Roboto } from 'next/font/google'

import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </QueryClientProvider>
  )
}
