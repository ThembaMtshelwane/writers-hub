import Logo from "../assets/Images/Writer_s-Hub-Logo-1 copy.svg";

const SplashPage = () => {
  return (
    <div className="h-screen bg-secondary flex flex-col justify-center items-center text-white">
      <img
        src={Logo}
        alt="Writer's Hub Logo"
        className="size-[10rem] md:size-[20rem] lg:size-[30rem] ml-7 md:ml-14 lg:ml-20"
      />
      <h1 className="font-italiana text-4xl md:text-7xl lg:text-9xl">Writer's Hub</h1>
    </div>
  );
};

export default SplashPage;
