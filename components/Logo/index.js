import styled from 'styled-components'
import {
  Box,
  Text,
} from 'grommet'

const StyledLogo = styled(Box)`
  letter-spacing: 2px;
  font-feature-settings: "smcp" 1;
  user-select: none;
`

const SIZES = {
  xsmall: 12,
  small: 18,
  medium: 24,
  large: 30,
  xlarge: 36,
  xxlarge: 42,
}

const getLogoSizes = (size) => {
  const s = SIZES[size] || SIZES.medium;
  return {
    first: `${s+10}px`,
    other: `${s}px`,
  }
}

const Logo = ({ color, size }) => {
  const sizes = getLogoSizes(size);
  return (
    <StyledLogo direction="row" align="baseline">
      <Text
        size={sizes.other}
        color={color}>
         Amenic
      </Text>
    </StyledLogo>
  )
}

Logo.defaultProps = {
  color: '#fff',
  size: 'medium',
}

export { Logo }
