import './App.css';
import { Table } from './table';
import {Company} from './company';

function App() {
  return (
    <div className="Home bg-base-gray">
      <header className="h-header-height bg-base-blue mb-header-margin">
        SmartHR 燈株式会社
      </header>
      {/* flexコンテナの中央揃えを追加: items-center で縦方向、justify-center で横方向の中央揃え */}
      <div className="flex w-4/5 h-screen mx-auto space-x-header-margin  justify-center">
        {/* 各子要素のスタイルを保持 */}
        <div className="w-table-width h-4/5 mx-header-margin bg-base-blue">
          <h1>今日も一日がんばるぞい！</h1>
          <Table />
          <Company />
        </div>
        <div className="w-process-width h-full bg-base-blue">
          <h1>今日も一日がんばるぞい！</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
