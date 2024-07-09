const BlogList = (props) => {
    const blogs = props.blogs

    return (  
        <div>
            {blogs.map((blog) => (
                    <div className='mb-4 bg-white rounded-md p-2 lg:hover:drop-shadow-lg' key={blog.id}>
                        <h1 className='font-bold text-lg'>{ blog.title }</h1>
                        <p>Writer: { blog.author }</p>
                    </div>
            ))}
        </div>
    );
}
 
export default BlogList;