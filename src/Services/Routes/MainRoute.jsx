import { Route, Routes } from "react-router-dom"
import { Sidebar } from "../../Screens/Sidebar/Sidebar"
import { Home } from "../../Screens/Home/Home"
import { Dashboard } from "../../Screens/Dashboard/Dashboard"

export const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/dashboard" element={< Dashboard/>}/>
            </Route>
        </Routes>
    )
}
