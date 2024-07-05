import { motion } from "framer-motion";

const labelClasses = 'block mt-4 w-full';
const inputClasses = 'border-4 rounded-lg border-rose-950 w-full py-1 px-2';

function FormField({children,name,textarea,...props}){
    return (
        <motion.div variants={{
            hidden:{opacity:0,y:50},
            visible:{opacity:1,y:0}
        }}>
            <label htmlFor={name} className={labelClasses}>{children}</label>
            {textarea ?
                <textarea className={inputClasses} name={name} {...props}></textarea>
                :
                <input className={inputClasses} name={name} {...props} />
            }
        </motion.div>
    );
}
export default FormField;