import styled from 'styled-components'
import {
  Box,
  Heading,
  Text,
} from 'grommet'

import withGrommet from '../lib/withGrommet'

const StyledHeading = styled(Heading)`
  letter-spacing: 8px;
  font-feature-settings: "smcp" 1;
  font-weight: 400;
  font-size: 56px;
  & span {
    font-size: 72px;
  }
`

const Logo = () => (
  <StyledHeading margin="none">
    <span>A</span>menic
  </StyledHeading>
)

export default withGrommet(() => (
  <Box
    align="center"
    justify="center"
    fill
  >
    <Logo />
    <Text
      margin="none"
    >
      COMING SOON
    </Text>
  </Box>
))
