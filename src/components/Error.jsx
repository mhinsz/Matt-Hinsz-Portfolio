import { Outlet, Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Header from "./Header";
import Footer from "./Footer";

function Error(){
    return(
        <>
            <Header />
            <h1 className="text-4xl md:text-8xl my-16 text-center text-rose-950 w-full">Page not found</h1>
            <Footer />
        </>
    );
}
export default Error;