import { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyles from '../styles/GlobalStyles'
import Container from './Container'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout
