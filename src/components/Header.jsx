import Logo from "./Logo";
import Navigation from "./Navigation";

function Header({onChange}){
    return(
        <>
            <header className="flex justify-between items-end">
                <Logo onChange={onChange} />
                <Navigation onChange={onChange} />
            </header>
            
        </>
    );
}
export default Header;