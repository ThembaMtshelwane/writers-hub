import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const Writing: React.FC = () => {
    const [value, setValue] = useState('');


    useEffect(() => {
        const savedDraft = localStorage.getItem('draft');
        if (savedDraft) {
            setValue(savedDraft);
        }
    }, []);

    const modules = {
        toolbar: [
            [{ 'font': [] }],
            [{ 'align': [] }],
            [{ 'header': [1, 2, false] }], 
            ['bold', 'italic', 'underline'], 
            ['link', 'image'], 
            ['clean'],
            [{ 'direction': 'rtl' }],
        ]
    };


    const saveDraft = () => {
        localStorage.setItem('draft', value);
    };

    useEffect(() => {
      
        const interval = setInterval(() => {
            saveDraft();
        }, 1000); 

       
        return () => clearInterval(interval);
    }, [value]); 

    return (
        <ReactQuill
            className='h-96 w-full custom-quill'
            modules={modules}
            theme="snow"
            value={value}
            onChange={setValue}
        />
    );
}

export default Writing;
