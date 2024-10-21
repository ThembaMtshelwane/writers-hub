import Button from "./components/Button";
import CreatorCard from "./components/CreatorCard";
import CreatorCardGrid from "./components/CreatorCardGrid";
import FilterButton from "./components/FilterButton";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <section className="border-2 mt-10  p-4">
        <section className="space-x-10 space-y-4">
          <Button
            name={"Likes"}
            buttonFunction={() => console.log("Likes Handler")}
          />
          <Button
            name={"Comments"}
            buttonFunction={() => console.log("Comments Handler")}
          />
          <Button
            name={"Review"}
            buttonFunction={() => console.log("Review Handler")}
          />
          <Button
            name={"Sign Up"}
            buttonFunction={() => console.log("Sign Up Handler")}
          />
          <Button
            name={"Login"}
            buttonFunction={() => console.log("Login Handler")}
          />
          <Button
            name={"Submit"}
            buttonFunction={() => console.log("Submit Handler")}
          />
          <Button
            name={"Next"}
            buttonFunction={() => console.log("Next Handler")}
          />
          <Button
            name={"Preview"}
            buttonFunction={() => console.log("Preview Handler")}
          />
        </section>
        <section className="mt-5 space-x-4 space-y-10">
          <FilterButton name={"Horror"} />
          <FilterButton name={"Comedy"} />
          <FilterButton name={"Romance"} />
          <FilterButton name={"Thriller"} />
          <FilterButton name={"Sci-Fi"} />
          <FilterButton name={"Fantasy"} />
        </section>
      </section>

      <section className="mt-10 p-4">
        <CreatorCard
          name={"Dune"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi tempora iusto iure ducimus quas optio cum non alias nemo blanditiis? Ea officiis nobis consequatur rem minima at. Aperiam, voluptatibus quae quos sapiente suscipit aliquid? Possimus quas cupiditate laborum, eum quisquam, ipsam sit inventore perspiciatis voluptas explicabo tempore, reiciendis voluptates. Assumenda?nventore perspiciatis voluptas explicabo tempore, reiciendis voluptates. Assumenda?"
          }
        />
      </section>

      <section className="mb-24 border-2 border-blue-600 w-[70%] ml-auto">
        <CreatorCardGrid />
      </section>
    </>
  );
}
