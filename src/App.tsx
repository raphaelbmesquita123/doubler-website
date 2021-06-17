import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { Header } from './component/Header/header'
import ContactForm from './component/ContactForm/ContactForm'
import Footer from './component/Footer/Footer'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/home/home'

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>

      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      

      <GlobalStyle />
        <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
        <ContactForm />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
