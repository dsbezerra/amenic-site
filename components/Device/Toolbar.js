import {
  Box,
} from 'grommet'

import { Logo } from '../'

const Toolbar = ({ logo, title, titleColor, ...rest }) => (
  <Box pad={{ vertical: '12px', horizontal: '12px' }} {...rest} responsive>
    {logo && (
      <Logo size="small" />
    )}

    {title && (
      <Text color={titleColor}>
        {title}
      </Text>
    )}
  </Box>
)

Toolbar.defaultProps = {
  titleColor: '#fff',
}

export default Toolbar
