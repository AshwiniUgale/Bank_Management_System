import { useState } from "react";
import "./Register.css"
import { useNavigate } from "react-router-dom";
import { saveData } from "../Services/Signup";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [msg,setmsg]=useState([])

  const [isSubmited,setisSubmited]=useState(false)


  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    console.log(e);

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async(e) => {
    e.preventDefault();
   try {
    const result=await saveData(user);
     alert(result.message);
    console.log(result.message);

    setUser({
      username: "",
      email: "",
      phone: "",
      password: "",
    });
    setisSubmited(true);
    setmsg(result.message)
    setTimeout(()=>{
      setisSubmited(false);
    },2000);
    alert(result.message);
   } catch (error) {
        console.log(error);
   }
    console.log(user);
  };

  const Navigate=useNavigate();
  const handleButton=()=>{
    Navigate('/login');
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
                  src="./public/images/register.png"
                  alt="a nurse with a cute look"
                  width="470"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form" >
                <h1 className="main-heading mb-3">📄Registration form..</h1>
                <br />
                <form onSubmit={handleSubmit} className="form">
                  <div >
                    <label htmlFor="username" >🖊️Enter username:</label>
                    <input
                    className=".dispaly"
                      type="text"
                      name="username"
                      value={isSubmited?user.username:null}
                      onChange={handleInput}
                      placeholder="Enter username"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">🖋️Enter emailId📨:</label>
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
                    <label htmlFor="phone">✏️Enter mobile no:</label>
                    <input
                      type="number"
                      name="phone"
                      value={isSubmited?user.phone:null}
                      onChange={handleInput}
                      placeholder="Enter mobile-no"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">📝Enter password :</label>
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
                    👆Register Now👆
                  </button>
                   {isSubmited?<div><p>{msg}</p></div>:null}
                  <button className="btn btn-submit" onClick={handleButton}>
                     👆Go to login..👆
                 </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <div className="style">
          <p >👉Register Yourself To Avail Our Best Services..👈</p>
        </div>
      </section>
    </>
  );
};
