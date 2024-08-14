import "./App.css";
import {
  MainContainer,
  HeroSection,
  StaffSection,
  Carousel,
} from "./components";

function App() {
  return (
    <>
      <MainContainer>
        <HeroSection />
        <StaffSection>
          <Carousel /> 
        </StaffSection>
      </MainContainer>
    </>
  );
}
// TODO: Criar o card do carousel e estilizar
export default App;
