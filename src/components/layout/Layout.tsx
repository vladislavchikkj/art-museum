import GlobalStyles from "@styles/globalStyles";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../shared/errorBoundary";
import Container from "./container";
import Footer from "./footer/footer";
import Header from "./header/header";
import { ContentWrapper, PageWrapper } from "./layout.styles";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

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
