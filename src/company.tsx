export const Company = () => {
    return(
        <>
        <div className="my-header-margin bg-company-gray text-white">
            <img src="./bat.svg" alt="Bat" className="font-bold inline-block ml-2 h-5 align-middle text-white" /> {""}
            会社
        </div>
        <div className="border-b border-company-gray w-full">
            <h1 className="font-bold inline-block">日本株式会社</h1>
        </div>
        〒123-4567 <br/>東京都会社区会社町1-2-3 <br/>TEL: 03-1234-5678 <br/>法人番号: 1234567890123
        </>
    )
}
