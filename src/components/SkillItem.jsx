function SkillItem({title,items}){
    return(
        <>
        <p className="font-bold text-xl pt-8">{title}</p>
        <ul>
            {items.map(item=>(
                <li key={Math.random()}>
                    {item}
                </li>
            ))}
        </ul>
        </>
    );
}
export default SkillItem;