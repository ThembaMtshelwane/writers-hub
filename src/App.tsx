import Button from "./components/Button";
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
    </>
  );
}
