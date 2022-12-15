import {
  FaFacebookSquare,
  FaInstagram,
  FaPhone,
  FaRss,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BackToTop } from "./BackToTop";
import { LogoConnect } from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-col bg-blue-900 text-[#6c757d] py-2">
      <BackToTop/>
      <div className=" max-w-[1290px] mx-auto py-4">
        <section className="flex flex-col md:flex-row gap-6 px-4 mt-6">
          <div className="w-full md:w-3/12 mb-4 md:mb-0 text-gray-100">
            <div className="text-xl mb-2">Dúvidas</div>
            <p className="text-sm mb-1">
              <a
                href="/centraldeatendimento/contato"
                title="Formulário de Contato"
              >
                Formulário de Contato
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="/centraldeatendimento" title="Central de Atendimento">
                Central de Atendimento
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="/centraldeatendimento#comocomprar" title="Como Comprar">
                Como Comprar
              </a>
            </p>
            <p className="text-sm mb-1">
              <a
                href="/centraldeatendimento#trocasedevolucoes"
                title="Política de Trocas e Devoluções"
              >
                Trocas e Devoluções
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="/guia-de-compras" title="Guia de Compras">
                Guia de Compras
              </a>
            </p>
            <div className="mt-4">
              <p className="text-orange-500 mb-0 flex items-center gap-2">
                <FaPhone /> (14) 3311-8100
              </p>
              <small >
                Horário de atendimento do SAC: <br/>
                de seg. a sex. das 8h às 18h e
                sáb.<br/> das 8h às 14h
              </small>
            </div>
          </div>
          <div className="w-full md:w-3/12 mb-4 md:mb-0 text-gray-100">
            <div className="text-xl mb-2">Institucional</div>
            <p className="text-sm mb-1">
              <a href="#" title="Quem Somos">
                Quem Somos
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Politica de Privacidade">
                Politica de Privacidade
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Prazos e entrega">
                Política de Envios, Prazos e Entregas
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Termos e Condições de Uso">
                Termos e Condições de Uso
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" className="seguranca" title="Segurança">
                Segurança
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="/programa-connectados/como-funciona" title="Connectados">
                Connectados - programa de pontos e cashback
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Mapa do Site">
                Mapa do Site
              </a>
            </p>
          </div>
          <div className="w-full md:w-3/12 mb-4 md:mb-0 text-gray-100">
            <div className="text-xl mb-2">Serviços</div>
            <p className="text-sm mb-1">
              <a href="#" title="Comece a vender">
                Connect Marketplace
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Connect Global">
                Seja Fornecedor
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Connect Global">
                Connect Global
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Chegou Connect">
                Chegou Connect
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Central de Atacado para Lojistas">
                Atacado para Lojistas
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Connect Parts - Mercado Livre">
                Mercado Livre
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Carvizion - Compra e Venda de Automóveis">
                Carvizion - Compra e Venda de Automóveis
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="Comprando com Ame Digital na Connect Parts">
                Ame Digital
              </a>
            </p>
            <p className="text-sm mb-1">
              <a href="#" title="GetNinjas">
                GetNinjas - Indicação de instalação
              </a>
            </p>
          </div>
          <div className="w-full md:w-3/12 mb-4 md:mb-0 ">
            <div className="text-gray-200 font-bold flex justify-start mb-2">
              Redes sociais
            </div>
            <div
              className="mb-4 flex flex-row gap-2 items-center "
              id="footer-social-network"
            >
              <a
                href="https://www.facebook.com/ConnectParts"
                className="hover:text-white"
                target="_Blank"
                rel="noopener"
                title="Facebook"
              >
                <FaFacebookSquare size={30} />
              </a>
              <a
                href="https://www.youtube.com/c/ConnectPartsOficial"
                className="hover:text-white"
                target="_Blank"
                rel="noopener"
                title="Youtube"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href="https://www.blog.connectparts.com.br/"
                className="hover:text-white"
                target="_Blank"
                rel="noopener"
                title="Blog Connect Parts"
              >
                <FaRss size={30} />
              </a>
              <a
                href="https://www.twitter.com/connectpts"
                className="hover:text-white"
                target="_Blank"
                rel="noopener"
                title="Twitter"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.instagram.com/connectpartsoficial"
                className="hover:text-white"
                target="_Blank"
                rel="noopener"
                title="Instagram"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://pt.linkedin.com/company/connectparts"
                className="hover:text-white"
                target="_Blank"
                rel="noopener"
                title="Linkedin"
              >
                <FaFacebookSquare size={34} />
              </a>
            </div>

            <div className="block">
              <div className="text-gray-200 font-bold flex justify-start mb-2">
                Reconhecimento e Segurança
              </div>
              <div id="footer-security">
                <div className="flex justify-staret gap-6">
                  <div className="col-auto">
                    <a
                      href="http://www.ebit.com.br/connect-parts/selo"
                      target="_blank"
                      title="Avaliado pelos consumidores"
                      id="selo-ebit-footer"
                    >
                      <img
                        className=""
                        loading="lazy"
                        alt="Avaliado pelos consumidores"
                        src="https://newimgebit-a.akamaihd.net/ebitBR/selo/img_6458.png"
                      />
                    </a>
                  </div>
                  <div className="col-auto">
                    <a
                      href="https://www.reclameaqui.com.br/empresa/connect-parts"
                      target="_blank"
                      title="Selo Reclame-Aqui - Reputação RA1000 | Reconhecimento e seguranca"
                    >
                      <img
                        loading="lazy"
                        className=""
                        alt="Selo Reclame-Aqui - Reputação RA1000 | Reconhecimento e seguranca"
                        src="https://connectparts.vteximg.com.br/arquivos/reclame-aqui-selo-03102022.png?v=638004079720630000"
                      />
                    </a>
                  </div>
                  <div className="col-auto">
                    <img
                      loading="lazy"
                      className=""
                      alt="Empresa Certificada | BSA"
                      src="https://connectparts.vteximg.com.br/arquivos/logo-bsa-footer-connect.png?v=636869647631830000"
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-12">
                  <div className="col-auto">
                    <a
                      href="https://secure.vtex.com/?an=connectparts"
                      target="_blank"
                      title="VTEX PCI Certified"
                    >
                      <img
                        loading="lazy"
                        className=""
                        alt="VTEX PCI Certified"
                        src="https://io.vtex.com.br/front-libs/assets/pci/vtex-pci-100.png"
                      />
                    </a>
                  </div>
                  <div className="col-auto">
                    <div data-trustvox-certificate-fixed="">
                      <a
                        href="javascript:;"
                        className="trustvox-certificate__modal-btn-js"
                        target="_self"
                      >
                        <span className="trustvox-certificate__fixed trustvox-certificate__fixed-full-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block mt-12">
              <div className="text-gray-200 font-bold flex justify-start mb-2">
                BAIXE O NOSSO APP:
              </div>
              <div id="footer-security">
                <div className="flex justify-start gap-6">
                  <div className="col-auto">
                    <img
                      className=""
                      loading="lazy"
                      alt="Avaliado pelos consumidores"
                      src="https://connectparts.vteximg.com.br/arquivos/onelinkto_app-connect-parts.png?v=638029048583530000"
                    />
                  </div>
                  <div className="flex flex-col items-end justify-end">
                    <a
                      href="https://play.google.com/store/apps/details?id=br.com.connectparts"
                      target="_blank"
                    >
                      <img
                        className=""
                        loading="lazy"
                        alt="Avaliado pelos consumidores"
                        src="https://connectparts.vteximg.com.br/arquivos/cp-app-play-store.png?v=638029048581370000"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/app/connect-parts/id1611620015"
                      target="_blank"
                    >
                      <img
                        className=""
                        loading="lazy"
                        alt="Avaliado pelos consumidores"
                        src="https://connectparts.vteximg.com.br/arquivos/cp-app-app-store.png?v=638029048579930000"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 mt-6">
          <a className="" id="footer-tarja" href="/marketplace">
            <img
              loading="lazy"
              className="max-w-full"
              alt="tarja connect marketplace footer"
              src="https://connectparts.vteximg.com.br/arquivos/tarja-connect-marketplace-footer.png?v=637477856117800000"
            />
          </a>
        </section>
        <section
          className="flex mt-8 flex-col justify-center items-center mx-auto px-8 text-center text-xs"
          id="footer-bottom"
        >
          <a className="mb-6 " href="/" title="Connect Parts">
            <LogoConnect />
          </a>
          <p className="mb-6 ">
            Connectparts Comércio de Peças e Acessórios Automotores S.A. CNPJ:
            08.677.036/0001-16 / IE: 438.241.764.116 <br />
            Rua Carlos Tosin, 1256 - Marília, SP - CEP: 17512-120
          </p>
          <p className="mb-6">
            Formas de pagamento aceitas: cartões de crédito (Visa, MasterCard,
            Diners Club, Elo, Hipercard, American Express, Discover e Aura),
            cartões de débito (Visa e MasterCard), boleto bancário, Ame Digital,
            PicPay e Pix.
          </p>
          <p className="mb-6">
            *Frete Grátis por região concedido na modalidade normal para
            produtos selecionados, vendidos e entregues pela Connect Parts e
            devidamente identificados com selo de frete grátis. Frete Grátis
            para as regiões Sul e Sudeste e para as capitais dos estados das
            regiões Centro-Oeste, Norte e Nordeste para produtos com valor acima
            de R$ 79 devidamente identificados. Para demais localidades das
            regiões Centro-Oeste, Norte e Nordeste, Frete Grátis será concedido
            para produtos com valor acima de R$ 499,90 devidamente
            identificados.
          </p>
          <p className="mb-5">
            Cupom APP10 válido para primeira compra realizada através do
            aplicativo da Connect Parts. Não cumulativo com outros cupons ou
            promoções. Em caso de itens já em promoção, será mantido o maior
            desconto. Válido para produtos vendidos e entregues pela Connect
            Parts. Aplicável sobre o valor dos produtos elegíveis no carrinho,
            não aplicável sobre o valor do frete.
          </p>
          <p className="mb-5">
            Nossos preços podem variar de acordo com a localidade de entrega.
            Realize o cálculo de frete para o CEP de entrega para garantir que
            está visualizando o preço correto dos produtos para entrega na sua
            região.
          </p>
          <p className="mb-5">
            Em caso de divergência de preços entre diferentes páginas do site,
            prevalecerá sempre o preço do produto no carrinho de compras.
          </p>
          <img
            loading="lazy"
            src="https://connectparts.vteximg.com.br/arquivos/powered-by-vtex.png?v=636981864913600000"
            alt="Vtex"
            title="Logo Vtex"
          />
        </section>
      </div>
    </footer>
  );
}
