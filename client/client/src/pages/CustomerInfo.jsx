import { useState } from "react";
import "./Customerinfo.css";
import { useNavigate } from "react-router-dom";
import { saveData } from "../Services/Signup";
import { RegisterData } from "../Services/RegistrationServices";
//use {react-component} from "react-router-dom";

//import { useHistory } from 'react-router-dom';

export const CustomerInfo = () => {


  const Navigate=useNavigate();
  const handleButton=()=>{
    Navigate('/AddMoney');
  }

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    accounttype:"",
    email: "",
    mobile: "",
    gender: "",
    addharno: "",
    occupation: "",
    dateofbirth: "",
    accountno: ""
  });

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

  // // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result=await RegisterData(user);
      console.log(result.message);
      alert(result.message);
     } catch (error) {
          console.log(error);
     }
     

    console.log(user);
  };

  const Click = (e) => {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    // Example: Generate a random integer between 1 and 10
    var randomInteger = getRandomInt(1, 10000000000000);
   // console.log(randomInteger);
    e.preventDefault();
    alert("Your Account No : CB" +randomInteger);
  };


  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
              <p>Customer Registartion Form..</p>
                <img
                  src="./public/images/checklist.jpg"
                  alt="a nurse with a cute look"
                  width="470"
                  height="500"
                />
              </div>
             
              <form>
              <p>😊Candid Bank Welcome You.. 👇Please Register..</p>
        <table>
            <thead >
                <th>Field</th>
                <th>Details</th>
            </thead>
            <tbody >
                <td><label for="name" htmlFor="firstname">First Name:</label></td>
                <td><input type="text" id="name" name="firstname" required 
                      value={user.firstname}
                      onChange={handleInput}
                      placeholder="Enter firstname"/></td>
            </tbody>
            <tr >
                <td><label for="lastname" htmlFor="lastname">Last Name:</label></td>
                <td><input type="text" id="accountNumber" name="lastname" required
                  value={user.lastname}
                  onChange={handleInput}
                  placeholder="Enter lastname"
                /></td>
            </tr>
            <tr >
                <td><label for="address" htmlFor="address">Address:</label></td>
                <td><input type="text" id="address" name="address" required
                  value={user.address}
                  onChange={handleInput}
                  placeholder="Enter lastname"
                /></td>
            </tr>
            <tr >
                <td><label for="accounttype" htmlFor="accounttype" >Account Type:</label></td>
                <td>
                    <select id="accounttype" name="accounttype" value={user} onChange={handleInput}>
                        <option value="saving">Savings</option>
                        <option value="checking">Checking</option>
                        <option value="loan">Loan</option>
                    </select>
                </td>
            </tr>

            <tr >
                <td><label for="email" htmlFor="email">Email Id:</label></td>
                <td><input type="text" id="email" name="email" required
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter address"
                /></td>
            </tr>

            <tr >
                <td><label for="mobile" htmlFor="mobile">Mobile No:</label></td>
                <td><input type="text" id="address" name="mobile" required
                  value={user.mobile}
                  onChange={handleInput}
                  placeholder="Enter Mobile No"
                /></td>
            </tr>

            <tr >
                <td><label for="gender" htmlFor="gender">Gender:</label></td>
                <td><input type="text" id="address" name="gender" required
                  value={user.gender}
                  onChange={handleInput}
                  placeholder="Enter Gender"
                /></td>
            </tr>

            <tr>
                <td><label for="addharno" htmlFor="addharno">Addhar No:</label></td>
                <td><input type="text" id="address" name="addharno" required
                  value={user.addharno}
                  onChange={handleInput}
                  placeholder="Enter the addhar no.."
                /></td>
            </tr>

            <tr >
                <td><label for="occupation" htmlFor="occupation"> Occupation:</label></td>
                <td><input type="text" id="address" name="occupation" required
                  value={user.occupation}
                  onChange={handleInput}
                  placeholder="Enter the occupation"
                /></td>
            </tr>

            

            <tr >
                <td><label for="dateofbirth" htmlFor="dateofbirth">Date of Birth:</label></td>
                <td><input type="date" id="dateofbirth" name="dateofbirth" required
                  value={user.dateofbirth}
                  onChange={handleInput}
                  placeholder="Enter the date of birth"
                /></td>
            </tr>
        </table>

         <div>
        <button type="submit" onClick={Click}>Generate Acount No..</button>
            <tr >
                <td><label for="accountno" htmlFor="accountno">Enter Account Number:</label></td>
                <td><input type="text" id="name" name="accountno" required
                  value={user.accountno}
                  onChange={handleInput}
                  placeholder="Enter Accountno.."
                /></td>
            </tr>
        </div>

       <div className="arrow">
        <button type="submit" className="btn btn-submit" onClick={handleSubmit} >
                    👆Submit Now👆
        </button>

        <button type="submit" className="btn btn-submit" onClick={handleButton}>
                    👆Validate Yourself..👆
        </button>

        </div>
    </form>

                 
            </div>
          </div>
        </main>

        <div className="style">
          <p>👉Note Your Account Number To Avail Our Best Services..👈</p>
        </div>
      </section>
    </>
  );
          };
