import data from "../data/01.json"
import { Data } from "../types.js"
import ComicWrapper, { getPagesMap } from "../components/ComicWrapper.js"
import { Helmet } from "react-helmet-async"

const comicData = data as Data

const PrisonEscape = () => {
    return (
        <>
            <Helmet
                title="01 - Escape from the Ocean Prison"
                link={[
                    {
                        rel: "icon",
                        type: "image/png",
                        href: "./retryeye-01.png"
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

export default PrisonEscape
