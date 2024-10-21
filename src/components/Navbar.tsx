const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-white bg-[#528362]">
      <img
        src="Writer_s-Hub-Logo-1.svg"
        alt="Writer's Hub Logo"
        className="h-16  hover:scale-110"
      />

      <ul className="hidden sm:flex justify-between w-[40%] sm:max-w-[300px] md:mr-20">
        <li className=" p-2 w-[150px] text-center  hover:scale-110">
          <a href="" className="hover:underline hover:decoration-white">
            Feed
          </a>
        </li>
        <li className="p-2 w-[150px] text-center hover:scale-110">
          <a href="" className="hover:underline hover:decoration-white">
            Post
          </a>
        </li>
        <li className="p-2 w-[150px] text-center hover:scale-110">
          <a href="" className="hover:underline hover:decoration-white">
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
