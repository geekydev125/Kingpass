import styled, { css } from 'styled-components';
import KingPassSvg from '../assets/svg/kingpass.svg';
import KingLogoSvg from '../assets/svg/footerlogo.svg';
import DeskKingpassVisualSvg from '../assets/png/kingpass-visual.png';
import MobKingpassVisualSvg from '../assets/png/kingpass-visual-mobile.png';
import TelegramSvg from '../assets/icon/icon-telegram.svg';
import TwitterSvg from '../assets/icon/icon-twitter.svg';
import { useNavigate } from 'react-router-dom';

export const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <KingpadLogo src={KingPassSvg} alt="king-Land-logo" onClick={() => navigate('/')} />
        <KingpadVisual src={DeskKingpassVisualSvg} className="md:block hidden" />
        <KingpadVisual src={MobKingpassVisualSvg} className="md:hidden block w-[300px]" />
        <ButtonGroup>
          <SocialLeftBtn href={'https://t.me/KlNGfinance'} rel="noopener noreferrer">
            <Img src={TelegramSvg} alt="telegram-svg" />
          </SocialLeftBtn>
          <SocialRightBtn href={'https://twitter.com/kingfinance'} rel="noopener noreferrer">
            <Img src={TwitterSvg} alt="twitter-svg" />
          </SocialRightBtn>
        </ButtonGroup>
        <PoweredBy>
          <SmallText>Powered by</SmallText>
          <a href={'https://king-finance.vercel.app'} rel="noopener noreferrer">
            <KingLogo src={KingLogoSvg} alt="king-logo" />
          </a>
        </PoweredBy>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`;

const KingpadLogo = styled.img`
  width: 110px;
  height: auto;
  cursor: pointer;
`;

const KingpadVisual = styled.img`
  width: 640px;
  height: auto;
  padding-top: 1rem;
`;

const ButtonGroup = styled.div`
  background: #171717 0% 0% no-repeat padding-box;
  border-radius: 31px;
  height: 60px;
  width: 120px;
  display: flex;
  margin-top: 0.5rem;
  @media screen and (max-width: 640px) {
    height: 40px;
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const SocialBtn = css`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all linear 0.3s;
  &:hover {
    background-color: rgb(34, 33, 33);
  }
  @media screen and (max-width: 640px) {
    height: 40px;
  }
`;

const SocialLeftBtn = styled.a`
  ${SocialBtn}
  border-radius: 31px 0 0 31px;
`;
const SocialRightBtn = styled.a`
  ${SocialBtn}
  border-radius: 0 31px 31px 0;
`;

const PoweredBy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 2.5rem;
`;

const SmallText = styled.div`
  font-size: 16px;
`;

const KingLogo = styled.img`
  width: 80px;
  height: 80px;
  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
