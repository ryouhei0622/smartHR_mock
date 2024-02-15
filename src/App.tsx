import './App.css';
import { Table } from './table';
import {Company} from './company';

function App() {
  return (
    <div className="Home bg-base-gray">
      <header className="h-header-height bg-base-blue mb-header-margin text-white text-3xl font-bold flex justify-between items-center">
        <div>
          <img src="./bat.svg" alt="Bat" className="inline-block ml-6 my-2 h-6 align-middle" />
          <span className="inline-block ml-6 mx-4 my-4 h-6 align-middle">SmartHR</span>
          <span className="text-sm">燈株式会社</span>
        </div>
        <span className="mr-6 text-sm">山田 太郎 (A01234)</span>
      </header>
      <div className="flex w-4/5 h-screen mx-auto space-x-header-margin  justify-center">
        <div className="w-table-width h-4/5 mx-header-margin space-y-header-margin bg-base-gray flex flex-col">
            <Table/>
            <Company/>
        </div>
        <div className="w-process-width h-full bg-base-blue"> 
          <div className="text-3xl flex items-center">
            <img src="./bat.svg" alt="Bat" className="inline-block ml-header-margin mx-header-margin my-header-margin  h-8 align-middle" />
              手続きを申請する
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
