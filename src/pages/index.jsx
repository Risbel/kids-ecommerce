import Carousel from "@/components/Carousel";
import CarouselHero from "@/components/CarouselHero";
import NavbarWithPictures from "@/components/NavbarWithPictures";
import BaseLayout from "@/layouts/BaseLayout";

const slides = ["/boys-1-580x870.jpg", "/for-home-12-1-580x870.jpg", "/boys-5-580x870.jpg", "/boys-8-580x870(1).jpg"];

const Home = () => {
  return (
    <BaseLayout title="Home shop">
      <div className="text-center md:px-28 py-14">
        <div className="flex justify-end pl-10 pb-14">
          <CarouselHero autoSlide autoSlideInterval={7000} slides={slides} size="xs" />
        </div>

        <NavbarWithPictures />
        <Carousel />
      </div>
    </BaseLayout>
  );
};

export default Home;
