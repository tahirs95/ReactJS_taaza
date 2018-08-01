console.log('App.js is running!');
const app = {
  name: "Chef O'clock",
  options: ['Biryani','Karahi'] ,
  rate: 100,
  location: "Bahadurabad"
}

const addDish = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

// JSX - JavaScript XML


function getlocation(location){

  if (location){
    return <p> Location: {location} </p> ;
  }
  else{
    return 'Unknown';
  }

}

const onRemoveAll = () => {
  app.options = [];
  render();
};


const appRoot = document.getElementById('app');

const render = () => {
 const template = (
    <div>
      <h1>TAAZA.COM</h1>
      <h2>{app.name}</h2>
      <ol>
        <li>{getlocation(app.location)}</li>
      </ol>    
      <ol>
          { 
            app.options.map((option) => {
            return <li key ={option}> Dish: {option} </li>;
            }
            )
      
          }
      </ol>
      <form onSubmit={addDish}> 
        <ol>
        <input type='text' name='option'/>
        <span>               </span>
        
        <button> Add Dish </button>
        <div> </div>
        </ol>
        <button > Which dish you want to sell? </button>
        <button onClick={onRemoveAll}> Remove All Dishes </button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();



