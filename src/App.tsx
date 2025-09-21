import './App.css'
import Header from './components/Header/Header';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Footer from './components/Footer/Footer';
'../src/components/Header/Header.tsx'

function App() {
  return (
    <>
      <Header title={"Employee Exit Portal"}></Header>
      <LoginSignup></LoginSignup>
      <Footer title={"Oranization Name Copyright "}></Footer>
    </>
  )
}

export default App;