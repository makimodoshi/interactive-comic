import ComicWrapper, { getPagesMap } from "../components/ComicWrapper.js"
import data from "../data/02.json"
import { Data } from "../types.js"
import { Helmet } from "react-helmet-async"

const comicData = data as Data

const IsekaiQuest = () => {
    return (
        <>
            <Helmet
                title="02 - Reincarnated Into Another World"
                link={[
                    {
                        rel: "icon",
                        type: "image/png",
                        href: "./retryeye-02.png"
                    }
                ]}
            />
            <ComicWrapper
                pages={getPagesMap(comicData.pages)}
                flags={comicData.flags}
                coverPage="P00_01"
                startPage="P00_01"
            />
        </>
    )
}

export default IsekaiQuest
