import { motion } from "framer-motion";

function PortfolioItem({id,image,title,url,tags}){
    return(
        <motion.div 
            variants={{ hidden:{opacity:0,y:50},visible:{opacity:1,y:0} }}
        >
            <div className="flex w-full mb-1">
                <p className="text-rose-950 w-auto whitespace-nowrap text-2xl">{title}</p>
                {/* <div className="w-full border-b-4 border-rose-950 mb-1 ml-1"></div> */}
            </div>
            <a href={url} target="_blank">
            <motion.div 
                whileHover={{scale:1.035}}
                transition={{type:'tween',ease:'easeInOut'}}
                className="rounded-lg p-2 border-4 transition-colors border-rose-950 hover:border-slate-200 relative overflow-hidden"
            >
                
                    <img className="w-full object-cover rounded-sm aspect-video" src={image} alt={title} />
                
                <motion.div 
                    
                    whileHover={{opacity:.85}}
                    transition={{type:'tween',ease:'easeOut',duration:.4}}
                    className="w-full h-full opacity-0 rounded-lg bg-gradient-to-b from-slate-50 to-slate-300 absolute left-0 top-0 flex flex-wrap justify-center content-center"
                >
                    {tags.map(tag=>(
                        <p key={tag} className="bg-stone-900 rounded-full text-slate-100 inline-block pt-3 pb-2 px-6 m-1 font-bold leading-none h-fit">
                            {tag}
                        </p>
                    ))}
                </motion.div>
            </motion.div> 
            </a>   
        </motion.div>
    );
}
export default PortfolioItem;