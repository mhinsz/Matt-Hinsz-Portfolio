function ResumeItem({company,title,location,dates,details}){
    return(
        <>
            <div className="flex justify-between flex-col md:flex-row">
                <p className="font-bold text-xl">{company}</p>
                <p className="whitespace-nowrap">{location}</p>
            </div>
            <div className="flex justify-between flex-col md:flex-row">
                <p>{title}</p>
                <p>{dates}</p>
            </div>
            <ul className='pt-2'>
                {details.map(detail=>(
                    <li key={Math.random()}>
                            {detail}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ResumeItem;