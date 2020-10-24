import React,{Component,useEffect,useState} from 'react';
import "./assets/css/style.css";
import Images from "./components/Images";
/*class App extends Component{
    constructor(props){
        console.log("App constructor");
        super(props); //default props
        this.state={title:"Hello React 2",isShowing:false};

    }
    handleClick=()=>{
       // console.log("inside handle Cliclk");
        this.setState({
            isShowing:!this.state.isShowing
        });
    }
    componentDidMount(){
        console.log("Mount");
       // this.setState({ title:"Hello Avinash"})
    }

    componentDidUpdate(){
        console.log("Updated");
    }


    render(){
        console.log("App Render");
      //  console.log(this.state.title);
        return(
            <section className="flex justify-center">
                <div className="w-1/2">
                    <div className="text-center"> 
                    <div className="my-4">{this.state.title}</div>
                        <button className="p-2 my-2 bg-blue-700 text-white" onClick={this.handleClick}>
                            Toggle Image
                        </button>
                    </div>
                    {
                       this.state.isShowing? (<Images/>):null}

                </div>
            </section>
        )
    }
}

export default App;*/



function App() {
    const [title, seTtitle] = useState("Hello react 2");
    const [isShowing, setIsShowing] = useState(false);
    useEffect(()=>{
        console.log("App Mounted");
    },[])

    function handleClick(){
        setIsShowing(!isShowing);
    }


    return (
        <section className="flex justify-center">
            {console.log("re-Render")}
        <div className="w-1/2">
            <div className="text-center"> 
            <div className="my-4">{title}</div>
                <button className="p-2 my-2 bg-blue-700 text-white" onClick={handleClick}>
                    Toggle Image
                </button>
            </div>
            {
               isShowing? (<Images/>):null}

        </div>
    </section>
    )
}

export default App;
