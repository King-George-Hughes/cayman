import { Footer, NavBar } from ".";
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
      <Footer />
    </>
  );
};

export default Layout;
