import AuthorWorks from "./AuthorWorks";
import author from "../assets/Images/author.png";

const MainSideBar = () => {
  return (
    <section className="flex justify-center  h-fit">
      <div className="border border-black h-fit p-4  bg-primary rounded-lg">
        <h1 className="text-center py-5 text-3xl font-heading">Author/Works</h1>
        <div className="flex flex-col gap-4">
          <div>
            <AuthorWorks
              image={author}
              title="The joy ride"
              AuthorName="Lwandile majola"
              description="Lorem ipsum dolor sit amet quas optio cum non alias.."
            />
          </div>
          <div>
            <AuthorWorks
              image={author}
              title="The joy ride"
              AuthorName="Lwandile majola"
              description="Lorem ipsum dolor sit amet quas optio cum non alias.."
            />
          </div>
          <div>
            <AuthorWorks
              image={author}
              title="The joy ride"
              AuthorName="Lwandile majola"
              description="Lorem ipsum dolor sit amet quas optio cum non alias.."
            />
          </div>
          <div>
            <AuthorWorks
              image={author}
              title="The joy ride"
              AuthorName="Lwandile majola"
              description="Lorem ipsum dolor sit amet quas optio cum non alias.."
            />
          </div>
          <div>
            <AuthorWorks
              image={author}
              title="The joy ride"
              AuthorName="Lwandile majola"
              description="Lorem ipsum dolor sit amet quas optio cum non alias.."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSideBar;
