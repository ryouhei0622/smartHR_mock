import './App.css';
import { Table } from './Table';
import {Company} from './Company';
import { Header } from './Header';
import { Process } from './Process';
import {Status} from './Status';
import { WithholdingTax } from './WithholdingTax';
import{Payslip} from './Payslip';

function App() {
  return (
    <div className="Home bg-base-gray">
      <Header/>
      <div className="flex w-4/5 h-screen mx-auto space-x-header-margin  justify-center">
        <div className="w-table-width h-4/5 mx-header-margin space-y-header-margin bg-base-gray flex flex-col">
            <Table/>
            <Company/>
        </div>
        <div className="w-process-width h-full bg-white"> 
          <Process/>
          <Status/>
          <Payslip/>
          <WithholdingTax/>
        </div>
      </div>
    </div>
  );
}

export default App;
