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
      </MainContainer>
      <StaffSection>
        <Carousel />
      </StaffSection>
    </>
  );
}
// TODO: Criar o card do carousel e estilizar
export default App;
