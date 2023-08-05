import './App.css'
  import TradingViewWidget from './components/TradingViewWidget';
import ControlledAccordions from './components/ControlledAccordions';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';



export default function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <ControlledAccordions />
      <TradingViewWidget />
    
    </div>
    
  )
}
