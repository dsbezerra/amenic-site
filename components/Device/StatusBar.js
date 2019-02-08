import {
  StatusGoodSmall,
  StatusWarningSmall,
  StatusDisabledSmall,
} from 'grommet-icons'
import {
  Box,
  Text,
} from 'grommet'

const StatusBar = ({ clock, background }) => (
  <Box
    width="100%"
    background={background}
    direction="row"
    justify="between"
    pad={{ vertical: 'small', horizontal: 'small' }}
    round="12px"
  >
    <Text color="#fff" size="12px">
      {clock}
    </Text>
    <Box direction="row" gap="xxsmall">
      <StatusGoodSmall size="small" />
      <StatusWarningSmall size="small" />
      <StatusDisabledSmall size="small" />
    </Box>
  </Box>
)

StatusBar.defaultProps = {
  background: '#262626',
}

export default StatusBar
