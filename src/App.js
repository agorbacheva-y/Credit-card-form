import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import CardForm from './components/CardForm';
import CardAdded from './components/CardAdded';

function App() {
  return (
    <div className='container'>
      <div className="card">
        <CardFront />
        <CardBack />
      </div>

      <div className="form">
        <CardForm />
        <CardAdded />
      </div>
    </div>
  );
}

export default App;
