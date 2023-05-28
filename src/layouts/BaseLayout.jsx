import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-rows-2 content-between">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;
