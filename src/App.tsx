import './App.css';
import { Table } from './Table';
import {Company} from './Company';
import { Header } from './Header';

function App() {
  return (
    <div className="Home bg-base-gray">
      <Header/>
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
