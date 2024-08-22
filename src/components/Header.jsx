import styled from "styled-components";
import ToggleThemeButton from "./ToggleThemeButton";
import SubscribeModal from "./SubcribeModal";
import { useState } from "react";

const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => props.theme.menuBgColor};
`;

const StyledMenu = styled.div`
  display: flex;
  height: fit-content;
`;

const StyledSubscribeButton = styled.button`
  border: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: transparent;
  color: #ffffffdd;
  cursor: pointer;

  &:hover {
    background-color: #faa627f9;
    text-shadow: 1px 1px 3px black;
    color: ${(props) => props.theme.textColorInverted};
  }
`;

const StyledIecbLogo = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffffdd;
  font-weight: bold;

  & img {
    width: 100%;
  }
`;

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal && <SubscribeModal closeModal={closeModal} />}
      <StyledHeader>
        <StyledIecbLogo>
          <img src="images/logos/iecb.png" alt="Brasão IECB Internacional" />
          <span>IECB</span>
        </StyledIecbLogo>
        <StyledMenu>
          <StyledSubscribeButton onClick={openModal}>
            Inscreva-se
          </StyledSubscribeButton>
          <ToggleThemeButton />
        </StyledMenu>
      </StyledHeader>
    </>
  );
};

export default Header;
