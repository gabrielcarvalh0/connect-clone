import { SectionContainer } from "./SectionContainer";

export function BannerFull() {
  return (
    <SectionContainer>
      <div className="gap-y-6 md:gap-x-6 flex flex-col  md:px-0  justify-center  grid-cols-1 md:grid-cols-3">
        <a href="">
          <picture>
            <source media="(min-width:992px)"  srcSet="https://connectparts.vteximg.com.br/arquivos/12-banner_desk_pt.png?v=638064536423900000" />
            <img
              src="https://connectparts.vteximg.com.br/arquivos/12-banner_mobile_pt.png?v=638064536425770000"
              className="block w-full rounded-md"
              alt="Pro Tork"
              title="Pro Tork"
              loading="lazy"
            />
          </picture>
        </a>
        <a href="">
          <picture>
            <source media="(min-width:992px)"    srcSet="https://connectparts.vteximg.com.br/arquivos/12-banner_desk_nc.png?v=638064536419030000" />
            <img
              src="https://connectparts.vteximg.com.br/arquivos/12-banner_mobile_nc.png?v=638064536428900000"
              className="block w-full rounded-md"
              alt="Pro Tork"
              title="Pro Tork"
              loading="lazy"
            />
          </picture>
        </a>
      </div>
    </SectionContainer>
  );
}
