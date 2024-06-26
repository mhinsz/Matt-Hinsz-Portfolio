import bwImage from '../assets/bw-image.jpeg'
import { motion } from 'framer-motion';

function Default(){
    const divClass= 'text-left flex flex-col md:flex-row justify-center items-center my-16';
    return(
        <motion.div 
            initial={{opacity:0,x:-100}} 
            animate={{opacity:1,x:0}} 
            exit={{opacity:0}}
            layout
            //transition={{ type: "spring", duration:1, bounce:.5 }} 
            className={divClass}
        >
            <div className='w-full md:w-1/4 order-2 md:order-1 relative overflow-hidden aspect-square md:aspect-auto self-stretch p-2 border-4 border-rose-950 rounded-md'>
                <img className="rounded-md drop-shadow-lg relative object-cover h-full w-full" src={bwImage} />
            </div>
            <div className='pl-0 md:pl-16 w-full md:w-3/4 mb-4 md:mb-0 order-1 md:order-2'>
                <h1 className="text-8xl mb-8 pl-8 text-center text-rose-950">Hello !</h1>
                <p className="mb-8">
                    Thanks for stopping by! Over the past 13+ years, I have honed my skills in creating interactive and engaging 
                    experiences for the web. My journey has taken me through various aspects of 
                    web development, from front-end design to back-end programming, always with a focus on creating user-friendly 
                    and visually appealing websites. I am committed to staying updated with the latest trends and technologies, 
                    ensuring that my projects are not only functional but also innovative and cutting-edge.
                </p>
                <p>
                    As you explore my portfolio, you will see a collection of projects that reflect my dedication 
                    to quality and creativity. Each project showcases my ability to transform ideas into dynamic digital solutions, 
                    tailored to meet the unique needs of clients. Whether you are looking for a sleek corporate website, an 
                    interactive e-commerce platform, or a custom web application, I have the expertise to bring your vision to life. 
                    Let's build something amazing together.
                </p>
            </div>    
        </motion.div>
    );
}
export default Default;