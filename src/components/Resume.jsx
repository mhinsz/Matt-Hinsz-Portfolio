import { motion } from "framer-motion";
import { RESUME_ITEMS, SKILL_ITEMS } from '../resume.js';
import ResumeItem from "./ResumeItem.jsx";
import SkillItem from "./SkillItem.jsx";

function Resume(){
    const divClass= 'resume text-left flex flex-col flex-wrap md:flex-row my-16';
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
            <h1 className="text-5xl md:text-8xl mb-6 text-center text-rose-950 w-full">Places I've Been</h1>

            <motion.div variants={{visible: {transition:{staggerChildren:0.075}} }} className="w-full md:w-2/3 md:pr-8 my-6">

                <motion.div variants={{
                    hidden:{opacity:0,y:50},
                    visible:{opacity:1,y:0}
                }} className="flex w-full ">
                    <p className="resume-title">Experience</p>
                    <div className="w-full border-b-4 border-rose-950 mb-1 ml-2"></div>
                </motion.div>

                {RESUME_ITEMS.map((item) => (
                    <motion.div key={item.id} className="pt-8" variants={{ hidden:{opacity:0,y:50}, visible:{opacity:1,y:0} }}>
                        <ResumeItem {...item} />
                    </motion.div>
                ))} 
                
            </motion.div>

            <motion.div variants={{visible: {transition:{staggerChildren:0.075}} }} className="w-full md:w-1/3 my-6">
                
                <motion.div variants={{ hidden:{opacity:0,y:50},visible:{opacity:1,y:0} }} className="flex w-full ">
                    <p className="resume-title">Skills</p>
                    <div className="w-full border-b-4 border-rose-950 mb-1 ml-2"></div>
                </motion.div>

                {SKILL_ITEMS.map((item) => (
                    <motion.div key={item.id} variants={{ hidden:{opacity:0,y:50}, visible:{opacity:1,y:0} }}>
                        <SkillItem {...item} />
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>
    );
}
export default Resume;