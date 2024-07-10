import { useState } from 'react'

const Create = () => {
    const [ title, setTitle ] = useState('')
    const [ body, setBody] = useState('')
    const [author, setAuthor] = useState('Mario')

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        
        fetch("http://localhost:8000/blogs")
    }

    return ( 
        <div className="mx-4 mt-4 lg:mx-auto">
            <h2 className="text-xl font-bold">Create</h2>
            <form className='flex flex-col gap-4' onSubmit={(e) => handleSubmit(e)}>
                <div className='flex flex-col'>
                    <label>Title:</label>
                    <input className='border-2 border-black rounded-md' type='text' required value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className='flex flex-col'>
                    <label>Body:</label>
                    <textarea className='border-2 border-black rounded-md' required value={body} onChange={(e) => setBody(e.target.value)}/>
                </div>
                <div className='flex flex-col'>
                    <label>Author:</label>
                    <select className='border-2 border-black rounded-md' value={author} onChange={(e) => setAuthor(e.target.value)} required>
                        <option value='Mario'>Mario</option>
                        <option value='Yoshi'>Yoshi</option>
                    </select>
                </div>
                <button className='rounded-md bg-orange-300 w-20 text-lg py-1'>Submit</button>
            </form>
        </div>
    );
}
 
export default Create;