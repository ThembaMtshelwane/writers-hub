import HeroSlider from "../components/HeroSlider";
import MainCardGrid from "../components/MainCardGrid";
import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <main className="grid grid-cols-[60%_30%] mt-10 gap-[5%] justify-self-center w-[95%] ">
        <section className=" w-full">
          <MainCardGrid />
        </section>
        <MainSideBar />
      </main>
    </>
  );
};

export default LandingPage;
