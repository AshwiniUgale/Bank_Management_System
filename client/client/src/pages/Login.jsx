import { useState } from "react";
import "./login.css"
import { loginData } from "../Services/LoginServices";
import { Alert } from "bootstrap";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",

  });

  const Navigate=useNavigate();
  const [isSubmited,setisSubmited]=useState(false);
  const [msg,setmsg]=useState([]);

  const handleInput = (e) => {
    
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const result=await loginData(user);
      
      console.log(result.message);
      //alert(result.message);
      setUser({
        email: "",password: "",})
      setisSubmited(true);
      setmsg(result.message);
      alert(result.message)
      setTimeout(()=>{
        setisSubmited(false);
      },2000);

     
      
     } catch (error) {
          console.log(error);
           }

    console.log(user);
  };


  const handleButton=(e)=>{
    e.preventDefault();
    Navigate('/CustomerInfo')
  }
  //  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="./public/images/13.jpg"
                  alt="a nurse with a cute look"
                  width="470"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">📝Login form..</h1>
                <br />
                <form onSubmit={handleSubmit}  className="form">
                  
                  <div>
                    <label htmlFor="email">🖋️Enter EmailId📨:</label>
                    <input
                      type="text"
                      name="email"
                      value={isSubmited?user.email:null}
                      onChange={handleInput}
                      placeholder="Enter email"
                      required
                    />
                  </div>
                 
                  <div>
                    <label htmlFor="password">📝Enter password: </label>
                    <input
                      type="password"
                      name="password"
                      value={isSubmited?user.password:null}
                      onChange={handleInput}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    👆Log in👆
                  </button>
                  {isSubmited?<div><p>{msg}</p></div>:null}
                  
                  <button type="submit" className="btn btn-submit" onClick={handleButton}>
                    👆go to Registration form👆
                  </button>

                </form>
              </div>
            </div>
          </div>
          
        </main>
        <div className="style">
          <p >👉You are Good to Go with Our Services..👈</p>
        </div>
      </section>
    </>
  );
};
