import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FaTruckMoving } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { FaWpforms } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";


type ProcessButtonProps = {
    IconComponent: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
};

const ProcessButton: React.FC<ProcessButtonProps> = ({ IconComponent, title, description, onClick }) => {
    return (
        <button 
            className="bg-base-blue h-process-height flex items-center rounded-md hover:brightness-90 p-4 cursor-pointer base-ease focus:base-focus cursor-pointer shadow-btn-shadow"
            onClick={onClick}
        >
            {IconComponent}
            <div className="flex flex-col justify-center h-full">
                <div className="text-xl text-white font-bold text-left mb-2">
                    {title}
                </div>
                <div className="text-xs text-white text-left">
                    {description}
                </div>
            </div>
            <div></div>
        </button>
    );
};

export const Process = () => {
    return(
        <>
        <div className="text-xl flex items-center">
        <FaRegFileAlt className="inline-block mr-header-margin my-header-margin h-8 w-8 align-middle " />
            手続きを申請する
        </div>
        <div className="grid grid-cols-2 gap-6">
            <ProcessButton 
                IconComponent={<MdFamilyRestroom className="h-10 w-10 mx-4 text-white" />}
                title="扶養追加の手続き"
                description="結婚、出産、配偶者が退職したとき等"
                onClick={() => console.log("扶養追加の手続き")}
            />
            <ProcessButton 
                IconComponent={<ImExit className="h-10 w-10 mx-4 text-white" />}
                title="扶養削除の手続き"
                description="子供や配偶者が就職したとき等"
                onClick={() => console.log("住民税の手続き")}
            />
            <ProcessButton 
                IconComponent={<FaTruckMoving className="h-10 w-10 mx-4 text-white" />}
                title="住所変更の手続き"
                description="引っ越しした時の手続き"
                onClick={() => console.log("健康保険の手続き")}
            />
            <ProcessButton 
                IconComponent={<IoMdPricetag className="h-10 w-10 mx-4 text-white" />}
                title="氏名変更の手続き"
                description="氏名が変わったときの手続き"
                onClick={() => console.log("社会保険の手続き")}
            />
            <ProcessButton 
                IconComponent={<FaWpforms className="h-10 w-10 mx-4 text-white" />}
                title="申請フォーム"
                description="その他の申請はこちら"
                onClick={() => console.log("給与明細の取得")}
            />
            <ProcessButton 
                IconComponent={<FaRegCalendarCheck className="h-10 w-10 mx-4 text-white" />}
                title="年末調整の手続き"
                description="年末調整の書類を作成します。"
                onClick={() => console.log("その他の手続き")}
            />
        </div>  
        </>
    )
    }
