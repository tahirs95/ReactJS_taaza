class Counter extends React.Component {

  constructor(props){
    super(props);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.state = {
      count:0

    };

  }

  add(){
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
    };
    }
  );
  }

  sub(){
    this.setState((prevState) => {
      return{
        count: prevState.count - 1
    };
    }
  );
  }

  render() {
    return(
      <div>
      <h1> Count: {this.state.count} </h1>
      <button onClick={this.add}> +1 </button>
      <button onClick={this.sub}> -1 </button>

      </div>

    );
    
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const add = () => {
//   count++;
//   counterapp();}

// const minus = () => {
//   count--;
//   counterapp();}



// const counterapp = () => {

//     const templateTwo = (
//       <div>
        
//         <button onClick={add}> Add Dish </button>
//         <button onClick={minus}> Minus Dish </button>
//         <h1> Count: {count} </h1>
        
//       </div>
//     );
//     ReactDOM.render(templateTwo, document.getElementById('app'));
  
//   };
  
//   counterapp();