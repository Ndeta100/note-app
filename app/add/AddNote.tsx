'use client'
import React from "react";
import {Button} from "@nextui-org/button";
import {Input, Textarea} from "@nextui-org/react";
export const AddNote = () => {
    const API_BASE_URL="http://localhost:8080/note/add"
 const noteForm=async (e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     const formData = new FormData(e.currentTarget);

     const body={
         title:formData.get('title'),
         description:formData.get('description'),
         level:formData.get('level')
     }
     try {
         const  res= await fetch(API_BASE_URL,{
             method:"POST",
             body:JSON.stringify(body),
             headers:{
                 'Content-Type':'application/json'
             }
         })
         if (!res.ok) {
             throw new Error(`HTTP error! Status: ${res.status}`);
         }
         const responseData = await res.json();
         console.log(responseData); // Log the response for debugging
     }catch (error){
         console.log("Error",error)
     }

 }

    return (
        <div className='dark text-foreground bg-background h-screen flex items-center justify-center'>
            <form onSubmit={noteForm}>
                <Input type='text' name='title' label='Title'className='mb-2'/>
                <Input type='text' name='level' label='Level' className='mb-2'/>
                <Textarea
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    className="max-w-xs  "
                    name='description'
                />
                <Button type='submit' className='mt-1'>Add</Button>
            </form>
        </div>
    );
};












































{/*<form onSubmit={noteForm}>*/}
{/*    <div className="mb-6">*/}
{/*        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>*/}
{/*        <input type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>*/}
{/*    </div>*/}
{/*    <div className="mb-6">*/}
{/*        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>*/}
{/*        <input type="text" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />*/}
{/*    </div>*/}
{/*    <div className="mb-6">*/}
{/*        <label htmlFor="level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>*/}
{/*        <input type="text" name="level" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />*/}
{/*    </div>*/}
{/*    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>*/}
{/*</form>*/}