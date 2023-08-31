import { useState } from "react";
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import CardForm from './components/CardForm';
import CardAdded from './components/CardAdded';

function App() {
const [ showForm, setShowForm ] = useState(true);
const [ showMsg, setShowMsg ] = useState(false);

  return (
    <div className='container'>
      <div className="card">
        <CardFront />
        <CardBack />
      </div>

      <div className="form">
        {showForm && (
          <CardForm setShowForm={setShowForm} setShowMsg={setShowMsg} />
        )}
        
        {showMsg && (
          <CardAdded />
        )}
      </div>
    </div>
  );
}

export default App;
