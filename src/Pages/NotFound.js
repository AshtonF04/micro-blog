import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div>
            <h2>{"Sorry..."}</h2>
            <p>{'This page could not be found :('}</p>
            <Link to='/'>Return Home</Link>
        </div>
     );
}
 
export default NotFound; 