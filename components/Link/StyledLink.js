import styled from 'styled-components'

const StyledLink = styled.a`
  text-decoration: none;

  &:link, :visited, :active {
    color: ${props => props.color};
  }

  &:hover {
    color: ${props => props.color};
    text-decoration: ${props => props.decoration};
  }
`

StyledLink.defaultProps = {
  decoration: 'underline',
}

export { StyledLink }
