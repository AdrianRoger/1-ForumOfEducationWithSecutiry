import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBackingSection = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.bgColor};

  & h1 {
    text-align: center;
    color: ${(props) => props.theme.textColor};
  }
`;

const BackingSection = ({ children }) => {
  return (
    <StyledBackingSection>
      <h1>APOIO</h1>
      {children}
    </StyledBackingSection>
  );
};

BackingSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackingSection;
