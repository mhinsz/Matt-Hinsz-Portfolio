import { Outlet } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Header from "./Header";
import Footer from "./Footer";

function LayoutRoot(){
    return(
        <>
            <Header />
            <AnimatePresence>
                <Outlet />
                <Footer />
            </AnimatePresence> 
        </>
    );
}
export default LayoutRoot;