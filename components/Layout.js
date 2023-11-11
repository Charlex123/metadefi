import Header from "./Header";
import Footer from "./Footer";


const Layout = ({children}) => {
    return ( 
        <div class="content">
            <Header/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;