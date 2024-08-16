import styled from "styled-components";
// import { useTheme } from "../context/ThemeContext";
import PropTypes from "prop-types";

const StyledStaffSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-block: 4rem;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const StaffSection = ({ children }) => {
  return <StyledStaffSection>{children}</StyledStaffSection>;
};

StaffSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StaffSection;
