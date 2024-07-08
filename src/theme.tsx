import { createTheme } from "@mui/material"

// A custom theme for this app

let theme = createTheme()

theme = createTheme(theme, {
    palette: {
        orange: theme.palette.augmentColor({
            color: {
                main: "#feb65e"
            },
            name: "orange"
        }),
        blue: theme.palette.augmentColor({
            color: {
                main: "#78ceff"
            },
            name: "blue"
        }),
        pink: theme.palette.augmentColor({
            color: {
                main: "#f78cf2"
            },
            name: "pink"
        }),
        green: theme.palette.augmentColor({
            color: {
                main: "#45ec60"
            },
            name: "green"
        }),
        yellow: theme.palette.augmentColor({
            color: {
                main: "#fafe00"
            },
            name: "yellow"
        })
    }
})

export default theme
