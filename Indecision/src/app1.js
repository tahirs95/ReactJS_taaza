// let dog ={
// 	sound : 'woof',
// 	talk : function(){
// 		console.log(this.sound)
// 	}
// }
// dog.talk()
// let talkFunction = dog.talk.bind(dog)
// talkFunction()

class Taaza extends React.Component{
    constructor(props){
        super(props);
        this.deleteDish = this.deleteDish.bind(this);
        this.showDish = this.showDish.bind(this);
        this.addDish = this.addDish.bind(this);
        this.state={
            dish: []
        };
    };

    deleteDish(){
        this.setState(() => {
            return {
                dish: []
            };
        });
    }

    showDish(){
        var x = Math.floor((Math.random() * 7) + 1);
        const option = this.state.dish[x];
        alert(option);
    }

    addDish(d){
        if(!d){
            return 'Enter valid value to add dish';
        } else if (this.state.dish.indexOf(d) > -1){
            return 'This option already exits';
        }
        this.setState((prevState) => {           
            return {
                dish : prevState.dish.concat([d])
            };
        });
    }

    render(){
        return(
            <div>
            <Header title = 'TAAZA' subtitle = "Apnaiyat Ka Maza"/>
            <Action 
            hasOptions={this.state.dish.length > 0}
            showDish={this.showDish}  
            />
            <Dish 
            dish= {this.state.dish}
            deleteDish = {this.deleteDish}
            />
            <AddDish 
            addDish = {this.addDish}
            
            />
            </div>
        );
    }


}

class Header extends React.Component{
    render(){
        
        return(
            <div>
             <h1> {this.props.title} </h1>
             <h3> <i> {this.props.subtitle} </i> </h3>
             
            </div>
            
        );
    }


}

class Action extends React.Component{
    
    
    render(){
        return(
            <div>
                <button 
                onClick={this.props.showDish}
                disabled={!this.props.hasOptions}

                
                > What do you wanna eat?</button>   
            </div>
        );
        
    }
}

class Dish extends React.Component{
    render(){
        return(
            <div>
            <p> </p>
            <button onClick={this.props.deleteDish}> Remove Dish </button>
            <h2>Dish:</h2>
            {
                this.props.dish.map((type) =><Type key ={type} typeText={type} />)    
            }
            </div>
        );
        
    }


}

class Type extends React.Component{
    render(){

        return(
            
            <div>
                 {this.props.typeText} 
               
            </div>
        );
        
    }


}

class AddDish extends React.Component{
    constructor(props){
        super(props);
        this.addDish = this.addDish.bind(this);
        this.state = {
            error: undefined
        }
    }
    addDish(e){
        e.preventDefault();
        const dish = e.target.elements.dish.value.trim();
        const error = this.props.addDish(dish);

        this.setState(() => {
            return{
                error
            };
        });
    }
    render(){

        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <p> </p>
                <form onSubmit={this.addDish}>
                    <input type="text" name="dish" />
                    <p> </p>
                    <button> Add Dish </button>
                </form>
            </div>
        );
        
    }


}



ReactDOM.render(<Taaza />,document.getElementById('app'));
