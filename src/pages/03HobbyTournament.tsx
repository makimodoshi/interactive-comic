import ComicWrapper, { getPagesMap } from "../components/ComicWrapper.js"
import data from "../data/03.json"
import { Data } from "../types.js"
import { Helmet } from "react-helmet-async"

const comicData = data as Data

const IsekaiQuest = () => {
    return (
        <>
            <Helmet
                title="03 - Insurmountable! Defying Common Sense! Challenging the CoroCoro Hobby Tournament"
                link={[
                    {
                        rel: "icon",
                        type: "image/png",
                        href: "./retryeye-03.png"
                    }
                ]}
            />
            <ComicWrapper
                pages={getPagesMap(comicData.pages)}
                flags={comicData.flags}
                coverPage="P99"
                startPage="P00"
            />
        </>
    )
}

export default IsekaiQuest
