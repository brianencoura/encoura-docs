import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import ColorCard from './components/ColorCard'

const config: DocsThemeConfig = {
  logo: <span>Encoura</span>,
  project: {
    link: 'https://encoura.org',
  },
  docsRepositoryBase: 'https://github.com/nrccua/encoura-corp',
  footer: {
    text: 'Encoura Web Style Guide',
  },
  // Global MDX Components go here inside the config object
  components: {
    ColorCard: ColorCard
  }
}

export default config