type Props = {
    image : string
    title : string
    AuthorName: string;
    description: string;
  };



const AuthorWorks = ({image,title, AuthorName, description }: Props) => {
  return (
    <section className="pl-10 py-10 flex  px-10">
        <div>
        <img src={image} className="h-36  " />
        </div>
   <div className="space-y-4 bg-white w-80">
    <div className="px-4 space-y-4 py-2">
    <h2 className="font-body  ">{title}</h2>
    <h2 >{AuthorName}</h2>
    <p className="font-body w-[200px]">{description}</p>
    </div>
   
   </div>
    
  </section>
  )
}

export default AuthorWorks