import { TbCoinYenFilled } from "react-icons/tb";

const PayslipLine = ({text, link}: {text: string, link:string}) => {
    return(
        <div className="py-2 mx-header-margin border-t">
            <a href={link} className="text-blue-600 text-sm hover:text-blue-800 visited:text-purple-600 hover:underline">{text}</a>
        </div>
    )
}
export const Payslip = () => {
    return(
        <>
        <div className="text-xl flex items-center">
            <TbCoinYenFilled className="inline-block mx-header-margin h-8 w-8 align-middle" />
            給与明細
        </div>
        <PayslipLine text="2024(令和06)年01月1日支給分 給与明細" link="https://github.com/ryouhei0622" />
        <PayslipLine text="2023(令和05)年01月1日支給分 給与明細" link="https://qiita.com/tourokumore" />
        <PayslipLine text="2022(令和04)年01月1日支給分 給与明細" link="https://twitter.com/takataka_chick" />
        <div dir={"rtl"} className="py-2 mx-header-margin border-t">
            <a href={"/sample-link"} className="text-blue-600 text-sm hover:text-blue-800 visited:text-purple-600 hover:underline">給与明細の一覧を見る</a>
        </div>
        </>
    )
}
