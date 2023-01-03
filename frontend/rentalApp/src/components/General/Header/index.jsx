import React,{useState} from 'react'
import { VscHistory } from 'react-icons/vsc'
import { MdFavorite } from 'react-icons/md'
import { GiCharacter } from 'react-icons/gi'
import {BiLogOut,BiAddToQueue} from 'react-icons/bi'
import {AiFillCar} from 'react-icons/ai'
import logo from "../../../assets/general/logo.png"
import { useContext } from 'react'
import { UserContext } from '../../../contexts/User'
import { logout } from '../../../utils'
import { Link } from "react-router-dom";


function Header(props) {
  const  [logged,setLogged] = useState(true);
  const [user,setUser] = useContext(UserContext);
  
  //Change Header Background When Scrolling
  const[color,setColor]=useState(false);
  const changeColor = ()=>{
    console.log("Scrolllll");
    if(window.scrollY > 90){
      setColor(true);

    }
    else{
      setColor(false);
    }
  }

  const handleLogout = () => {
    logout(setUser);
  }

  window.addEventListener('scroll',changeColor)

  return (
  <header className={color ? 'w-full absolute z-20 _header _headerbg':'w-full absolute z-20 _header'}>
      <nav className="container mx-auto flex items-center justify-between py-1  ">
        <div id="logo">
         <Link to="/">
            <img src={logo} alt="logo" height="150px" width="100px" />
          </Link>
        </div>
        {
          !user.logged && <ul className={"flex items-center gap-10  text-lg font-medium  cursor-pointer "+ (color ? "text-white" : "text-mainBlack")}>
          
          <Link to="/offre">
            <li className={"hover:scale-110 transition-all " + ( (color || props.home) ? " text-white " : "text-mainBlack")}>
              Offers
            </li>
            </Link>

          <Link to="/auth">
            <li className=" w-[100px] p-2 text-center rounded-[4px] shadow-sm bg-mainBlue hover:scale-105 transition-all text-white">
                Login
            </li>
          </Link>
        </ul>
        }

        {
          user.logged &&  !user.user.user.isAdmin &&
          <ul className={ "flex items-center gap-10  text-lg font-medium  cursor-pointer " + ( (color || props.home) ? "text-white" : "text-mainBlack")}>
          
          <a>
            <li class="li_logo" onClick={handleLogout}>
                <BiLogOut />
            </li>
          </a>
          
          <Link to={"/offreHistoric"}>
            <li class="li_logo"> 
            <VscHistory />
            </li>
          </Link>

          <Link to={"/offreFavorites"}>
            <li class="li_logo">
            <MdFavorite />
            </li>
          </Link>

          <Link to={"/createoffrepage"}>
            <li class="li_logo">
            <BiAddToQueue />
            </li>
          </Link>
          

          <Link to={"/offre"}>
            <li class="li_logo">
            <AiFillCar />
            </li>
          </Link>

          <Link to={"/ModifierProfilePage"}>
            <li class="li_logo">
                <GiCharacter/>
            </li>
          </Link>

          
        </ul>
        }

{
          user.logged &&  user.user.user.isAdmin &&
          <ul className={ "flex items-center gap-10  text-lg font-medium  cursor-pointer " + ( (color || props.home) ? "text-white" : "text-mainBlack")}>
          
          <a>
            <li class="li_logo" onClick={handleLogout}>
                <BiLogOut />
            </li>
          </a>
          
          
          

          <Link to={"/offreAdmin"}>
            <li class="li_logo">
            <AiFillCar />
            </li>
          </Link>

          <Link to={"/profilAdmin"}>
            <li class="li_logo">
                <GiCharacter/>
            </li>
          </Link>

          
        </ul>
        }
        
      </nav>
    </header>
  );
}

export default Header