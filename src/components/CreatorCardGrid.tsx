import CreatorCard from "./CreatorCard";
type Props = {
  name: string;
  description: string;
  isReviewed: boolean;
};

const CreatorCardGrid = ()  => {
  return (
    <section className="contentCardGrid">
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
        isReviewed ={false}
      />
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
        isReviewed ={false}
      />
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
        isReviewed ={false}
      />
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
        isReviewed ={false}
      />
      <CreatorCard
        name="Dune"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates."
        isReviewed ={false}
      />
    </section>
  );
};

export default CreatorCardGrid;
