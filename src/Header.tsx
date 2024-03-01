import { LuBadgeDollarSign } from "react-icons/lu";
import { TbSquareNumber5 } from "react-icons/tb";
import { CiFaceSmile } from "react-icons/ci";

export const Header = () => {
    return(
      <header className="h-header-height bg-base-blue mb-header-margin text-white text-3xl font-bold flex justify-between items-center">
      <div className="flex items-center"> 
        <LuBadgeDollarSign className="inline-block ml-6 my-2 h-6" />
        <span className="mr-4">SmartHR</span>
        <span className="text-sm">日本株式会社</span>
      </div>
      <div className="flex items-center">
        <TbSquareNumber5 className="mr-6" />
        <div className="flex items-center group mr-6">
          <CiFaceSmile className="mr-2 group-hover:brightness-90 group-hover:cursor-pointer" />
          <span className="text-sm group-hover:brightness-90 group-hover:cursor-pointer">山田 太郎 (A01234) ▼</span>
        </div>
    </div>


      </header>
    )
}
<header className="h-header-height bg-base-blue mb-header-margin text-white text-3xl font-bold flex justify-between items-center">
        <div>
          <LuBadgeDollarSign className="inline-block my-2 h-6 align-middle" />
          <span className="ml-6 mr-4">SmartHR</span>
          <span className="text-sm">株式会社</span>
        </div>
        <div className="flex items-center">
          <TbSquareNumber5 className="inline-block mr-2 my-2 h-6 align-middle" />
          <span className="mr-6 text-sm">山田 太郎 (A01234) ▼</span>
        </div>
      </header>
