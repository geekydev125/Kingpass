import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import BgDesktop from '../assets/png/bg_desktop.png';
import BgMobile from '../assets/png/bg_mobile.png';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <Header />
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${BgDesktop});
  @media screen and (max-width: 768px) {
    background-image: url(${BgMobile});
  }
  background-size: cover;
`;
