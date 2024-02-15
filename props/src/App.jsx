import './App.css';


function App(imgData) {
  // code here
  
  const images = imgData.imgData;
  
  return(
    <div>
  
      <h1>Kalvium Gallery</h1>

      <div id='gir'> 
          {images.map((element) => (
          <img src={element.img} id={element.id}/>
        
          ))};
      </div>
   
    </div>
 )

}

export default App;
