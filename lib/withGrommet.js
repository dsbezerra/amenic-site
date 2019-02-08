import React from 'react'
import { Grommet } from 'grommet'
import { deepFreeze } from 'grommet/utils'

const backgroundColor = '#262626'
const textColor = '#ffffff'
const textColors = ['#999', '#aaa', '#bbb', '#ccc', '#ddd', '#eee'];

const colors = {
  accent: '#006fde',
  brand: '#262626',
  background: backgroundColor,
  text: textColor,
}

const colorArray = (array, prefix) =>
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  });

colorArray(textColors, 'text');

const theme = deepFreeze({
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
  icon: {
    color: textColor,
    colors,
  },
})

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
