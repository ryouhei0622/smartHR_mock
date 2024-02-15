export const Footer = () => {
    return(
        <header className="h-header-height bg-base-blue text-white text-sm flex justify-between items-center">
        {/* リンクを追加し、hover時にunderlineが表示されるように変更 */}
        <div className="ml-header-margin">
            <a href="/help" className="hover:underline">ヘルプ </a>
            <a href="/news" className="hover:underline">お知らせ </a>
            <a href="/terms" className="hover:underline">利用規約 </a>
            <a href="/privacy" className="hover:underline">プライバシーポリシー </a>
            <a href="/company" className="hover:underline">運営会社 </a>
            <a href="/developers" className="hover:underline">開発者向けAPI </a>
        </div>
        <div dir="rtl">
            .ⒸsmartHR, Inc
        </div>
      </header>
    )
}
