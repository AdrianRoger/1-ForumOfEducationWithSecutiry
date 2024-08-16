import PropTypes from "prop-types";
// import styled from "styled-components";



const Card = ({ name, profession, photo }) => {
  return <>{ name + profession + photo }</>
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string,
  photo: PropTypes.string.isRequired,
};

export default Card;
