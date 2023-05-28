import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const BaseLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mb-10 md:px-28">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default BaseLayout;
