export const Status = () => {
    return(
        <>
        <div className="text-3xl flex items-center justify-between">
            <div>
                <img src="./bat.svg" alt="Bat" className="inline-block ml-header-margin mx-header-margin my-header-margin h-8 align-middle" />
                申請の状況
            </div>
            <button className="mr-header-margin text-sm border border-black py-1 px-3 rounded-lg shadow-lg">
            <img src="./bat.svg" alt="Bat" className="inline-block mr-2  h-4 align-middle" />
                新しい申請
            </button>
        </div>
        </>
    )
}
