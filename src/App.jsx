import './App.css'
import Add from './components/Add';
import { useSelector, useDispatch } from 'react-redux';
import { addAction, subtractAction } from './redux/action/actions';

function App() {
  const data = "Free/ Leve Palestina Crush Zionism!!";
  const dispatch = useDispatch();
  const state = useSelector( (state) => {
    return state.addAndsubtractHandler
  })
  return (
    <>  
      <div>
        <h1> React Redux</h1>
        <Add  data={data} />
        <button onClick={() => dispatch(addAction())}> Add + </button>
        <p>{state}</p>
        <button onClick={()=> dispatch(subtractAction()) } >Subtract - </button>

      </div>
      
      
    </>
  )
}

export default App;


