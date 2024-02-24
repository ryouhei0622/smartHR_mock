export const Payslip = () => {
    return(
        <>
        <div className="text-3xl flex items-center mx-header">
            <img src="./bat.svg" alt="Bat" className="inline-block ml-header-margin mx-header-margin mt-header-margin  h-8 align-middle" />
            給与明細
        </div>
        {/* 下にリンクされたテキストと下線を追加、リンクされたテキストも左にheader-marginを適用し、下線はリンクなしでも伸ばす */}
        <div className="py-2 mx-header-margin border-t">
            <a href="/your-link" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline">2024(令和06)年01月1日支給分 給与明細</a>
        </div>
        <div className="py-2 mx-header-margin border-t">
            <a href="/your-link" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline">2024(令和06)年01月1日支給分 給与明細</a>
        </div>
        <div className="py-2 mx-header-margin border-t">
            <a href="/your-link" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline">2024(令和06)年01月1日支給分 給与明細</a>
        </div>
        
        </>
    )
}
