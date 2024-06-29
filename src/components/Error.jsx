import { Outlet, Link } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Header from "./Header";
import Footer from "./Footer";

function Error(){
    return(
        <>
            <Header />
            <div className="my-40 flex flex-col justify-center text-center">
                <h1 className="text-4xl md:text-8xl text-rose-950 w-full">Page not found</h1>
                <Link className="text-2xl my-12" to="/">Return to home</Link>
            </div>
            <Footer />
        </>
    );
}
export default Error;