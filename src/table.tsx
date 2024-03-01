import React from 'react';
import { AiOutlineFileDone } from "react-icons/ai";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";

type TableRowsProps = {
    title: string;
    IconComponent: React.ReactNode; 
};

const TableRows = ({ title, IconComponent }: TableRowsProps) => {
    return (
        <tr> 
            <td className="h-11 text-black whitespace-nowrap hover:bg-table-header flex items-center border-b border-gray-300 rounded-sm base-ease focus:base-focus cursor-pointer">
                {IconComponent}
                <span className="ml-2 text-xs">{title}</span>
            </td>
        </tr>
    );
};


export const Table = () => {
    return(
<div className="relative overflow-x-auto">
    <table className="w-full text-lg text-left text-dark dark:text-gray-400 bg-white border border-gray-300">
        <thead className="text-sm text-black uppercase bg-table-header dark:bg-table-header border border-gray-300">
            <tr>
                <th scope="col" className="px-2 py-3">
                    機能
                </th>
            </tr>
        </thead>
        <tbody>
            <TableRows title="申請" IconComponent={<AiOutlineFileDone className="inline-block ml-2 h-5 align-middle" />} />
            <TableRows title="カスタム社員名簿" IconComponent={<BsFillFileEarmarkPersonFill className="inline-block ml-2 h-5 align-middle" />} />
            <TableRows title="組織図" IconComponent={<RiOrganizationChart className="inline-block ml-2 h-5 align-middle" />} />
            <TableRows title="年末調整" IconComponent={<FaRegCalendarCheck  className="inline-block ml-2 h-5 align-middle" />} />
            <TableRows title="文書配布" IconComponent={<IoNewspaperOutline  className="inline-block ml-2 h-5 align-middle" />} />
            <TableRows title="スキル管理" IconComponent={<FaTrophy  className="inline-block ml-2 h-5 align-middle" />} />
        </tbody>
    </table>
</div>

)}
