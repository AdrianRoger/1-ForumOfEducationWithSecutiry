import { useState, useEffect } from "react";
import styled from "styled-components";
import { Autoplay, EffectCoverflow, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Estilos para o Carousel
const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.bgColor};
`;

const SwiperContainer = styled(Swiper)`
  height: 52rem;
  padding: 1rem 0;
  position: relative;

  @media (max-width: 500px) {
    height: 47rem;
  }
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 37rem;
  height: 42rem;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 500px) {
      width: 28rem !important;
      height: 36rem !important;
    }
  }

  @media (max-width: 500px) {
    width: 28rem !important;
    height: 36rem !important;
  }
`;

const SliderController = styled.div.attrs(() => ({
  className: "slider-controler",
}))`
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper-button-next,
  .swiper-button-prev {
    background: ${(props) => props.theme.bgColor};
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));

    &.slider-arrow {
      background: ${(props) => props.theme.bgColor};
      filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    }

    &.slider-arrow::after {
      content: "";
    }

    &:hover {
      background: ${(props) => props.theme.hoverColor};
    }

    ion-icon {
      font-size: 2rem;
      color: ${(props) => props.theme.textColor};
    }

    @media (max-width: 990px) {
      &:nth-child(1) {
        left: 70% !important;
        transform: translateX(-70%) !important;
      }

      &:nth-child(2) {
        left: 30% !important;
        transform: translateX(-30%) !important;
      }
    }

    @media (max-width: 450px) {
      &:nth-child(1) {
        left: 80% !important;
        transform: translateX(-80%) !important;
      }

      &:nth-child(2) {
        left: 20% !important;
        transform: translateX(-20%) !important;
      }
    }
  }

  .swiper-button-next {
    left: 58% !important;
    transform: translateX(-58%) !important;
  }

  .swiper-button-prev {
    left: 42% !important;
    transform: translateX(-42%) !important;
  }

  .swiper-pagination {
    position: relative;
    width: 15rem !important;
    bottom: 1rem;

    .swiper-pagination-bullet {
      /* filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1)); */
    }

    .swiper-pagination-bullet-active {
      background: ${(props) => props.theme.textColor};
    }
  }
`;

const StyledCard = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 250px;
  min-height: 100%;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border: 1.5px solid ${(props) => props.theme.textColor};
  padding: 0.5rem 0.5rem 0 0.5rem;
  z-index: 10;

  & .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & p {
      font-size: 1.4rem;
      text-align: justify;
    }

    & h3 {
      justify-self: flex-end;
    }
  }
`;

const StyledImgContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/5;
  border: 1.5px solid ${(props) => props.theme.textColor};
  overflow: hidden;

  & img {
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    background-color: ${(props) => props.theme.bgColor};
  }
`;

const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/carouselData.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return "# Erro ao buscar lista de Palestrantes.";

  return (
    <Container>
      <SwiperContainer
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        // autoplay={true}
        modules={[EffectCoverflow, Navigation, Autoplay]}
      >
        {data.map((data, i) => (
          <SwiperSlideStyled key={i}>
            <StyledCard>
              <StyledImgContainer>
                <img
                  src={data.photo}
                  alt={data.name + ". " + data.profession}
                />
              </StyledImgContainer>
              <div className="card-content">
                <p>{data.profession}</p>
                <h3>{data.name}</h3>
              </div>
            </StyledCard>
          </SwiperSlideStyled>
        ))}
        <SliderController>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </SliderController>
      </SwiperContainer>
    </Container>
  );
};

export default Carousel;
