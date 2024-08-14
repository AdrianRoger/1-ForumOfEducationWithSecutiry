import styled from "styled-components";
// import { useTheme } from "../context/ThemeContext";
// import PropTypes from "prop-types";
import { cardData } from "../constants/cardData";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const Carousel = () => {
  return (
    <StyledDiv>
      {cardData.map((data, i) => (
        <p key={i}>{data.name}</p>
      ))}
    </StyledDiv>
  );
};

export default Carousel;
