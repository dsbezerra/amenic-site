import React from 'react'
import { Grommet } from 'grommet'

const backgroundColor = '#262626'
const textColor = '#ffffff'

const colors = {
  brand: '#262626',
  background: backgroundColor,
  text: textColor,
}

const theme = {
  global: {
    colors,
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
    text: {
      dark: textColor,
      light: '#000000',
    },
  },
}

function withGrommet(BaseComponent) {
  class App extends React.Component {
    componentDidMount() { }

    render() {
      return (
        <Grommet theme={theme} full>
          <BaseComponent {...this.props} />
        </Grommet>
      )
    }
  }

  App.getInitialProps = (ctx) => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx)
    }

    return {}
  };

  return App
}

export default withGrommet
