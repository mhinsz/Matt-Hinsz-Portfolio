function Navigation({onChange}){
    const navClasses='block md:inline-block mx-0 md:mx-4 mt-1 cursor-pointer';
    return(
        <div className="flex text-lg uppercase w-full items-end">
            <ul className="text-right w-full after:h-1 after:w-full after:bg-rose-950 after:inline-block">
                <li className={navClasses} onClick={()=>onChange('resume')}>Resume</li>
                <li className={navClasses} onClick={()=>onChange('portfolio')}>Portfolio</li>
                <li className={navClasses}><a href="mailto:mdhh123@gmail.com" target="_blank" className="fa fa-envelope text-rose-950 text-xl"></a></li>
            </ul>
        </div>
    );
}
export default Navigation;