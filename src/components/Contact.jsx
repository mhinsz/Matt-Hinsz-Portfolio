import { motion } from "framer-motion";
import FormField from "./FormField";

const labelClasses = 'block mt-4 w-full';
const divClass= 'resume text-left flex flex-col flex-wrap md:flex-row my-16 w-full justify-center';
const inputClasses = 'border-4 rounded-lg border-rose-950 w-full py-1 px-2';

function Contact(){

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
            <h1 className="text-5xl md:text-8xl mb-6 text-center text-rose-950 w-full">Get in touch</h1>
            <form name="contact" className="w-full md:w-1/2">
                <input type="hidden" name="form-name" value="contact" />

                <FormField name="name" type="text" required>Name</FormField>
                <FormField name="email" type="email" required>Email</FormField>
                <FormField name="company" type="text">Company</FormField>
                <FormField name="message" type="text" textarea required>Message</FormField>
                <motion.div variants={{
                    hidden:{opacity:0,y:50},
                    visible:{opacity:1,y:0}
                }} className="text-center">
                    <button type="submit" className="pb-1 pt-2 px-8 mt-3 border-4 rounded-lg text-2xl bg-gradient-to-b text-white from-rose-900 to-rose-950">Send</button>
                </motion.div>
            </form>
        </motion.div>
    );
}
export default Contact;