import { useState } from "react";
import "./Register.css"
import { useNavigate } from "react-router-dom";
import { ValidateData } from "../Services/ValidateService";


export const AddMoney=()=> {

  const Navigate=useNavigate();
  const handleButton=()=>{
    Navigate('/InsertMoney');
  }

  const [user, setUser] = useState({
    account: "",
    addhar: "",
  });

  const handleInput = (e) => {
    console.log(e);
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
      const result=await ValidateData(user);
      console.log(result.message);
      alert(result.message);
     } catch (error) {
          console.log(error);
     }
     
     console.log(user);
   
  };

{
    return (
        <>
          <section>
            <main>
              <div className="section-registration">
                <div className="container grid grid-two-cols">
                  <div className="registration-image reg-img">
                    <img
                      src="./public/images/ok.jpg"
                      alt="a nurse with a cute look"
                      width="470"
                      height="500"
                    />
                  </div>
                  {/* our main registration code  */}
                  <div className="registration-form">
                    <h1 className="main-heading mb-3">📝Validate Yourself..</h1>
                    <br />
                    <form onSubmit={handleSubmit}  className="form">
                      
                      <div>
                        <label htmlFor="account">🖋️Enter Account-No:</label>
                        <input
                          type="text"
                          name="account"
                          value={user.account}
                          onChange={handleInput}
                          placeholder="Enter accountno"
                        />
                      </div>
                     
                      <div>
                        <label htmlFor="addhar">📝Enter Addhar-No: </label>
                        <input
                          type="text"
                          name="addhar"
                          value={user.addhar}
                          onChange={handleInput}
                          placeholder="Enter addhar"
                        />
                      </div>
                      <br />
                      <button type="submit" className="btn btn-submit" onChange={handleSubmit}>
                        👆Check Now👆
                      </button>
                    </form>
                    <div>
                  </div>
                  <button type="submit" className=" btn-submit2" onClick={handleButton}>
                        👆Go To Deposit..👆
                    </button>
                    </div>
                </div>
              </div>
            </main>
            <div className="style">
              <p >👉Please Enter the Correct Account Number..👈</p>
            </div>
          </section>
        </>
      );
    }    
}  

