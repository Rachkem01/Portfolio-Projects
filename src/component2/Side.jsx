import { Link } from "react-router-dom"

function Side (){
    return <main className="sidebar">
      <div className="side-title">
        <h1>My Works</h1>
   <ul className="side-lists">
   
<li>
<Link className="side-link" to='/'>Portfolio</Link>
</li>
<li>
<Link className="side-link" to='/TodoApp'>ToDoApp</Link>
</li>
<li>
<Link className="side-link" to='/WeatherApp'>WeatherApp</Link>
</li>

<li>
<Link className="side-link" to='/GameApp'>Tic-Tac Game</Link>
</li>

<li>
<Link className="side-link" to='/Calculator'>Calculator</Link>
</li>
<li>
<Link className="side-link" to='/StopWatch'>StopWatch</Link>
</li>
<li>
<Link className="side-link" to='/Quiz'>Quiz App</Link>
</li>
<li>
<Link className="side-link" to='/Music'>Music App</Link>
</li>
   </ul>
        </div>  
        <div className="side-lists">
<ul>

</ul>
        </div>
    </main>
}
export default Side