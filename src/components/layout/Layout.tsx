import { Outlet } from "react-router-dom";
import ErrorBoundary from "../shared/errorBoundary";
import Container from "./container";
import Footer from "./footer/footer";
import Header from "./header/header";
import GlobalStyles from "@styles/globalStyles";
import { PageWrapper, ContentWrapper } from "./layout.styles";

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
