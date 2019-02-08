import {
  Box,
  Heading,
  Image,
  Text,
} from 'grommet'
import { Layout, Section } from '../components'

import withGrommet from '../lib/withGrommet'

export default withGrommet(() => (
  <Layout title="amenic - Política de Privacidade">
    <Section background="#222" pad="large">
      <Box align="center">
        <Image
          src="/static/images/sad_emoji.png"
          width="200px"
        />
        <Heading level="3">
          Oops! Página não encontrada
        </Heading>
        <Text color="text-1">
          Esta página não existe ou está em construção.
        </Text>
      </Box>
    </Section>
  </Layout>
))

