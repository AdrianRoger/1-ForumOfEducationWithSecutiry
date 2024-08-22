import styled from "styled-components";
import PropTypes from "prop-types";

const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #242424c7;
  z-index: 9999;

  & .modal {
    padding: 2rem;
    width: 30%;
    color: #242424;
    background-color: white;
    border-radius: 0.5rem;
    position: relative;
    text-align: center;

    & img {
      width: 100%;
      object-fit: cover;
    }

    & .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: bold;
      color: blue;
    }
  }

  @media (max-width: 768px) {
    .modal {
      width: 80%;
      padding: 2rem 0.5rem 0.5rem 0.5rem;
    }
  }
`;

const SubscribeModal = ({ closeModal }) => {
  return (
    <StyledOverlay onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          X
        </span>
        <img src="images/qrcode.jpeg" alt="..." />
        <p>Inscrições através do email</p>
        <a href="mailto:iecbforum.educacao.seguranca@gmail.com?subject=Inscrição%20no%201º%20Forum%20de%20Educação%20com%20Segurança&body=Olá,%0A%0ASeguem%20os%20dados%20para%20inscrição%20no%201º%20Forum%20de%20Educação%20com%20Segurança.%0A%0ANome:%20%22INFORME%20SEU%20NOME%20COMPLETO%22%0ACPF:%20%22INFORME%20SEU%20CPF%22%0AEMAIL:%20%22INFORME%20SEU%20EMAIL%22%0A%0AObrigado.">
          iecbforum.educacao.seguranca@gmail.com
        </a>
      </div>
    </StyledOverlay>
  );
};

SubscribeModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default SubscribeModal;
