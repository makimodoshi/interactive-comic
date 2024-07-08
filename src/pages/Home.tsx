// @ts-nocheck
// TS error that Grid is not a JSX element

import {
    Box,
    Container,
    Link as MuiLink,
    type LinkProps,
    Typography
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import React, { forwardRef } from "react"
import { createLink } from "@tanstack/react-router"
import { Helmet } from "react-helmet-async"

const RouterLink = createLink(
    forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
        <MuiLink {...props} ref={ref} />
    ))
)

type ComicPreviewProps = {
    title: string
    imgPath: string
    linkPath: string
}

const ComicPreview: React.FC<ComicPreviewProps> = ({
    title,
    imgPath,
    linkPath
}) => (
    <RouterLink to={linkPath}>
        <Box display="flex" flexDirection="column" gap={1}>
            <Box
                component="img"
                src={imgPath}
                alt={`Preview of ${title}`}
                width="100%"
            />
            <Typography variant="body2" textAlign="center">
                {title}
            </Typography>
        </Box>
    </RouterLink>
)

const Home = () => {
    return (
        <>
            <Helmet
                title="Interactive comics"
                link={[
                    {
                        rel: "icon",
                        type: "image/png",
                        href: "./retryeye-err.png"
                    }
                ]}
            />
            <Container>
                <Typography my={4} variant="h4" textAlign="center">
                    Interactive comics
                </Typography>
                <Grid container spacing={3} p={2}>
                    <Grid xs={6} lg={3}>
                        <ComicPreview
                            title="01 - Escape from the Ocean Prison"
                            imgPath="./preview/01_preview.jpg"
                            linkPath="/01-prison-escape"
                        />
                    </Grid>
                    <Grid xs={6} lg={3}>
                        <ComicPreview
                            title="02 - Reincarnated Into Another World"
                            imgPath="./preview/02_preview.jpg"
                            linkPath="/02-isekai-quest"
                        />
                    </Grid>
                    <Grid xs={6} lg={3}>
                        <ComicPreview
                            title="03 - Insurmountable! Defying Common Sense! Challenging the CoroCoro Hobby Tournament"
                            imgPath="./preview/03_preview.jpg"
                            linkPath="/03-hobby-tournament"
                        />
                    </Grid>
                    <Grid xs={6} lg={3}>
                        <ComicPreview
                            title="04 - Destiny Detective"
                            imgPath="./preview/04_preview.jpg"
                            linkPath="/04-conan-collab"
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home
