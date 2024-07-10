import { Link } from 'react-router-dom'

const BlogList = (props) => {
    const blogs = props.blogs

    return (  
        <div>
            {blogs.map((blog) => (
                <div className='mb-4 bg-white rounded-md p-2 lg:hover:drop-shadow-lg' key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h1 className='font-bold text-lg'>{ blog.title }</h1>
                        <p>Writer: { blog.author }</p>
                    </Link> 
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;