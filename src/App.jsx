import {
  Header,
  MainContainer,
  HeroSection,
  StaffSection,
  Carousel,
  Card,
  BackingSection,
  Location,
  Completion,
  TimelineSection,

  Footer,
} from "./components";


const backingData = {
  name: "DEPUTADO JÚLIO CESAR",
  image: "images/DEPUTADO_JULIO_CESAR.png",
};

function App() {
  
  return (
    <>
      <Header />
      <MainContainer>
        <HeroSection />
        <StaffSection>
          <Carousel />
        </StaffSection>
        <TimelineSection />
        <Location />
        <BackingSection>
          <Card {...backingData} />
        </BackingSection>
        <Completion />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
