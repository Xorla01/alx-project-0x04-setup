import { LayoutProps } from "@/interface"; 
import Footer from "./Footer";
import Header from "@/components/layouts/Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;