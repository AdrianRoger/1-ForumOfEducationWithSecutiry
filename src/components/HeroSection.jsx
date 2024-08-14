import styled from "styled-components";
import heroImage from "../assets/img/hero_fullSize.png";
import ToggleThemeButton from './ToggleThemeButton';

const StyledHeroSection = styled.section`
  width: 100%;
  background-image: url(${heroImage});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.bgColor};

  @container main (max-width: 1023px) {
    height: 90vh;
    background-position: center calc(0% - 80px);
  }

  @container main (min-width: 1024px) {
    aspect-ratio: 16/9;
    background-position: center calc(0% - 80px);
  }

  @media (max-width: 320px) {
    background-position: calc(50% - 70px) top;
  }
`;

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  place-items: center start;
  /* gap: 25px; */
  background-image: ${(props) => props.theme.filter};
  color: ${(props) => props.theme.textColor};
  position: relative;

  & h1 {
    padding-block: 0.5rem;
    font-size: 4rem;
    color: #faa627f9;
    text-shadow: 1px 1px 8px #35322ff8;
  }

  @media (max-width: 1366px) {
    & h1 {
      font-size: 2rem;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    & h1 {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

const PositionedButton = styled(ToggleThemeButton)`
  position: absolute;
  top: 25%;
  right: 20px;
`;

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <StyledDiv>
        <h1>1º FÓRUM DE EDUCAÇÃO COM SEGURANÇA</h1>
        <PositionedButton />
      </StyledDiv>
    </StyledHeroSection>
  );
};

export default HeroSection;
