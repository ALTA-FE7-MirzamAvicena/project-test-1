const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    const handleChangeTheme = (mode) => {
      setTheme(mode);
    }
      return (
        <nav className='sticky top-0 w-full border-gray-200 px-5 py-2.5 bg-red-900 text-white flex justify-between font-bold'>
            <Link to="/">MY MOVIES</Link>
            {theme === "dark" ? (
              <IoSunny color='#fff' size={30}
              onClick={() => handleChangeTheme ("light")}/>
            ) : (
            <IoMoon color='#fff' size={30}
            onClick={() => handleChangeTheme ("dark")}/>
            )}
            {/* <Link to="/test">TEST PAGE</Link> */}
            <Link to="/favorites">FAVORITE</Link>
        </nav>
      )
  }
  
  export default Header