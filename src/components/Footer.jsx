import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.7rem 1rem;
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>IECB | Copyright © 2024 Todos os direitos reservados.</span>
    </StyledFooter>
  );
};

export default Footer;
