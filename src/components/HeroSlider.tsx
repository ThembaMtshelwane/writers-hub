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
        const { data } = await axios.get("/api/users?_limit=2");
        setUser(data);
      } catch (error) {
        console.error("Error fetching Data: ", error);
      }
    };
    fetchUsers();
  }, []);

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
      className="text-center h-[25rem]"
    >
      {users.map((user) => {
        return user.content.map((cont, index) => (
          <SwiperSlide key={index}>
            <img
              src={cont.image}
              alt={cont.title}
              className="size-full object-cover"
            />
          </SwiperSlide>
        ));
      })}
    </Swiper>
  );
};

export default HeroSlider;
