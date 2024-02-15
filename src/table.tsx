export const Table = () => {
    return(
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-dark dark:text-gray-400 bg-table-header">
        <thead className="text-m text-black uppercase bg-table-header dark:bg-table-header">
            <tr>
                <th scope="col" className="px-6 py-3">
                    機能
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap hover:bg-table-header">
                <img src="./bat.svg" alt="Bat" className="inline-block ml-2 h-5 align-middle" /> {""}
                    申請    
                </th>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap hover:bg-table-header">
                <img src="./bat.svg" alt="Bat" className="inline-block ml-2 h-5 align-middle" /> {""}
                    カスタム社員名簿    
                </th>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap hover:bg-table-header">
                <img src="./bat.svg" alt="Bat" className="inline-block ml-2 h-5 align-middle" /> {""}
                    組織図
                </th>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap hover:bg-table-header">
                <img src="./bat.svg" alt="Bat" className="inline-block ml-2 h-5 align-middle" /> {""}
                    年末調整
                </th>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap hover:bg-table-header">
                <img src="./bat.svg" alt="Bat" className="inline-block ml-2 h-5 align-middle" /> {""}
                    文書配布
                </th>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap hover:bg-table-header">
                <img src="./bat.svg" alt="Bat" className="inline-block ml-2 h-5 align-middle" /> {""}
                    スキル管理
                </th>
            </tr>
        </tbody>
    </table>
</div>

)}
