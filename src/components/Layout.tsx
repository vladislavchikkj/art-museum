import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import Container from './Container'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = () => {
  return (
    // <ErrorBoundary>
    <PageWrapper>
      <GlobalStyles />
      <Header />
      <ContentWrapper>
        <Container>
          <Outlet />
        </Container>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
    // </ErrorBoundary>
  )
}

export default Layout

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrapper = styled.main`
  flex: 1;
`
