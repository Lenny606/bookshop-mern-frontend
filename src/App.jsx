import './App.css'
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import {AuthProvider} from "./context/auth/AuthContext.jsx";
import Footer from "./pages/home/Footer.jsx";

function App() {

    return (
        <>
            <AuthProvider>
                <NavBar/>
                <main className={'min-h-screen max-w-screen-2xl px-4 py-6 mx-auto font-primary'}>
                    <Outlet/>
                </main>
                <Footer />
            </AuthProvider>
        </>
    )
}

export default App
