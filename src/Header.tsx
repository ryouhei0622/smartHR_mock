export const Header = () => {
    return(
        <header className="h-header-height bg-base-blue mb-header-margin text-white text-3xl font-bold flex justify-between items-center">
        <div>
          <img src="./bat.svg" alt="Bat" className="inline-block ml-6 my-2 h-6 align-middle" />
          <span className="inline-block ml-6 mx-4 my-4 h-6 align-middle">SmartHR</span>
          <span className="text-sm">燈株式会社</span>
        </div>
        <div className="flex items-center">
          <img src="./bat.svg" alt="Bat" className="inline-block mr-2 my-2 h-6 align-middle" />
          <span className="mr-6 text-sm">山田 太郎 (A01234)</span>
        </div>
      </header>
    )
}
