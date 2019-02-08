import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
} from 'grommet'

import StatusBar from './StatusBar'

const calculateDimensions = (width, orientation) => {
  const t = typeof width === 'number'

  let w, h
  if (t === 'number') {
    w = width
  } else if (typeof width === 'string') {
    if (width.endsWith('px')) {
      w = parseInt(width.substring(0, width.length - 2), 10)
    }
  }

  if (orientation != 'portrait') {
    h = (w / 16) * 9
  } else {
    h = w
    w = (h / 16) * 9
  }

  const result = {
    device : {
      width: w,
      height: h,
    },
    screen: {
      width: w * 0.95,
      height: h * 0.95,
    }
  }

  return result
}

const clock = () => {
  const now = new Date()

  let h = now.getHours()
  if (h < 10) h = '0' + h

  let m = now.getMinutes()
  if (m < 10) m = '0' + m

  return `${h}:${m}`
}

class Device extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.string.isRequired,
    background: PropTypes.string,
    orientation: PropTypes.string,
  };

  static defaultProps = {
    width: 'large',
    background: '#fff',
    orientation: 'portrait',
    border: {
      color: '#1a1a1a',
      size: 'small',
    },
  };

  state = {
    clock: clock(),
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ clock: clock() })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { clock } = this.state
    const {
      width,
      color,
      screenBackground,
      orientation,
      border,
      children,
    } = this.props
    const { device, screen } = calculateDimensions(width, orientation)
    return (
      <Box
        background={color}
        border={border}
        round="14px"
        align="center"
        justify="start"
        overflow="hidden"
        style={{
          userSelect: 'none',
        }}
      >
        <Box
          width="80%"
          margin={{ vertical: '12px' }}
          direction="row"
          align="center"
          round
        >
          <Box
            width="12px"
            height="12px"
            background="rgba(255, 255, 255, 0.2)"
            align="center"
            justify="center"
            border
            round
          >
            <Box
              width="6px"
              height="6px"
              background="rgba(0, 0, 0, 0.5)"
              round
            />
          </Box>

          <Box
            basis="35%"
            height="4px"
          />

          <Box
            width="20%"
            height="4px"
            background="rgba(255, 255, 255, 0.2)"
            align="center"
            justify="center"
            border
            round
          />

          <Box
            basis="35%"
            height="4px"
          />
        </Box>

        <Box
          background={screenBackground}
          width={`${screen.width}px`}
          height={`${screen.height}px`}
          margin={{ horizontal: '4px'}}
          round="12px"
          overflow="hidden"
        >
          <StatusBar clock={clock} />
          {children({
            device: {
              dimen: device,
              orientation,
            },
            screen: {
              dimen: screen,
            }
          })}
        </Box>

        <Box
          width="100%"
          height="4px"
          margin={{ vertical: 'small' }}
        />
      </Box>
    )
  }
}

Device.defaultProps = {
  width: '500px',
  color: '#fff',
  screenBackground: '#262626',
  orientation: 'portrait',
  border: {
    color: '#1a1a1a',
    size: 'small',
  },
}

export { Device }
