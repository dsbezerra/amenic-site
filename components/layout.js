import Head from 'next/head'

export const Layout = ({ children, title = 'amenic - Montes Claros' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    {/* TODO: Add header */}
    {children}
    {/* TODO: Add footer */}
  </div>
)
