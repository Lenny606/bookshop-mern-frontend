import {Link} from "react-router-dom";

const NavLink = ({item, setIsDropDown}) => {
    return (
        <li  onClick={() => setIsDropDown(false)}>
            <Link to={item.path}
                  className={'block px-4 py-2 text-sm hover:bg-primary'}>
                {item.name}
            </Link>
        </li>
    )
}
export default NavLink;