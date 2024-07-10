import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id)

    const history = useHistory('')

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method:'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="mx-4 mt-4 lg:mx-auto">
            {isPending && <h2>Loading...</h2>}
            { error && <div>{ error }</div>}
            { blog && (
                <div>
                    <div className="">
                        <h2 className="text-xl font-bold">{ blog.title }</h2>
                        <p>Written by: { blog.author }</p>
                    </div>
                    <p className='mt-4'>{ blog.body }</p>
                    <button className='my-4 py-1 bg-red-400 rounded-md w-20' onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;