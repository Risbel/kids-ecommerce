import Carousel from "@/components/Carousel";
import NavbarWithPictures from "@/components/NavbarWithPictures";
import BaseLayout from "@/layouts/BaseLayout";

const Home = () => {
  return (
    <BaseLayout title="Home shop">
      <div className="text-center md:px-28">
        <h1>My e-commerce</h1>
        <NavbarWithPictures />
        <Carousel />
      </div>
    </BaseLayout>
  );
};

export default Home;
