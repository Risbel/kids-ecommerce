import Carousel from "@/components/Carousel";
import NavbarWithPictures from "@/components/NavbarWithPictures";
import BaseLayout from "@/layouts/BaseLayout";

const Home = () => {
  return (
    <BaseLayout>
      <div className="text-center">
        <h1>My e-commerce</h1>
        <NavbarWithPictures />
        <Carousel />
      </div>
    </BaseLayout>
  );
};

export default Home;
