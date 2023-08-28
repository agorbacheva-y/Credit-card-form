import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import CardForm from './components/CardForm';

function App() {
  return (
    <div>
      <div className="card">
        <CardFront />
        <CardBack />
      </div>

      <div className="form">
        <CardForm />
      </div>
    </div>
  );
}

export default App;
