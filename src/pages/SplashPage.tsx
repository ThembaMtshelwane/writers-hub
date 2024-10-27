import Logo from "../assets/Images/Writer_s-Hub-Logo-1 copy.svg";

const SplashPage = () => {
  return (
    <div className="min-h-screen bg-secondary flex flex-col justify-center items-center text-white pb-14">
      <img
        src={Logo}
        alt="Writer's Hub Logo"
        className="size-[10rem] md:size-[20rem] lg:size-[25rem] ml-7 md:ml-14 lg:ml-19"
      />
      <h1 className="font-italiana text-4xl md:text-6xl lg:text-8xl">
        Writer's Hub
      </h1>
    </div>
  );
};

export default SplashPage;
