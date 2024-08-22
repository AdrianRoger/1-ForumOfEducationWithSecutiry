import styled from "styled-components";
// import { useTheme } from "../context/ThemeContext";
import PropTypes from "prop-types";

const StyledStaffSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-block: 2rem;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  & h1 {
    padding-block: 0.5rem;
    font-size: 4rem;
    color: ${(props) => props.theme.heroH1Color};
    text-shadow: ${(props) => props.theme.heroH1TextShadow};
  }

  @media (max-width: 1366px) {
    & h1 {
      /* font-size: 3rem; */
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    & h1 {
      /* font-size: 1.5rem; */
      text-align: center;
    }
  }
`;

const StaffSection = ({ children }) => {
  return (
    <StyledStaffSection>
      <h1>Palestrantes</h1>
      {children}
    </StyledStaffSection>
  );
};

StaffSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StaffSection;
