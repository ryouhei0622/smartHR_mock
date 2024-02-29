import { FaRegBuilding } from "react-icons/fa";


export const Company = () => {
    return(
        <>
        <div className="my-header-margin bg-company-gray text-white h-8 flex items-center my-2 font-bold text-sm">
            <FaRegBuilding className="inline-block mx-2 text-white " />
            会社
        </div>

        <div className="border-b border-company-gray w-full text-sm">
            <h1 className="font-bold inline-block">日本株式会社</h1>
        </div>
        <div className="text-sm mt-2">
        〒123-4567
        </div>
        <div className="text-sm">
        東京都会社区会社町1-2-3
        </div>
        <div>
            <span className="text-xs">TEL: </span>
            <span className="text-sm">03-1234-5678</span>
        </div>
        <div>
            <span className="text-xs">法人番号: </span>
            <span className="text-sm">1234567890123</span>
        </div>
        </>
    )
}
