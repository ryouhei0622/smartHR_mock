import React from 'react';
import { AiOutlineFileDone } from "react-icons/ai";

type TableRowsProps = {
    title: string;
    IconComponent: React.ReactNode; // Use ReactNode to accept JSX elements
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
            <TableRows title="カスタム社員名簿" IconComponent={<AiOutlineFileDone className="inline-block ml-2 h-5 align-middle" />} />
            <TableRows title="組織図" IconComponent={<AiOutlineFileDone className="inline-block ml-2 h-5 align-middle" />} />
            <TableRows title="年末調整" IconComponent={<AiOutlineFileDone className="inline-block ml-2 h-5 align-middle" />} />
            <TableRows title="文書配布" IconComponent={<AiOutlineFileDone className="inline-block ml-2 h-5 align-middle" />} />
            <TableRows title="スキル管理" IconComponent={<AiOutlineFileDone className="inline-block ml-2 h-5 align-middle" />} />
        </tbody>
    </table>
</div>

)}
