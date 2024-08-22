import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .backing-image {
    display: flex;
    flex-direction: column;
    & img {
      flex: 1;
      width: 100%;
      min-height: 100%;
    }
  }

  & .backing-description {
    background-color: ${(props) => props.theme.bgColorInverted};
    color: ${(props) => props.theme.textColorInverted};
    padding: 0.3rem 1rem;
    border-radius: 0.3rem;
  }
`;

const Card = ({ name, description, image }) => {
  return (
    <StyledCard>
      <div className="backing-image">
        <img src={image} alt={"Foto de " + name} />
      </div>
      <div className="backing-description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </StyledCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default Card;
