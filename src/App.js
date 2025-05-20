// import logo from './logo.svg';
import './App.css';
import StarryBackground from './components/StarryBackground';

function App() {
  return (
    <>
      <StarryBackground />
      <div className="relative z-10">
        {/* Your website content here */}
        <h1 className="text-white text-4xl p-10">Welcome to my starry website!</h1>
      </div>
    </>
  );
}

export default App;
