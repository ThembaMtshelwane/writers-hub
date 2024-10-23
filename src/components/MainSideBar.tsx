import AuthorWorks from "./AuthorWorks"
import author from '../assets/Images/author.png'



const MainSideBar = () => {
  return (
    <section className="flex justify-center py-10">
      <div className="border border-black size-600px] bg-primary rounded-lg">
        <h1 className="text-center py-5 text-3xl font-heading">Author/Works</h1>
        
        {/* <div >
        <AuthorWorks 
      image={author}
      title="The joy ride"
      AuthorName="Lwandile majola"
      description="Lorem ipsum dolor sit amet quas optio cum non alias.."
      />
        </div> */}
        <div >
        <AuthorWorks 
      image={author}
      title="The joy ride"
      AuthorName="Lwandile majola"
      description="Lorem ipsum dolor sit amet quas optio cum non alias.."
      />
        </div>
        <div >
        <AuthorWorks 
      image={author}
      title="The joy ride"
      AuthorName="Lwandile majola"
      description="Lorem ipsum dolor sit amet quas optio cum non alias.."
      />
        </div>
        <div >
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
       
      
        
      
    </section>
  )
}

export default MainSideBar