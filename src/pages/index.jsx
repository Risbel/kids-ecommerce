import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import CarouselHero from "@/components/CarouselHero";
import NavbarWithPictures from "@/components/NavbarWithPictures";
import BaseLayout from "@/layouts/BaseLayout";
import Image from "next/image";

const slides = ["/boys-1-580x870.jpg", "/for-home-12-1-580x870.jpg", "/boys-5-580x870.jpg", "/boys-8-580x870(1).jpg"];

const Home = () => {
  return (
    <BaseLayout title="Home shop">
      <div className="text-center md:px-32 lg:px-52 py-14">
        <div className="flex pb-12 gap-8">
          <div className="relative px-4 md:px-0 flex-grow">
            <div className="absolute bottom-4 left-8 md:bottom-8 md:left-8">
              <div className="relative flex flex-col gap-3 items-start">
                <h2 className="text-2xl md:text-5xl font-semibold text-white">JOMPSUITS</h2>
                <p className="text-left text-white relative -translate-y-2 text-sm md:text-lg">
                  Comfottable clothes for your lettle babies
                </p>
                <Button variant="tertiary">DISCOVER</Button>
              </div>
            </div>

            <Image
              className="h-full w-full object-cover"
              src="/slider-1.jpg"
              height={500}
              width={700}
              alt="Baby with jumpsuits"
            />
          </div>
          <div className="hidden md:block">
            <CarouselHero autoSlide autoSlideInterval={7000} slides={slides} />
          </div>
        </div>

        <NavbarWithPictures />
        <h2 className="text-xl text-cyan-700 font-bold text-center pt-16">INSTAGRAM @KIDSRUS</h2>
        <Carousel />
      </div>
    </BaseLayout>
  );
};

export default Home;
