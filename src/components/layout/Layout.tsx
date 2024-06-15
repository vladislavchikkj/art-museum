import { Outlet } from "react-router-dom";
import ErrorBoundary from "../shared/ErrorBoundary";
import Container from "./Container";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ContentWrapper, PageWrapper } from "./Layout.styles";
import GlobalStyles from "@styles/GlobalStyles";

const Layout: React.FC = () => {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default Layout;
