import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import PropTypes from "prop-types";
import light from "../assets/img/moon-stars.svg";
import dark from "../assets/img/sun-dim.svg";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  border: none;
  border-radius: 50%;
  width: 30px;
  aspect-ratio: 1/1;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
  }
`;

const ToggleThemeButton = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  const buttonImage = theme === "light" ? `${light}` : `${dark}`;

  return (
    <StyledButton className={className} onClick={toggleTheme}>
      <img src={buttonImage} alt="Toggle Theme" />
    </StyledButton>
  );
};

ToggleThemeButton.propTypes = {
  className: PropTypes.string,
};

export default ToggleThemeButton;
