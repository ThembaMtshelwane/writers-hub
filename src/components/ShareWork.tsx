import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Writing from "./Writing";


const ShareWork = () => {

    const [image, setImage] = useState<string | null>(null); ;
    const [Title, setTitle] = useState('');
    const [Genres, setGenres] = useState('');
    const [Description, setDescription] = useState('');
    const [base64, setBase64] = useState<string>('');


    const handleNext = () =>{

    }
    
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files?.[0]; // Safely access the first file
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const result = reader.result as string; // Assert reader result as string
            setImage(result); // Set the image preview
            setBase64(result); // Set Base64 string
          };
          reader.readAsDataURL(file); // Read file as Base64
        }
      };

  return (
    <section className="py-3 px-10">
        <div className=" bg-white rounded-3xl">
            <h1 className="pl-8 pt-10">SHARE YOUR WORK</h1>
            <form action="" className="flex py-10 space-x-8 px-8">
            <div className="flex flex-col items-center">
      <label htmlFor="file-upload">
        <img 
          src={image || 'https://via.placeholder.com/300x200'} // Placeholder if no image is uploaded
          alt="Upload Placeholder"
          className="w-80 h-[500px] object-cover text-center bg-gray-400 cursor-pointer"
        />
      </label>
      <input 
        id="file-upload" 
        type="file" 
        accept="image/*" 
        onChange={handleImageUpload} 
        className="hidden" // Hide the file input itself
      />
      
    </div>
                <div className="border border-black w-[400px] px-10 pt-5">
                <div className='mb-4'>
<label className='block text-gray-700 font-bold mb-2'>
Title
</label>
<input
type='text'
id='country'
name='country'
className='border rounded-2xl w-[300px] py-2 px-3 mb-2 kobus:w-[700px] border-black'
placeholder=''
required
value={Title}
onChange={(e) => setTitle(e.target.value)}
/>
</div>
<div className='mb-4'>
<label className='block text-gray-700 font-bold mb-2'>
Genres
</label>
<input
type='text'
id='country'
name='country'
className='border rounded-2xl  w-[300px] py-2 px-3 mb-2 kobus:w-[700px] border-black'
placeholder=''
required
value={Genres}
onChange={(e) => setGenres(e.target.value)}
/>
</div>
                <div>
                <label
htmlFor='description'
className='block text-gray-700 font-bold mb-2'
>
Description
</label>
<textarea
id='description'
name='description'
className='border rounded-2xl  w-[300px] h-52 py-2 px-3 kobus:w-[700px] border-black'

placeholder=''
value={Description}
onChange={(e) => setDescription(e.target.value)}
></textarea>

</div>
                </div>

      



            </form>
            <div className="pl-72 pb-3">
              <Link to={'preview'}>
              <Button name="Next" buttonFunction={handleNext} />
              </Link>
           

            </div>
        </div>
    </section>
  )
}

export default ShareWork