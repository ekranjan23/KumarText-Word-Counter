import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>

      <Navbar title="KumarText" />
      <div className="container"><TextForm heading="Try KumarText - Word Counter, Convert To Uppercase, Convert To Lowercase" />

      </div>


    </>
  );
}

export default App;
