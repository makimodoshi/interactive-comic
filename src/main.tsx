import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme.js"
import PrisonEscape from "./pages/01PrisonEscape.js"
import IsekaiQuest from "./pages/02IsekaiQuest.js"
import HobbyTournament from "./pages/03HobbyTournament.js"
import ConanCollab from "./pages/04ConanCollab.js"
import Home from "./pages/Home.jsx"
import {
    createHashHistory,
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
    RouterProvider
} from "@tanstack/react-router"
import Navigation from "./components/Navigation.js"
import { HelmetProvider } from "react-helmet-async"
import NotFound from "./components/NotFound.js"

const rootRoute = createRootRoute({
    component: () => (
        <>
            <Navigation />
            <Outlet />
        </>
    )
})

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return <Home />
    }
})

const prisonEscapeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/01-prison-escape",
    component: function PrisonEscapeRoute() {
        return <PrisonEscape />
    }
})

const isekaiQuestRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/02-isekai-quest",
    component: function IsekaiQuestRoute() {
        return <IsekaiQuest />
    }
})

const hobbyTournamentRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/03-hobby-tournament",
    component: function HobbyTournamentRoute() {
        return <HobbyTournament />
    }
})

const conanCollabRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/04-conan-collab",
    component: function ConanCollabRoute() {
        return <ConanCollab />
    }
})

const routeTree = rootRoute.addChildren([
    homeRoute,
    isekaiQuestRoute,
    prisonEscapeRoute,
    hobbyTournamentRoute,
    conanCollabRoute
])

const hashHistory = createHashHistory()

const router = createRouter({
    routeTree,
    history: hashHistory,
    defaultNotFoundComponent: () => <NotFound />
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router
    }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HelmetProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <RouterProvider router={router} />
                </CssBaseline>
            </ThemeProvider>
        </HelmetProvider>
    </React.StrictMode>
)
