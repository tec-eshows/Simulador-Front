import { AppProps } from 'next/app'
import { GetServerSidePropsContext } from 'next'
import { ChakraProvider, useStatStyles } from '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider as NextAuthProvider } from 'next-auth/client'

import { QueryClientProvider } from 'react-query'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'
import { AuthProvider } from '../contexts/AuthContext'

import { theme } from '../styles/theme'
import React, { useState } from 'react'
import { FilterUrlProvider } from '../contexts/FilterUrlContext'
import Router, { useRouter } from 'next/router'

import NProgress from 'nprogress'
import Head from 'next/head'
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
// if (process.env.NODE_ENV === 'development') {
//   makeServer();
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <FilterUrlProvider>
            <SidebarDrawerProvider>
              <Head>
                <title>Eshows</title>
              </Head>
              <Component {...pageProps} />
            </SidebarDrawerProvider>
          </FilterUrlProvider>
        </ChakraProvider>

        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default MyApp
