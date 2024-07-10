import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id)

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
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;