import UserList from "../components/UserList";
import Profile from "../components/Profile";
import NotFound from "../components/NotFound";
import Info from "../components/Info";



export const routes = [
    {path: "/repositories", element: "repos"},
    {path: "/todos", element: "repos"},
    {path: "/user/:login", element: Info},
    {path: "/", element: Profile},
    {path: "*", element: NotFound},
]