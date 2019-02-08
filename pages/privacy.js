import {
  StatusGoodSmall,
} from 'grommet-icons'
import {
  Box,
  Heading,
  Text,
} from 'grommet'

import { Layout, Section, StyledLink } from '../components'

import withGrommet from '../lib/withGrommet'

const DefaultParagraph = ({ children, size }) => (
  <Box margin={{ bottom: 'large' }}>
    <Text color="text-1" size={size}>
      {children}
    </Text>
  </Box>
)

DefaultParagraph.defaultProps = {
  size: 'normal'
}

const THIRD_PARTY = [
  {
    label: 'Google Play Services',
    href: 'https://www.google.com/policies/privacy/',
  },
  {
    label: 'Crashlytics',
    href: 'http://try.crashlytics.com/terms/privacy-policy.pdf',
  },
]

export default withGrommet(() => (
  <Layout title="amenic - Política de Privacidade">
    <Section background="#222" pad="large">
      <Heading level="4">
        Política de Privacidade
      </Heading>

      <DefaultParagraph>
        O app amenic - Montes Claros é um aplicativo suportado por anúncios.
      </DefaultParagraph>

      <Heading level="4">
        É coletado alguma informação do usuário?
      </Heading>

      <DefaultParagraph>
        O aplicativo pode coletar algumas informações de uso do mesmo, mas nenhuma
        informação pessoal é coletada.
      </DefaultParagraph>

      <DefaultParagraph>
        Apenas dados sobre o dispositivo são coletados com o intuito de melhorar
        o aplicativo. Esses dados podem ser o nome do dispositivo, a versão do
        sistema operacional, a configuração do aplicativo, a hora e data do seu
        uso e outras estatísticas que dizem respeito ao funcionamento e
        comportamento do aplicativo.
      </DefaultParagraph>

      <DefaultParagraph>
        Tudo é coletado de forma anônima pelos seguintes serviços de terceiros:
      </DefaultParagraph>

      <Box gap="small" margin={{ left: 'small' }}>
        {THIRD_PARTY.map(tp => (
          <Box align="center" gap="small" direction="row" key={tp.href}>
            <StatusGoodSmall size="small" color="#999" />
            <StyledLink key={tp.label} href={tp.href} color="#999">
              <Text color="text-1" size="small">{tp.label}</Text>
            </StyledLink>
          </Box>
        ))}
      </Box>
    </Section>
  </Layout>
))

