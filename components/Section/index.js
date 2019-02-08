import {
  Box,
} from 'grommet'

export const Section = ({ children, width, background, ...rest }) => (
  <Box align="center" background={background} responsive>
    <Box
      width={width}
      pad={{ horizontal: 'large' }}
      {...rest}
    >
      {children}
    </Box>
  </Box>
)

Section.defaultProps = {
  background: '#1a1a1a',
  width: 'xlarge',
}


