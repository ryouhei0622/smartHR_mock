import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

export const WithholdingTax = () => {
    return(
        <>
        <div className="text-xl flex items-center border-b">
            <BsFileEarmarkSpreadsheet className="inline-block my-1 ml-header-margin mx-header-margin h-8 w-8 align-middle" />
            源泉徴収票
        </div>
        <div className="mt-4 mx-header-margin">
            <a href="/your-link" className="text-blue-600 text-sm hover:text-blue-800 visited:text-purple-600 hover:underline">山田 太郎さんの令和05年分 源泉徴収票_12月頑張った人向けに配布</a>
        </div>
        <div className="w-full h-10"/>
        </>
    )
    }
