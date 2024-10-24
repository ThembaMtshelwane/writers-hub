import HeroSlider from "../components/HeroSlider";
import MainCardGrid from "../components/MainCardGrid";
import MainSideBar from "../components/MainSideBar";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <main className="grid grid-cols-[60%_30%] gap-[5%]">
        <MainCardGrid /> <MainSideBar />
      </main>
    </>
  );
};

export default LandingPage;
