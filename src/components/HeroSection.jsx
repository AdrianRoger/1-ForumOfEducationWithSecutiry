import styled from "styled-components";
import heroImage from "../assets/img/hero_fullSize.png";

const StyledHeroSection = styled.section`
  width: 100%;
  background-image: url(${heroImage});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.bgColor};

  @container main (max-width: 1023px) {
    height: 90vh;
    background-position: center calc(0% - 20px);
  }

  @container main (min-width: 1024px) {
    aspect-ratio: 16/9;
    background-position: center calc(0% - 80px);
  }

  @media (max-width: 768px) {
    background-position: center calc(0% - 20px);
  }

  @media (max-width: 480px) {
    background-position: calc(50% - 85px) calc(0% - 20px);
  }
`;

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 2rem;
  gap: 25px;
  background-image: ${(props) => props.theme.filter};
  color: ${(props) => props.theme.textColor};
  position: relative;

  & .hero-title {
    padding-block: 0.5rem;
    font-size: 4rem;
    color: ${(props) => props.theme.heroH1Color};
    text-shadow: ${(props) => props.theme.heroH1TextShadow};
  }

  & .effect-phrase {
    position: absolute;
    top: 70%;
    text-align: center;
    text-shadow: ${(props) => props.theme.heroH1TextShadow};
    background-color: ${(props => props.theme.effectBgColor)};
    padding: 0.3rem 1rem;
    border-radius: 0.3rem;
  }

  @media (max-width: 768px) {
    & .hero-title {
      font-size: 2.5rem;
      text-align: center;
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <StyledDiv>
        <h1 className="hero-title">1º FÓRUM DE EDUCAÇÃO COM SEGURANÇA</h1>
        <h1 className="effect-phrase">
          &ldquo;CONSTRUINDO UM AMBIENTE ESCOLAR MAIS SEGURO&rdquo;
        </h1>
      </StyledDiv>
    </StyledHeroSection>
  );
};

export default HeroSection;
