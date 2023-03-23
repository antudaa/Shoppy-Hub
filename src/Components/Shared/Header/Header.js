import React, { useContext } from 'react';
import Theme from '../../ThemeChanging/Theme';
import './Header.css';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContextProvider';
import { toast } from 'react-hot-toast';


const Header = () => {

    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success(`Log Out Successful.`);
            })
            .catch((err) => {
                console.log(err.message);
                toast.error(`${err.message}`);
            })
    }

    console.log(user);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar">
                <div className="dropdown">
                    {/* Toggle Navbar Icon for Mobile Device */}
                    <label tabIndex={0} className="navbar-end cursor-pointer lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="md:ml-4">
                            <Link className="mx-auto py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="md:ml-4">
                            <Link className="mx-auto py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/signUp">
                                Sign Up
                            </Link>
                        </li>
                        {
                            user?.uid ?
                                <>
                                    <li className="md:ml-4">
                                        <Link onClick={handleLogOut} className="mx-auto py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/login">
                                            Log Out
                                        </Link>
                                    </li>
                                </> :
                                <li className="md:ml-4">
                                    <Link className="mx-auto py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/login">
                                        Login
                                    </Link>
                                </li>
                        }

                        <li className="md:ml-4">
                            <Link className="mx-auto py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="##">
                                <BsFillCartCheckFill />
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Logo For Website  */}
                <Link to="/" className="normal-case text-xl font-bold ml-6">Shoppy Hub</Link>
            </div>

            {/* Search Button  */}

            <div className="relative navbar-center w-1/3 lg:w-1/3 md:mb-0 md:w-1/4 mx-auto">
                <input type="search" className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none" placeholder="Search" />

                <svg className="h-6 w-6 mt-3 text-gray-300 ml-2 mt-Link stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            {/* Toggle Dark White Theme Icon For Mobile Device  */}
            <ul className='cursor-pointer ml-4 lg:hidden'>
                <li className="md:ml-4">
                    <a className="mx-auto py-2 text-grey-darkest md:border-none md:p-0" href="##">
                        {/* Toggle theme only Dark & White   */}
                        <Theme />
                    </a>
                </li>
            </ul>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="md:ml-4">
                        <Link className="hover:underline bg-transparent  hover:bg-transparent py-1 text-grey-darkest md:border-none md:p-0" to="/">
                            Home
                        </Link>
                    </li>

                    <li className="md:ml-4">
                        <Link className="hover:underline bg-transparent hover:bg-transparent py-1 text-grey-darkest md:border-none md:p-0" to="signUp">
                            Sign Up
                        </Link>
                    </li>
                    {
                        user?.uid ?
                            <>
                                <li className="md:ml-4">
                                    <Link onClick={handleLogOut} className="hover:underline bg-transparent hover:bg-transparent py-1 text-grey-darkest md:border-none md:p-0" to="/login">
                                        Log Out
                                    </Link>
                                </li>
                            </> :
                            <li className="md:ml-4">
                                <Link className="hover:underline bg-transparent hover:bg-transparent py-1 text-grey-darkest md:border-none md:p-0" to="/login">
                                    Login
                                </Link>
                            </li>
                    }
                    <li className="md:ml-4">
                        <Link className="hover:underline bg-transparent hover:bg-transparent py-1 text-grey-darkest md:border-none md:p-0" to="##">
                            <BsFillCartCheckFill />
                        </Link>
                    </li>

                    <li className="md:ml-4">
                        <a className="hover:underline bg-transparent hover:bg-transparent py-1 text-grey-darkest md:border-none md:p-0" href="##">
                            {/* Toggle theme only Dark & White   */}
                            <Theme />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;