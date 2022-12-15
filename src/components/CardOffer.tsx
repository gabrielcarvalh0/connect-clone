import SectionContainer from "./SectionContainer";


export function CardOffer() {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row justify-center  grid-cols-1 gap-y-6  md:gap-x-6 md:grid-cols-3">
        <a href="">
          <img className="rounded-lg w-screen md:w-full" src={"https://connectparts.vteximg.com.br/arquivos/banners-12-12_01.png?v=638064470378500000"} />
        </a>
        <a href="">
          <img className="rounded-lg w-screen md:w-full" src={"https://connectparts.vteximg.com.br/arquivos/banners-12-12_02b.png?v=638064486834900000"} />
        </a>
        <a href="">
          <img className="rounded-lg w-screen md:w-full" src={"https://connectparts.vteximg.com.br/arquivos/banners-12-12_03.png?v=638064470420430000"} />
        </a>
        
      </div>
    </SectionContainer>
  );
}
