import Head from 'next/head'
import {
  Box,
} from 'grommet'
import { Header, Footer } from '.'

const Layout = ({ children, title, ...rest }) => (
  <Box responsive {...rest}>
    <Head>
      <title>{title}</title>
    </Head>
    {!rest.noHeader && <Header />}
    {children}
    <Footer />
  </Box>
)

Layout.defaultProps = {
  title: 'amenic - Montes Claros',
}

export { Layout }
