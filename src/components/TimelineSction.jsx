import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledSection = styled.section`
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme.bgColor_2};
  color: #ffffffdd;
  text-align: left;

  & h1 {
    padding-block: 0.5rem;
    font-size: 4rem;
    color: ${(props) => props.theme.heroH1Color};
    text-shadow: ${(props) => props.theme.heroH1TextShadow};
    text-align: center;
  }

  & .timeline {
    padding-top: 2rem;
    
    & .timeline-item {
      display: flex;
      align-items: center;
      padding: 0.3rem;

      & .time {
        padding: 0.5rem 1rem;
        margin: 0.2rem 0.5rem;
        background-color: ${(props) => props.theme.heroH1Color};
      }

      & .lecture {
        margin-left: 1rem;
      }

      & .speaker {
        font-weight: bold;
        word-wrap: nowrap;
      }
    }
  }
`;

const TimelineSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/timeline.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return "# Erro ao buscar lista de Palestrantes.";

  return (
    <StyledSection>
      <h1>Cronograma</h1>
      <div className="timeline">
        <ul>
          {data.map((lec, i) => {
            return (
              <li className="timeline-item" key={i}>
                <span className="time">{lec.time}</span>
                <span className="lecture">
                  {lec.lecture} {lec.speaker && " - "}
                  <span className="speaker">{lec.speaker}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledSection>
  );
};

export default TimelineSection;
