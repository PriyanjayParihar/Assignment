import logo from './logo.svg';
import './App.css';
import FlavanoidsStatisticsTable from './components/StatisticsTable';
import data,{classType} from './components/wineDataJson'
import GammaStatisticsTable from './components/GammaStatisticsTable';


function App() {
  return (
    <div className="App">
<h1> class-wise mean, median, mode of
“Flavanoids”</h1>
<FlavanoidsStatisticsTable classType={classType}  data={data}/>
<br/>
<h1> class-wise mean, median, mode of “Gamma” for the
entire dataset</h1>
<GammaStatisticsTable classType={classType}  data={data}/>
    </div>
  );
}

export default App;
