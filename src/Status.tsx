import { IoMdAddCircle } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";


export const Status = () => {
    return(
        <>
        <div className="text-xl flex items-center justify-between">
            <div>
                <FaRegFileAlt className="inline-block mx-header-margin my-header-margin h-8 align-middle" />
                申請の状況
            </div>
        <button className="flex items-center mr-header-margin text-sm border border-black py-1 px-3 rounded-md hover:bg-gray-200 base-ease focus:base-focus cursor-pointer shadow-btn-shadow">
            <IoMdAddCircle className="inline-block mr-2 h-4 align-middle" />
            新しい申請
        </button>

        </div>
        </>
    )
}
