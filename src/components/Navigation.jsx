import { NavLink } from "react-router-dom";

function Navigation({onChange}){
    const navClasses='block md:inline-block mx-0 md:mx-4 mt-1 cursor-pointer';
    return(
        <div className="flex text-lg uppercase w-full items-end">
            <ul className="text-right w-full after:h-1 after:w-full after:bg-rose-950 after:inline-block">
                <li className={navClasses}>
                    <NavLink className={({isActive}) => isActive ? 'font-bold' : undefined} to='/resume'>
                        Resume
                    </NavLink>
                </li>
                <li className={navClasses}>
                    <NavLink className={({isActive}) => isActive ? 'font-bold' : undefined} to='/portfolio'>
                        Portfolio
                    </NavLink>
                </li>
                <li className={navClasses}>
                    <NavLink className={({isActive}) => isActive ? 'font-bold' : undefined} to='/contact'>
                        Contact
                    </NavLink>
                </li>    
            </ul>
        </div>
    );
}
export default Navigation;