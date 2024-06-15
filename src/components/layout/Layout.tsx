import GlobalStyles from '@styles/globalStyles';
import { theme } from '@styles/theme';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from '../shared/errorBoundary';
import Container from './container';
import Footer from './footer/footer';
import Header from './header/header';
import { ContentWrapper, PageWrapper } from './layout.styles';

const Layout: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Layout;
