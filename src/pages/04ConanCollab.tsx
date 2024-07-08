import data from "../data/04.json"
import { Data } from "../types.js"
import ComicWrapper, { getPagesMap } from "../components/ComicWrapper.js"
import { Helmet } from "react-helmet-async"

const comicData = data as Data

const ConanCollab = () => {
    return (
        <>
            <Helmet
                title="04 - Destiny Detective"
                link={[
                    {
                        rel: "icon",
                        type: "image/png",
                        href: "./retryeye-04.png"
                    }
                ]}
            />
            <ComicWrapper
                pages={getPagesMap(comicData.pages)}
                flags={comicData.flags}
                coverPage="P00"
                startPage="P01"
            />
        </>
    )
}

export default ConanCollab
