import styled from "styled-components";
// import PropTypes from "prop-types";

const LocationSection = styled.section`
  width: 100%;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.bgColor_2};
  text-align: center;

  & h1 {
    padding-block: 0.5rem;
    font-size: 4rem;
    color: ${(props) => props.theme.heroH1Color};
    text-shadow: ${(props) => props.theme.heroH1TextShadow};
  }
`;

const StyledContentDiv = styled.div`
  width: 100%;
  /* background-color: ${(props) => props.theme.bgColor}; */
  color: #ffffffdd;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    text-align: right;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem;
    & div {
      text-align: left;
    }
  }
`;

const StyledFrame = styled.iframe`
  margin: 2rem 1rem;
  width: 100%;
  max-width: 400px;
  height: 280px;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.textColor};
`;

const Location = () => {
  return (
    <LocationSection>
      <h1>Localização</h1>
      <StyledContentDiv>
        <div>
          <p>Auditório Nereu Ramos - Anexo II</p>
          <p>Câmara dos Deputados - Brasília/DF</p>
          <p>08:00hs - 14:00hs</p>
          <p>28/08/2024</p>
        </div>
        <StyledFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d716.6622951426251!2d-47.86524720465243!3d-15.801369545895753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b3855766779%3A0xba6eaf0246abecf2!2sAudit%C3%B3rio%20Nereu%20Ramos!5e0!3m2!1spt-BR!2sbr!4v1724108530441!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></StyledFrame>
      </StyledContentDiv>
    </LocationSection>
  );
};

export default Location;
