import { motion } from "framer-motion";
import PortfolioItem from "./PortfolioItem";
import { PORTFOLIO_ITEMS } from '../portfolio.js';

function Portfolio(){
    const divClass= 'text-left flex justify-center items-center my-16 flex-wrap';
    
    return(
        <motion.div
            initial="hidden"
            animate="visible"
            exit={{opacity:0}}
            variants={{
                hidden:{opacity:0,x:-100},
                visible: {opacity:1,x:0,transition:{staggerChildren:0.075}}
            }}
            layout 
            className={divClass}
        >
            <h1 className="text-4xl md:text-8xl mb-6 text-center text-rose-950 w-full">Things I've Done</h1>

            {PORTFOLIO_ITEMS.map((item) => (
                <div className="w-full md:w-1/2 mt-6 md:mt-0 p-0 md:p-3 lg:p-5" key={item.id}>
                    <PortfolioItem {...item} />
                </div>
            ))}

        </motion.div>
    );
}
export default Portfolio;