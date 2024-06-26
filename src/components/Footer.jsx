import { motion } from "framer-motion";
function Footer(){
    return(
        <motion.div layout transition={{duration:.2}} className="before:h-1 before:w-full before:bg-rose-950 before:inline-block my-16 text-right">
            <a href="https://www.linkedin.com/in/matt-hinsz-27320628/" target="_blank" className="fa fa-linkedin text-rose-950 inline-block text-4xl ml-6"></a>
            <a href="https://www.instagram.com/i_am_torgo/" target="_blank" className="fa fa-instagram text-rose-950 inline-block text-4xl ml-6"></a>
        </motion.div>
    );
}
export default Footer;