import { Footer, NavBar, Subscribe } from ".";
import { ReactNode } from "react";
import { ScrollToTop } from "../routing/routes";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      {children}
      <Subscribe />
      <Footer />
    </>
  );
};

export default Layout;
