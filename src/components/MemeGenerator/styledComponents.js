import styled from 'styled-components'

export const Containerstyle = styled.input`
  height: 50px;
  width: 50%;
  margin: 1%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.s === 'main' ? 'row' : 'column')};
  align-items: center;
  width: ${props => (props.s === 'main' ? '100vw' : '50vw')};
  background-color: ${props => (props.s === 'main' ? 'blue' : 'red')};
  height: 100vh;
`

export const Header = styled.h1`
  font-size: ${props => props.he}px;
  font-weight: 200px;
`

export const Button = styled.button`
  background-color: Blue;
  padding: 1%;
`
export const Heading = styled.h1`
  color: blue;
`
export const La = styled.label`
  color: rgba(12, 52, 36);
`
export const Containerimg = styled.div`
  background-image: url(${props => props.image});
  width: 50vw;
  height: 100vh;
  color: white;
  background-size: cover;
`
