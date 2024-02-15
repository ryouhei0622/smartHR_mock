export const Payslip = () => {
    return(
        <>
        <div className="text-3xl flex items-center mx-header">
            <img src="./bat.svg" alt="Bat" className="inline-block ml-header-margin mx-header-margin my-header-margin  h-8 align-middle" />
            給与明細
        </div>
        {/* 下にリンクされたテキストと下線を追加、リンクされたテキストも左にheader-marginを適用し、下線はリンクなしでも伸ばす */}
        <div className="mt-4 mx-header-margin border-t">
            <a href="/your-link" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline">2024(令和06)年01月1日支給分 給与明細</a>
        </div>
        <div className="mt-4 mx-header-margin border-t">
            <a href="/your-link" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline">2024(令和06)年02月1日支給分 給与明細</a>
        </div>
        <div className="mt-4 mx-header-margin border-t">
            <a href="/your-link" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline">2024(令和06)年03月1日支給分 給与明細</a>
        </div>
        <div dir="rtl" className="mt-4 mx-header-margin">
            <a href="/your-link" className="text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:underline">給与明細の一覧を見る</a>
        </div>
        </>
    )
}
