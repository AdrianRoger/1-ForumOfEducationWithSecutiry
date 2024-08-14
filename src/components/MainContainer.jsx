import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMainContainer = styled.main`
  container-name: main;
  container-type: inline-size;
  /* max-width: 1366px; */
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const MainContainer = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
