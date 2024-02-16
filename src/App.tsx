import './App.css';
import { Table } from './Table';
import {Company} from './Company';
import { Header } from './Header';
import { Process } from './Process';
import {Status} from './Status';
import { WithholdingTax } from './WithholdingTax';
import{Payslip} from './Payslip';
import { Footer } from './Footer';

function App() {
  return (
    <div className="Home bg-base-gray">
      <Header/>
      <div className="flex w-4/5 h-full mx-auto space-x-header-margin  justify-center overflow-auto">
        <div className="w-table-width h-4/5 mx-header-margin space-y-header-margin bg-base-gray flex flex-col">
            <Table/>
            <Company/>
        </div>
        <div className="w-process-width h-full bg-white shadow-lg"> 
          <div className="w-[calc(100%-2*header-margin)] h-full bg-white mx-header-margin">
            <Process/>
            <Status/>
            <Payslip/>
            <WithholdingTax/>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-20 bg-base-gray"/>
      <Footer/>
    </div>
  );
}

export default App;
