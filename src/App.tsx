import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BannerFull } from "./components/BannerFull";
import { BlockOffer } from "./components/BlockOffer";
import { CardListRef } from "./components/CardListRef";
import { CardListSlider } from "./components/CardListSlider";
import { CardOffer } from "./components/CardOffer";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { RuleRegister } from "./components/RuleRegister";
import { SectionContainer } from "./components/SectionContainer";
import SimpleSlider from "./components/SimpleSlider";

function App() {
  return (
    <>
      <div id="app" className="w-full">
        <BlockOffer />
        <NavBar />
        <main id="main" className="pb-16">

       
        <div className="w-full relative  ">
          <SimpleSlider />
        </div>

        <CardOffer />

        <BannerFull />
        <SectionContainer className="card-slider relative mt-12 mb-12">
          <CardListSlider title="Campeões de venda" />
        </SectionContainer>

        <SectionContainer className="card-slider relative mt-12 mb-12">
          <CardListSlider
            title="Você quase comprou"
            titleSecondary="E talvez se interesse por:"
            backgroundTitle
          />
        </SectionContainer>
        <CardListRef />
        <RuleRegister />

        <SectionContainer className="card-slider relative mt-12 mb-12">
          <CardListSlider
            title="Você viu esse:"
            titleSecondary="E pode gostar desses:"
            backgroundTitle
          />
        </SectionContainer>
        </main>
        <Footer />
      </div>
      
    </>
  );
}
export default App;
