import styled from "styled-components";
import { useState, useEffect } from "react";

const CompletionSection = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.bgColor_2};
  color: #ffffffdd;
  text-align: center;

  & .title {
    padding: 0.5rem 0 2rem 0;
    font-size: 4rem;
    color: ${(props) => props.theme.heroH1Color};
    text-shadow: ${(props) => props.theme.heroH1TextShadow};
  }

  & .subtitle {
    display: none;
  }

  & .completion {
    display: flex;
    gap: 5px;

    & .principal {
      width: 25%;
      font-size: 1rem;
      & img {
        width: 100%;
        object-fit: cover;
      }
    }

    & .suport {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;

      & .suport-institute {
        width: 8rem;
        & img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }

  @media (max-width: 768px) {
    & .completion {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      & .principal {
        width: 80%;
        font-size: 2rem;
        margin-bottom: 1.5rem;

        & img {
          width: 100%;
          object-fit: cover;
        }
      }

      & .subtitle {
        margin-bottom: 1.5rem;
        display: block;
      }

      & .suport {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;

        & .suport-institute {
          width: 8rem;
          & img {
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    & .completion {
      & .principal {
        width: 80%;
      }
    }
  }
`;

const Completion = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/logosData.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data || !data.length) return "# Erro ao buscar lista de Palestrantes.";

  return (
    <CompletionSection>
      <h1 className="title">Realização</h1>
      <div className="completion">
        <div className="principal">
          <img src="images/logos/iecb.png" alt="Brasão IECB Internacional" />
          <p>Instituição de utilidade pública e interesse social </p>
        </div>
        <h1 className="subtitle">APOIO</h1>
        <div className="suport">
          {data.map((d, i) => {
            return (
              <div className="suport-institute" key={i}>
                <img src={d} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </CompletionSection>
  );
};

export default Completion;
