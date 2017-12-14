'use strict'

import React from 'react'
import Head from 'next/head'
import styled, { injectGlobal } from 'styled-components'
import normalizeCss from './normalize-css'

const Layout = ({ children }) => (
  <main>
    <Head>
      <meta charSet='utf-8' />
      <title>Sistema de cobrança</title>

      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta name='theme-color' content='#000000' />

      <link rel='manifest' href='<%= PUBLIC_URL %>/manifest.json' />

      <meta name='description' content='<%= metatags.description %>' />
      <meta name='google-site-verification' content='' />

      <meta itemProp='name' content='<%= metatags.title %>' />
      <meta itemProp='description' content='<%= metatags.description %>' />
      <meta itemProp='image' content='<%= metatags.image %>' />

      <meta property='fb:admins' content='<%= config.facebook.appKey %>' />
      <meta property='fb:app_id' content='<%= config.facebook.appKey %>' />

      <meta property='og:title' content='<%= metatags.title %>' />
      <meta property='og:type' content='product' />
      <meta property='og:url' content='<%= metatags.url %>' />
      <meta property='og:image' content='<%= metatags.image %>' />
      <meta property='og:description' content='<%= metatags.description %>' />
      <meta property='og:site_name' content='Workflow Next.js' />
      <meta property='og:locale' content='pt_BR' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@workflow-next.js' />
      <meta name='twitter:title' content='<%= metatags.title %>' />
      <meta name='twitter:description' content='<%= metatags.description %>' />
      <meta name='twitter:image' content='<%= metatags.image %>' />
      <meta name='twitter:creator' content='@workflow-next.js' />

      <link rel='canonical' href='<%= metatags.canonical %>' />
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' />
    </Head>

    {children}
  </main>
)

injectGlobal`
  ${normalizeCss}

  *, :before, :after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: Lato, sans-serif;
    font-size: 130%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3,
  h4, h5, h6 {
    font-weight: 700;
  }
`

export default Layout
