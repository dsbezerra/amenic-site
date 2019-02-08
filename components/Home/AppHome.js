import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Image,
  Text,
} from 'grommet'

import { getMonthName } from '../../utils/time'

import Toolbar from '../Device/Toolbar'
const HOME_TABS = [
  {
    title: 'Nos cinemas',
  },
  {
    title: 'Em breve',
  }
]

const parseDate = (d) => {
  if (!d) {
    return ''
  }

  const date = new Date(d)
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  const monthName = getMonthName(month).substr(0, 3)
  return `${day} ${monthName} ${year}`
}

const getGridSpecs = (device, screen) => {
  const columns = device.orientation === 'portrait' ? 3 : 5
  const iw = (screen.dimen.width / columns) - 3 // MAX margin
  const ih = (iw / 2) * 3
  return {
    columns,
    item: {
      width: iw,
      height: ih,
      background: '#333',
    },
  }
}

const StyledTab = styled(Box)`
  :hover {
    cursor: pointer;
  }
  :active {
    background: rgba(255, 255, 255, 0.05);
  }
  transition: all .4s ease;
`

const Tab = ({ active, title, onClick }) => (
  <StyledTab
    basis="50%"
    justify="between"
    align="center"
    onClick={onClick}
  >
    <Box pad={{ vertical: '12px' }}>
      <Text size="xsmall" color={active ? 'text' : 'text-1'}>
        {title.toUpperCase()}
      </Text>
    </Box>
    <Box
      width="100%"
      height="2px"
      background={active ? '#fff' : ''}
    />
  </StyledTab>
)

const INTERVAL = 10000

class AppHome extends React.Component {
  state = {
    index: 0,
    isUserInteracting: false,
    lastInteractionTimestamp: 0,
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const {
        index,
        isUserInteracting,
      } = this.state

      const i = index === 1 ? 0 : 1
      if (!isUserInteracting) {
        this.setState({ index: i })
      } else {
        const { lastInteractionTimestamp } = this.state
        const now = Date.now();
        if (now - lastInteractionTimestamp > INTERVAL) {
          this.setState({ index: i, isUserInteracting: false })
        }
      }
    }, INTERVAL)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { index } = this.state
    const {
      device,
      screen,
      ...other
    } = this.props

    const { columns, item } = getGridSpecs(device, screen);
    const isNowPlayingTabActive = index === 0
    const movies = isNowPlayingTabActive ? other.nowPlayingMovies
      : other.upcomingMovies
    return (
      <Box justify="start">
        <Toolbar logo />
        <Box direction="row" style={{ userSelect: 'none', boxShadow: '0px 3px 4px rgba(0,0,0,0.2)' }}>
          {HOME_TABS.map((tab, i) => (
            <Tab
              key={tab.title}
              active={i === index}
              title={tab.title}
              onClick={() => this.setState({
                index: i,
                isUserInteracting: true,
                lastInteractionTimestamp: Date.now(),
              })}
            />
          ))}
        </Box>

        {isNowPlayingTabActive && (
          <Box pad={{ top: '12px', horizontal: '12px' }} gap="xxsmall">
            <Text size="12px">Semana de exibição</Text>
            <Text size="10px" color="text-1">
              {other.formattedNowPlaying}
            </Text>
          </Box>
        )}

        <Box
          key={index}
          height="0px"
          direction="row"
          pad={{ top: '12px', horizontal: '2px' }}
          animation={{ type: 'fadeIn', duration: 400 }}
          wrap
        >
          {movies.map((m, i) => {
            const fr = i % columns === 0
            const lr = (i + 1) % columns === 0
            const center = !fr && !lr
            return (
              <Box
                key={m.movie_url}
                width={`${item.width}px`}
                height={`${item.height}px`}
                background={item.background}
                margin={{
                  left: center || lr ? '2px' : '',
                  bottom: '2px',
                }}
                round="12px"
                style={{
                  backgroundImage: `url('${m.poster}')`,
                  backgroundSize: '100% 100%',
                }}
              >
                {/* <Image
                  src={m.poster}
                  fit="cover"
                  style={{ borderRadius: '12px' }}
                /> */}
                <Box
                  fill
                  justify="end"
                  background="linear-gradient(to bottom, rgba(38,38,38,0) 0%,rgba(38,38,38,0) 20%,rgba(38,38,38,1) 100%)"
                  pad="small"
                  gap="small"
                >
                  <Text size="xsmall" weight="bold" truncate>
                    {m.title}
                  </Text>
                  <Box direction="row" gap="xsmall">
                    {m.theatres ? m.theatres.split(' - ').map(t => (
                      <Image
                        width="22px"
                        height="22px"
                        src={`/static/images/ic_${t.indexOf('Cinemais') > -1 ? 'cinemais' : 'ibicinemas'}.png`}
                      />
                    )) : (
                      <Text color="text-4" size="11px" truncate>
                        {parseDate(m.release_date)}
                      </Text>
                    )}
                  </Box>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    )
  }
}

AppHome.defaultProps = {
  formattedNowPlaying: '',
  nowPlayingMovies: [],
  upcomingMovies: [],
}

export { AppHome }

