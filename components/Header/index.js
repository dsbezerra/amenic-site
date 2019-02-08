import Link from 'next/link'
import {
  Box,
} from 'grommet'
import { Logo } from '../Logo'
import { StyledLink } from '../Link'

const Header = ({ width }) => (
  <Box
    align="center"
    background="#1a1a1a"
    responsive
  >
    <Box
      width={width}
      justify="start"
      pad="large"
    >
      <Link href="/" passHref>
        <StyledLink decoration="none">
          <Logo size="large" />
        </StyledLink>
      </Link>
    </Box>
  </Box>
)

Header.defaultProps = {
  width: 'xlarge',
}

export { Header }
