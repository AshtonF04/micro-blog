const Navbar = () => {
    
    return (  
        <nav className="flex justify-between mx-4 text-xl border-b-2 border-orange-300 py-4 lg:mx-auto">
            <h1 className="font-bold text-3xl text-orange-300">Micro Blog</h1>
            <div className="flex gap-8">
                <a href='/' className='hover:underline py-1'>Home</a>
                <a href='/create' className='rounded-lg bg-orange-300 px-4 pt-1'>Create</a>
            </div>
        </nav>
    );
}
 
export default Navbar;