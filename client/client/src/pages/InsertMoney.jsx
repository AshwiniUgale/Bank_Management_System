import { useState } from "react";
import "./Customerinfo.css";
import { useNavigate } from "react-router-dom";
import { addMoney } from "../Services/DepositeService";

export const InsertMoney = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    accountno: "",
    email: "",
    mobile: "",
    gender: "",
    addhar: "",
    dateofbirth: "",
    deposit: "",
  });

  const [isSubmited,setisSubmited]=useState(false);
  const [msg,setmsg]=useState([]);

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
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const result=await addMoney(user);
      console.log({current_Balance:result.message});
      setmsg(result.message);
      setisSubmited(true);
      alert(result.message);
      setTimeout(()=>{
              setisSubmited(false);
      },7000)
         } catch (error) {
          console.log(error);
     }



    console.log(user);
  };

  const Navigate=useNavigate();
  const handleButton=()=>{
    Navigate('/service');
  }

  // const Click = (e) => {
  //   function getRandomInt(min, max) {
  //       return Math.floor(Math.random() * (max - min)) + min;
  //   }
    
  //   // Example: Generate a random integer between 1 and 10
  //   var randomInteger = getRandomInt(1, 10000000000000);
  //  // console.log(randomInteger);
  //   e.preventDefault();
  //   alert("Your Account No : CB" +randomInteger);
  // };

  //  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
              <p> 💱Deposit Form..</p>
                <img
                  src="./public/images/deposit.jpg"
                  alt="a nurse with a cute look"
                  width="470"
                  height="500"
                />
              </div>
             
              <form>
        <table>
        <p>😊Candid Bank Welcome You.. 👇Please Fill Deposit Form..</p>
            <tr>
                <th>Field</th>
                <th>Details</th>
            </tr>
            <tr>
                <td><label for="firstname" htmlFor="firstname">First Name:</label></td>
                <td><input type="text" id="firstname" name="firstname" required
                  value={user.firstname}
                  onChange={handleInput}
        
                  placeholder="Enter firstname"
                /></td>
            </tr>
            <tr>
                <td><label for="lastname" htmlFor="lastname">Last Name:</label></td>
                <td><input type="text" id="lastname" name="lastname" required
                   value={user.lastname}
                  onChange={handleInput}
                  placeholder="Enter lastname"
                /></td>
            </tr>
            <tr>
                <td><label for="address" htmlFor="address">Address:</label></td>
                <td><input type="text" id="address" name="address" required
                  value={user.address}
                  onChange={handleInput}
                  placeholder="Enter address"
                /></td>
            </tr>

            <tr>
                <td><label for="accountno" htmlFor="accountno">Account No:</label></td>
                <td><input type="text" id="accountno" name="accountno" required
                  value={user.accountno}
                  onChange={handleInput}
                  placeholder="Enter accountno"
                /></td>
            </tr>
            <tr>
                <td><label for="accountType" htmlFor="accountType">Account Type:</label></td>
                <td>
                    <select id="accountType" name="accountType" value={user} onChange={handleInput}>
                        <option value="saving"  >Savings</option>
                        <option value="checking" >Checking</option>
                        <option value="laon" >Loan</option>
                    </select>
                </td>
            </tr>

            <tr>
                <td><label for="email" htmlFor="email">Email Id:</label></td>
                <td><input type="text" id="email" name="email" required
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter email"
                /></td>
            </tr>

            <tr>
                <td><label for="mobile" htmlFor="mobile">Mobile No:</label></td>
                <td><input type="text" id="mobile" name="mobile" required
                   value={user.mobile}
                  onChange={handleInput}
                  placeholder="Enter mobile"
                /></td>
            </tr>

            <tr>
                <td><label for="gender" htmlFor="gender">Gender:</label></td>
                <td><input type="text" id="gender" name="gender" required
                   value={user.gender}
                  onChange={handleInput}
                  placeholder="Enter gender"
                /></td>
            </tr>

            <tr>
                <td><label for="addhar" htmlFor="addhar">Addhar No:</label></td>
                <td><input type="text" id="addhar" name="addhar" required
                  value={user.addhar}
                  onChange={handleInput}
                  placeholder="Enter addhar no"
                /></td>
            </tr>

            <tr>
                <td><label for="occupation" htmlFor="occupation"> Occupation:</label></td>
                <td><input type="text" id="occupation" name="occupation" required
                  value={user.occupation}
                  onChange={handleInput}
                  placeholder="Enter occupation"
                /></td>
            </tr>


            <tr>
                <td><label for="dateofbirth" htmlFor="dateofbirth">Date of Birth:</label></td>
                <td><input type="text" id="dateofbirth" name="dateofbirth" 
                  value={user.dateofbirth}
                  onChange={handleInput}
                  placeholder="Enter dateofbirth"
                  required
                /></td>
            </tr>

            <tr>
                <td><label for="deposit" htmlFor="deposit" >Add Money To Deposit:</label></td>
                <td><input type="text" id="deposit" name="deposit" 
                  value={user.deposit}
                  onChange={handleInput}
                  placeholder="Enter deposit"
                  required
                /></td>
            </tr>
        </table>

         <div>
        <button type="submit" className="bottom" onClick={handleSubmit}>Deposit here..</button>
        {isSubmited?<div><p>{msg}</p></div>:null}
        </div>

        <button type="submit" className="bottom" onClick={handleButton}>Back to Services..</button>
    </form>

                 
            </div>
          </div>
        </main>

        <div className="style">
          <p>👉Your Money Is Our Money..👈</p>
        </div>
      </section>
    </>
  );
};