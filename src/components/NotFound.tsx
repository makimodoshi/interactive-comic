import { Helmet } from "react-helmet-async"
import { Typography } from "@mui/material"

const NotFound = () => (
    <>
        <Helmet
            title="Not Found"
            link={[
                {
                    rel: "icon",
                    type: "image/png",
                    href: "./retryeye-err.png"
                }
            ]}
        />
        <Typography variant="h4" align="center" my={4}>
            Not Found
        </Typography>
    </>
)

export default NotFound
