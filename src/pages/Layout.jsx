import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { AddContactButton } from "../components/AddContactButton"
import { Footer } from "../components/Footer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <AddContactButton />
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}