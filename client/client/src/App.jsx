import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./component/Navbar";
import { CustomerInfo } from "./pages/customerInfo";
import { AddMoney } from "./pages/AddMoney";
import { InsertMoney } from "./pages/InsertMoney";
import { ViewBalance } from "./pages/ViewBalance";


const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/CustomerInfo" element={<CustomerInfo />} /> 
          <Route path="/AddMoney" element={<AddMoney />} />
          <Route path="/InsertMoney" element={<InsertMoney />} />
          <Route path="/ViewBalance" element={<ViewBalance />} />
         
        </Routes>
      </Router>
    </>
  )
};

export default App;
