import Carousel from "@/components/Carousel";
import BaseLayout from "@/layouts/BaseLayout";

const Home = () => {
  return (
    <BaseLayout>
      <main className="text-center">
        <h1>My e-commerce</h1>
        <Carousel />
      </main>
    </BaseLayout>
  );
};

export default Home;
