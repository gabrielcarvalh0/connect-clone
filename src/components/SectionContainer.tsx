import { ReactNode } from "react";


type Props = {
  className?: string;
  children: ReactNode;
};

export const SectionContainer: React.FC<Props> = (props) => (
  <section
    className={`${props.className} mt-6  max-w-[1290px] mx-auto w-full  px-6`}
  >
    {props.children}
  </section>
);

export default SectionContainer;
