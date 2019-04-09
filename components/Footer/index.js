import Link from 'next/link'
import styled from 'styled-components'
import {
  Facebook,
  Instagram,
  Twitter,
  Location,
} from 'grommet-icons'
import {
  Box,
  Text,
} from 'grommet'

import { DashedBorder, Logo, StyledLink } from '../'

const FooterLink = ({ href, children, color, ...rest }) => (
  <Link href={href} passHref>
    <StyledLink color={color} {...rest}>
      <Text color={color} size="small">
        {children}
      </Text>
    </StyledLink>
  </Link>
)

FooterLink.defaultProps = {
  color: '#999',
}

const Footer = ({ width }) => {
  return (
    <Box
      align="center"
      background="#1a1a1a"
      responsive
    >
      <Box
        width={width}
        pad={{ horizontal: 'large' }}
      >
        <Box
          align="baseline"
          gap="xlarge"
          pad={{ top: 'xlarge' }}
          direction="row-responsive"
        >
          <Logo />
          <Box direction="row-responsive" gap="medium">
            <FooterLink href="/about">
              Sobre
            </FooterLink>
            <FooterLink href="/contact">
              Contato
            </FooterLink>
          </Box>
          <Box flex />
          <Box direction="row" gap="medium">
            <Twitter color="text-1" />
            <Instagram color="text-1" />
            <Facebook color="text-1" />
          </Box>
        </Box>
        <DashedBorder pad={{ vertical: 'xlarge' }} color="#666" />
        <Box
          align="baseline"
          gap="large"
          pad={{ bottom: 'large' }}
          direction="row-responsive"
        >
          <Box gap="xxsmall" direction="row">
            <Text color="text-1" size="small">
              Feito por Diego Bezerra
            </Text>
          </Box>

          <Box direction="row-responsive">
            <FooterLink href="/privacy">
              Política de Privacidade
            </FooterLink>
          </Box>
          <Box flex />
          <Box>
            <Text size="small" color="text-1">
              © {new Date().getFullYear()}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Footer.defaultProps = {
  width: 'xlarge',
}

export { Footer }
