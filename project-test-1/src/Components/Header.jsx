import { Link } from "react-router-dom"

const Header = () => {
      return (
        <nav className='sticky top-0 w-full border-gray-200 px-5 py-2.5 bg-amber-600 text-white flex justify-between font-bold'>
            <Link to="/">MY ACTIVITY</Link>
            <Link to="/favorites">TO DO LIST</Link>
        </nav>
      )
  }
  
  export default Header