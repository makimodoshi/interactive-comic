import { Link, useLocation } from "@tanstack/react-router"
import { Tabs, Tab, Box } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home.js"

const routes = ["/01-prison-escape", "/02-isekai-quest", "/03-hobby-tournament", "/04-conan-collab"]

const routesToId: Record<string, string> = {
    "/": "Home",
    "/01-prison-escape": "01",
    "/02-isekai-quest": "02",
    "/03-hobby-tournament": "03",
    "/04-conan-collab": "04"
}

const useCurrentRoute = () => {
    const pathname = useLocation().pathname
    for (const route in routesToId) {
        if (route === pathname) {
            return route
        }
    }
    return undefined
}

const Navigation = () => {
    const currentRoute = useCurrentRoute()

    return (
        <Box
            component="nav"
            mb={1}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            borderBottom={1}>
            <Tabs
                value={currentRoute}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="tab list of available comics">
                <Tab
                    icon={
                        // @ts-ignore
                        <HomeIcon />
                    }
                    component={Link}
                    to={"/"}
                    value={"/"}
                    aria-label="home"></Tab>
                {routes.map((route) => {
                    return (
                        <Tab
                            component={Link}
                            label={routesToId[route]}
                            to={route}
                            value={route}
                            key={routesToId[route]}
                        />
                    )
                })}
            </Tabs>
        </Box>
    )
}

export default Navigation
