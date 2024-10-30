import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { User } from "../types";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  const [users, setUser] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("/api/users");
        setUser(data);
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };
    fetchUsers();
  }, []);

  const content = users.flatMap((user) => user.content);

  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="text-center h-[25rem] "
    >
      {content.slice(0, 4).map((cont, index) => (
        <SwiperSlide key={index}>
          {/* <div className="bg-gradient-to-r from-black/60 to-white/5 black/50 flex size-full items-center justify-center absolute"></div> */}
          <img
            src={cont.image}
            alt={cont.title}
            className="size-full object-cover -z-50"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
