import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import ErrorBoundary from "../shared/ErrorBoundary";
import Container from "./Container";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
`;

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
