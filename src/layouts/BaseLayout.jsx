import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const BaseLayout = ({ children }) => {
  return (
    <div className="flex flex-col  h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
