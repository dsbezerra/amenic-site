import { cloneElement } from 'react'
import axios from 'axios'
import {
  Clock,
  Multimedia,
  Notification,
  Video,
  Ticket,
  Star,
} from 'grommet-icons'
import {
  Box,
  Image,
  Text,
  Paragraph,
  Heading,
} from 'grommet'


import { AppHome, DashedBorder, Device, Logo, Layout, Section } from '../components'
import { formatNowPlayingWeek } from '../utils/time'

import withGrommet from '../lib/withGrommet'

const FeatureBox = ({ icon, label, text }) => (
  <Box
    direction="column"
    align="center"
    pad={{
      vertical: 'large',
      horizontal: 'small',
    }}
    basis="1/3"
  >
    {cloneElement(icon, {
      color: 'accent',
      size: 'large',
    })}
    <Text
      margin={{ top: "medium" }}
    >
      {label}
    </Text>
    <Text
      color="text-1"
      margin={{ top: "small" }}
      size="small"
      textAlign="center"
    >
      {text}
    </Text>
  </Box>
)

class IndexPage extends React.Component {
  static async getInitialProps() {
    const { data: { now_playing_week, movies } } = await axios.get('https://api.amenic.app/home.json')
    if (movies && now_playing_week) {
      const formattedNowPlaying = formatNowPlayingWeek(now_playing_week)
      const nowPlayingMovies = [], upcomingMovies = []

      for (let i = 0; i < movies.length; i++) {
        const m = movies[i]
        if (m.theatres) {
          nowPlayingMovies.push(m)
        } else {
          upcomingMovies.push(m)
          if (upcomingMovies.length >= 10) {
            break
          }
        }
      }

      return {
        formattedNowPlaying,
        nowPlayingMovies,
        upcomingMovies,
      }
    }

    return {}
  }

  state = {}

  render() {
    return (
      <Layout noHeader>
        <Section
          background="url('/static/images/bg_main_header.jpg')"
        >
          <Box pad={{ top: 'large' }}>
            <Logo size="large" />
          </Box>

          <Box
            direction="row-responsive"
            gap="large"
            pad={{ bottom: 'large' }}
          >
            <Box
              basis="50%"
              pad={{ top: 'xlarge', bottom: 'large' }}
            >
              <Box width="medium">
                <Paragraph
                  size="xlarge"
                  margin={{ bottom: 'none' }}
                  s
                  responsive
                >
                  Ajuda você a acompanhar a programação dos seus
                  cinemas favoritos*
                </Paragraph>

                <DashedBorder pad={{ vertical: 'medium' }} color="#999" />

                <Box direction="row" align="start" pad={{ bottom: 'large' }}>
                  <a href="https://play.google.com/store/apps/details?id=com.diegobezerra.amenic" target="_blank">
                    <Image width="150px" src="/static/images/google-play.png" />
                  </a>
                </Box>
              </Box>
              <Box basis="100%" />
              <Text color="#777" size="xsmall">
                * No momento o aplicativo só cobre os cinemas da cidade de Montes Claros, MG.
              </Text>
            </Box>

            <Box
              basis="50%"
              align="center"
              pad={{ vertical: 'large' }}
              animation={[
                { type: 'slideUp', duration: 1000 },
                { type: 'fadeIn', duration: 1000 },
              ]}
            >
              <Device
                width="500px"
                color="#1a1a1a"
                border={{
                  color: '#262626',
                  size: 'small',
                }}
              >
                {({ device, screen }) => (
                  <AppHome
                    device={device}
                    screen={screen}
                    {...this.props}
                  />
                )}
              </Device>
            </Box>
          </Box>
        </Section>

        <Section background="#222" pad={{ vertical: 'large' }}>
          <Box align="center">
            <Heading level="2">
              Ajuda como?
            </Heading>
          </Box>
          <Box direction="row-responsive">
            <FeatureBox
              icon={<Clock />}
              label="Programação"
              text="Programação completa, organizada por tipo de sessão, seja ela legendada ou dublada, dos seus cinemas favoritos"
            />
            <FeatureBox
              icon={<Video />}
              label="Cinemas"
              text="Além da programação, veja também a tabela de preços, endereços e informações de contato de cada cinema"
            />
            <FeatureBox
              icon={<Multimedia />}
              label="Filmes"
              text="Informações como sinopse, elenco, trailers dos filmes em exibição e dos próximos lançamentos também estão disponíveis"
            />
          </Box>
          <Box direction="row-responsive">
            <FeatureBox
              icon={<Notification />}
              label="Notificações"
              text="As notificações ajudam a você ficar antenado nas estreias da semana e novidades do aplicativo"
            />
            <FeatureBox
              icon={<Star />}
              label="Avaliação"
              text="Além dos detalhes do filme também é possível visualizar sua avaliação nos principais portais de crítica na Internet"
            />
          </Box>
        </Section>
      </Layout>
    )
  }
}

export default withGrommet(IndexPage)
