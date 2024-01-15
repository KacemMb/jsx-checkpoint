import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import MyImage from './components/MyImage';
import MyName from './components/Name';
import Description from './components/Description';
import Price from './components/Price'
import './App.css'
let firstName = prompt("enter your name")
function App() {
  

  return (
    <div className="App">
      <Card style={{ width: '18rem' }} className='MyCard'>
        <MyImage/>
        <Card.Body>
          <MyName/>
          <Description/>
          <Price/>
        </Card.Body>
      </Card>
      {firstName && <p className='para'>Hello, {firstName}!</p>}
      {firstName && <img src="./images/smile.png" className='img' alt="Smiling Face" />}
      {!firstName && <p className='para'>Hello, there!</p>}
    </div>
  );
}

export default App;

