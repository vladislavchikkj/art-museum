import ErrorBoundary from '@shared/errorBoundary';
import { BookmarkProvider } from '@utils/bookmarkContext';
import GlobalStyles from '@utils/globalStyles';
import { theme } from '@utils/theme';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './Footer/footer';
import Header from './Header/header';
import Container from './container';
import { ContentWrapper, PageWrapper } from './layout.styles';

const Layout: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <BookmarkProvider>
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
        </BookmarkProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Layout;
