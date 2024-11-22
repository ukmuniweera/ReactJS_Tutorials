import {sculptureList} from './components/data';
import SculpureViewer from './components/SculptureViewer';


function App() {
  return (
    <div>
      {sculptureList.map(item=><SculpureViewer details={item}></SculpureViewer>)}
    </div>
  );
}

export default App;
