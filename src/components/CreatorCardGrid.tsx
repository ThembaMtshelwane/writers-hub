import CreatorCard from "./CreatorCard";

const CreatorCardGrid = () => {
  return (
    <section
      className="
        grid 
        grid-cols-[repeat(auto-fit,_minmax(250px,300px))] 
        gap-4 
        justify-center
    "
    >
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
      />
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
      />
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
      />
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
      />
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
      />
    </section>
  );
};

export default CreatorCardGrid;
