import avatar from "../../assets/Images/Robert-Frost-Portrait-Square.webp";
import { GrHide } from "react-icons/gr";
import { MdEdit } from "react-icons/md";

const PersonalInfoList = () => {
  return (
    <section className="grid place-items-center py-10 ">
      <div className="border border-black grid place-items-center w-[440px] ">
        <div className="pl-80 pt-4">
          <MdEdit className="text-gray-500 " />
        </div>
        <div className="py-5">
          <img src={avatar} className="rounded-full w-28" />
          <h1 className="text-xl">BANK HERBERT</h1>
          <p className="text-center">@bank_herbert</p>
        </div>
        <div className="space-y-5 py-10 w-80 ">
          <div className="grid grid-cols-2 border border-gray-600 py-2 ">
            <h1 className="pl-3">Username:</h1>
            <input type="text" placeholder="bank_herbert" className="pl-14 " />
          </div>
          <div className="grid grid-cols-2 border border-gray-600 py-2 ">
            <h1 className="pl-3">Email:</h1>
            <input type="text" placeholder="bherbert@gmail.com" />
          </div>
          <div className="flex border border-gray-600 py-2 pr-2 ">
            <div className="">
              <h1 className="pl-3">Password:</h1>
            </div>

            <div className="flex ml-auto  space-x-2 ">
              <input type="password" placeholder="******" className="w-10" />
              <div>
                <GrHide />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 border border-gray-600 py-2">
            <h1 className="pl-3">DOB:</h1>
            <input type="text" placeholder="1977/02/29" className="pl-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfoList;
