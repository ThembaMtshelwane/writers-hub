import Logo from "../../public/Writer_s-Hub-Logo-1.svg";

const SplashPage = () => {
  return (
    <div className="h-screen bg-secondary flex flex-col justify-center items-center text-white">
      <img src={Logo} alt="Writer's Hub Logo" className="size-[30rem] ml-20" />
      <h1 className="font-italiana text-9xl">Writer's Hub</h1>
    </div>
  );
};

export default SplashPage;
