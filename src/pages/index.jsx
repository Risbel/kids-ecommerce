import Carousel from "@/components/Carousel";
import BaseLayout from "@/layouts/BaseLayout";

const Home = () => {
  return (
    <BaseLayout>
      <div className="text-center">
        <h1>My e-commerce</h1>
        <Carousel />
      </div>
    </BaseLayout>
  );
};

export default Home;
