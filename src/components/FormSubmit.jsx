import { motion } from "framer-motion";

function FormSubmit(){
    return(
        <motion.div 
            initial="hidden"
            animate="visible"
            exit={{opacity:0}}
            variants={{
                hidden:{opacity:0,x:-100},
                visible: {opacity:1,x:0}
            }}
            layout 
            className="my-40 flex flex-col justify-center text-center"
        >
            <h1 className="text-4xl md:text-8xl text-rose-950 w-full">Thank you!</h1>
            <p className="text-2xl my-12">You're message was successfully sent.</p>
        </motion.div>
    );
}
export default FormSubmit;