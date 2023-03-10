
import './App.css';
import FetchContent from './contentful/FetchContent';

if('serviceWorker' in navigator){
  navigator.serviceWorker
  .register('/sw.js')
  .then(function(){
    console.log("service worker registered!")
  });
}

function App() {
// let images = ['Alaska1.jpg','Greenland1.jpg','Greenland2.jpg','Greenland3.jpg','Greenlan4','Haida.jpeg','Iceland1.jpeg','Iceland2.jpeg','Iceland3.jpeg','Iceland4.jpeg','Iceland5.jpeg'];


  return (
    <div className="App">
      <FetchContent  />
    </div>
  );
}

export default App;
