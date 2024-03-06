import styled from '@emotion/styled'

export const Layout = styled('div')`
  display: flex;
  justify-content: start;
  flex-direction: row;
  width: 100%;
`

export const LeftNavbar = styled('div')`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow-y: auto;
`

export const RightNavbar = styled('div')`
  width: 300px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
`

export const Content = styled('div')`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  flex-grow: 1;
  box-sizing: border-box;
`

export const Panel = styled('div')`
  display: flex;
  justify-content: start;
  flex-direction: row-reverse;
  width: 100%;
`