import styled from 'styled-components'
import {
  Box,
} from 'grommet'

// NOTE: size and color conflicts with hr's size and color attributes
const StyledHR = styled.hr`
  width: ${props => props.hrWidth};
  border: ${props => `${props.hrSize} dashed ${props.hrColor}`};
`

const DashedBorder = ({ width, color, size, ...rest }) => (
  <Box {...rest}>
    <StyledHR
      hrWidth={width}
      hrSize={size}
      hrColor={color}
    />
  </Box>
)

DashedBorder.defaultProps = {
  width: '100%',
  color: '#fff',
  size: '0.5px',
}

export { DashedBorder }
