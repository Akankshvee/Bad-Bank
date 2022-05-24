import logo from './BankImage.jpg';
import './App.css';
import React, {useState} from 'react';
import './index.css';
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
//import Redirect from "react-router";
import { Navbar, Nav, Container, Button, Row, Col, Form} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//import Tooltip from "react-bootstrap/Tooltip";
//import OverlayTrigger from "react-bootstrap/OverlayTrigger";
//import Popover from 'react-bootstrap/Popover';


function App() {
  const [alldata, setalldata] = useState([{id:1, name:"Test User", email:"test@gmail.com", password:"Secret", balance:100}]);
  const [key, setKey] = useState(0);
  const [loginVisible, setLoginVisible] = useState(false);
  
  function Footer(){
    return(
      <Navbar className="fixed-bottom"  bg="primary" variant="dark">
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
       <div className="text-white mb-3 mb-md-0 ">
      Copyright © 2022. All rights reserved.
    </div>
   </div>
   </Navbar>
    )
  }

    
 function Header() {
  const logoutUser = (e) =>  {
    e.preventDefault();
  
    setKey(0);
    setLoginVisible(false);
    }
    return (
      <div >
      <Navbar expand="xxl" bg="primary" variant="dark" >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navfont"><h2>AmexBankDemo</h2></Navbar.Brand>
          </LinkContainer>
          <Nav className="menuItems d-flex justify-content-end ">
          <LinkContainer to="/">     
          
            <Nav.Link className="menu d-inline-block"  data-toggle="tooltip" title="Visit Home Page">Home</Nav.Link>

           </LinkContainer>
           
            <LinkContainer to="/account">  
         
            <Nav.Link className="menu d-inline-block" data-toggle="tooltip" title="Create new Account">Create Account</Nav.Link>
           
            </LinkContainer>
            
            <LinkContainer to="/deposit">
              <Nav.Link className="menu d-inline-block"  data-toggle="tooltip" title="Deposit money to your account" >Deposit</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/withdraw">
              <Nav.Link className="menu d-inline-block"  data-toggle="tooltip" title="Withdraw money from your account" >Withdraw</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/alldata">
              <Nav.Link className="menu d-inline-block"  data-toggle="tooltip" title="Display all users data" >All Data</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login" style={{ visibility: !loginVisible ? "visible" : "hidden" }}>
              <Nav.Link className="menu d-inline-block"   data-toggle="tooltip" title="Login to your account" >Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <h2 className="logout" style={{ visibility: loginVisible ? "visible" : "hidden" }}>
        <button type="submit"  className="btn btn-danger" onClick={logoutUser}>Logout</button>
        </h2>
        </div>
    )
  }
  function Login(){
    return(
      <div>
        {!loginVisible  ? (
        <LoginVal loginVisible={setLoginVisible} />
      ) : (
        <LoginSuccess loginVisible={setLoginVisible}  />
      )}
      </div>
    )
  }
  function LoginSuccess(){
    return(
      <Container>
        
       <h2 className="titlefont"> Login is successful. </h2>
       
      </Container>
    )
  }
function LoginVal(){
  
  //console.log("ro",alldata);
  const [showSuccess, setShowSuccess] = useState(false); 
  
  const login = (e) => {
    e.preventDefault();
   
     const loginEmail =  e.target.elements.formHorizontalEmail.value;
     const loginPassword =  e.target.elements.formHorizontalPassword.value;
     
    // console.log(e.target.elements.formHorizontalEmail.value);
    // console.log(e.target.elements.formHorizontalPassword.value);
     const loginSuccess = alldata.map(
      (items)=>{
       if( items.email === loginEmail && items.password ===loginPassword)
       { setKey(items.id)
    //    console.log("key", key);
     //   console.log("name", items.email);
        
        setLoginVisible(true);
        e.target.elements.formHorizontalPassword.value = "";
        e.target.elements.formHorizontalEmail.value = "";  
        setShowSuccess(true);
      }
        });

    }
  return (
    <Container>
      <h2 className="titlefont"> Login</h2>
      <br />
     <Row>
       <Col className="p-5 m-auto shadow-lg rounded-lg ">
       
      <Form className="formAcct" onSubmit={login}>
        
        <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
          <Form.Label column lg={2}>
            Email
          </Form.Label>
          <Col sm={3}>
            <Form.Control required type="email" placeholder="Enter your Email"   />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-2"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={3}>
            <Form.Control required type="password" placeholder="Enter your Password"   />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button sm={4} type="submit" >
             Login
            </Button>
            <br/>
            <br/>
            <p className="success" style={{ visibility: showSuccess ? "visible" : "hidden" }} >Login is successful.</p>
            
          </Col>
        </Form.Group>
      </Form>
      </Col>
     </Row>
    </Container>
  );

}
  
function Account () {
    //const [alldata, setalldata] = useState(props.alldata);
    const [buttonStatus, setButtonStatus] = useState(true);
  //  const [crttext, setText] = useState("Create Account");
  // const crttext = "Create Account";
    //const [validTransaction, setValidTransaction] = React.useState(false);
    const [dispMsgName, setDispMsgName] = useState("");
    const [dispMsgEmail, setDispMsgEmail] = useState("");
    const [dispMsgPwd, setDispMsgPwd] = useState("");
    //console.log(alldata);
  //  console.log(alldata.length);
    const createAccount = (e) => {
      
     e.preventDefault();
     let n = alldata.length + 1 ;
     const balance = 0;
     // n = n + 1;
      const item = [{id: n, name: e.target.elements.formHorizontalName.value,
                      email: e.target.elements.formHorizontalEmail.value,
                      password: e.target.elements.formHorizontalPassword.value,
                    balance: balance}];

      {setalldata([...alldata, ...item]);}
      e.target.elements.formHorizontalName.value = "";
      e.target.elements.formHorizontalEmail.value = "";
      e.target.elements.formHorizontalPassword.value = "";
    
      
      //console.log(crttext);
      alert('Successfully Created Account');
    //  setText("Add Another Account");
  //  }
    }

    const handleChange= (e) => {    
      setButtonStatus(false);

     }     
     
     const handleChangePwd = (e) => {
      
      setButtonStatus(false);
    const pwd = e.target.value;
    //  console.log(pwd);
      if(pwd.length < 8 ) {
       let newDispMsg = 'Password must be greater than 8 letters';
      setDispMsgPwd(newDispMsg);
    }
    else setDispMsgPwd("");
      // console.log(`handleChange ${event.target.value}`);
      
     };
    return (
      <Container>
        <h2 className="titlefont"> Create Account</h2>
        <br />
        <Row>
       <Col className="p-5 m-auto shadow-lg rounded-lg ">
        <Form className="formAcct" onSubmit={createAccount}>
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalName">
            <Form.Label column lg={2}>
              Name{" "}
            </Form.Label>
            <Col lg={3}>
              <Form.Control required type="name"  onChange={handleChange} placeholder="Enter your Name" />
              <p  className="msg">{dispMsgName}</p>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4"  controlId="formHorizontalEmail">
            <Form.Label column lg={2}>
              Email
            </Form.Label>
            <Col sm={3}>
              <Form.Control required type="email"  onChange={handleChange} placeholder="Enter your Email"   />
              <p  className="msg">{dispMsgEmail}</p>
            </Col>
          </Form.Group>
  
          <Form.Group
            as={Row}
            className="mb-4"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={3}>
              <Form.Control required type="password" onChange={handleChangePwd} placeholder="Enter your Password"   />
              <p  className="msg">{dispMsgPwd}</p>
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button sm={4} disabled={buttonStatus} type="submit" > {alldata.length > 1 ? (
        "Add Another Account"
      ) : (
        "create Account"
      )} </Button>
            </Col>
          </Form.Group>
        </Form>
        </Col>
        </Row>
      </Container>
    );
  
  }
  function Deposit(){
    return(
      <div>
        {key > 0 ? (
        <DepositAmt key={setKey} />
      ) : (
        <LoginFirst key={setKey} />
      )}
      </div>
    )
  }
  function LoginFirst(){
    return(
      <Container>
        
       <h2 className="titlefont"> Please login first to deposit. </h2>
       
      </Container>
    )
  }
 function DepositAmt() {
    const [deposit, setDeposit] = React.useState(0);
   // const Amount = 50;
   // const key = props.key;
   // let item = alldata.filter((item) => item.id == key);
  //  console.log(alldata[0].balance);
    const [buttonStatus, setButtonStatus] = useState(true);
    const [totalState, setTotalState] = React.useState(alldata[key-1].balance);
    const [validTransaction, setValidTransaction] = React.useState(false);
    const [dispMsg, setDispMsg] = React.useState("");
    const [showSuccess, setShowSuccess] = useState(false);
   // let status = `Account Balance $ ${totalState} `;
   // let msg = `${dispMsg}`;

    const handleChange = (event) => {
     // console.log(`handleChange ${event.target.value}`);
      if(Number(event.target.value) <= 0 ) { 
        setValidTransaction(false); 
        setButtonStatus(true);
        let newDispMsg = `The amount cannot be zero or negative`;
      setDispMsg(newDispMsg);
      }
     
      else {
        setValidTransaction(true);
        setButtonStatus(false);
        let newDispMsg = ``;
        setDispMsg(newDispMsg);
      }
  
      setDeposit(Number(event.target.value));
    };
  
  const handleSubmit = (event) => {
    alldata[key-1].balance  =  totalState + deposit ;
     setTotalState(alldata[key-1].balance );
     
    setValidTransaction(false);
    setShowSuccess(true);
   setButtonStatus(true);
    event.target.elements.formHorizontalDepAmt.value = 0;
     event.preventDefault();
    };
  
    return (
      <Container>
        
        <h2 className="titlefont"> Deposit</h2>
        <br />
        <Row>
       <Col className="p-5 m-auto shadow-lg rounded-lg ">
        <Form className="formAcct" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalBalance">
            <Form.Label column lg={3}>
              Balance
            </Form.Label>
            <Form.Label column lg={3}>
              ${totalState}
            </Form.Label>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalDepAmt">
            <Form.Label column lg={3}>
              Deposit Amount
            </Form.Label>
            <Col sm={3}>
              <Form.Control type="number" onChange={handleChange} isValid={validTransaction} placeholder="0" />
              <p id="msg" className="msg">{dispMsg}</p>
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button sm={4} disabled={buttonStatus} type="submit" >
                Deposit
              </Button>
              <br/>
              <br/>
              <p className="success" style={{ visibility: showSuccess ? "visible" : "hidden" }} >The deposit of ${deposit} is processed successfully.</p>
            
            </Col>
          </Form.Group>
        </Form>
       </Col>
       </Row>
      </Container>
    );
  }
  //************************** */
  //*****************Withdraw***************
  //*************************** */
  function Withdraw(){
    return(
      <div>
        {key > 0 ? (
        <WithdrawAmt key={setKey} />
      ) : (
        <LoginFirst key={setKey} />
      )}
      </div>
    )
  }

 function WithdrawAmt(){
  const [withdraw, setWithdraw] = React.useState(0);
  // const Amount = 50;
   
   const [buttonStatus, setButtonStatus] = useState(true);
   const [totalState, setTotalState] = React.useState(alldata[key-1].balance);
   const [validTransaction, setValidTransaction] = React.useState(false);
   const [dispMsg, setDispMsg] = React.useState("");
   const [showSuccess, setShowSuccess] = useState(false);

  // let status = `Account Balance $ ${totalState} `;
  // let msg = `${dispMsg}`;

   const handleChange = (event) => {
    // console.log(`handleChange ${event.target.value}`);
     if(Number(event.target.value) <= 0 ) { 
       setValidTransaction(false); 
       setButtonStatus(true);
       let newDispMsg = `The amount cannot be zero or negative`;
     setDispMsg(newDispMsg);
     }
     else  if( Number(event.target.value) > totalState ) {
       setValidTransaction(false);
       setButtonStatus(true);
       let newDispMsg = `You cannot withdraw more than available balance!`;
       setDispMsg(newDispMsg);
     }
     else {
       setValidTransaction(true);
       setButtonStatus(false);
       let newDispMsg = ``;
       setDispMsg(newDispMsg);
     }
 
     setWithdraw(Number(event.target.value));
   };
 
 const handleSubmit = (event) => {
    alldata[key-1].balance =  totalState - withdraw ;
    setTotalState(alldata[key-1].balance);
   setValidTransaction(false);
   setShowSuccess(true);
   setButtonStatus(true);
   event.target.elements.formHorizontalWithdraw.value = 0;
    event.preventDefault();
   };
 
    return (
      <Container>
        <h2 className="titlefont"> Withdraw</h2>
        <br />
        <Row>
       <Col className="p-5 m-auto shadow-lg rounded-lg ">
        <Form className="formAcct" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalBalance">
            <Form.Label column lg={3}>
              Balance
            </Form.Label>
            <Form.Label column lg={3}>
              ${totalState}
            </Form.Label>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalWithdraw">
            <Form.Label column lg={3}>
              Withdraw Amount
            </Form.Label>
            <Col sm={3}>
            <Form.Control type="number" onChange={handleChange} isValid={validTransaction} placeholder="0" />
              <p id="msg" className="msg">{dispMsg}</p>
            </Col>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button sm={4} type="submit" disabled={buttonStatus}>
                Withdraw
              </Button>
              <br/>
              <br/>
              <p className="success" style={{ visibility: showSuccess ? "visible" : "hidden" }} >The withdraw of ${withdraw} is processed successfully.</p>
            </Col>
          </Form.Group>
        </Form>
        </Col>
        </Row>
        </Container>
     
    );
  }
  
 function Alldata() {
   // console.log("ro",alldata);
    const DisplayData=alldata.map(
      (items)=>{
          return(
              <tr key={items.id}>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.password}</td>
                  <td>{items.balance}</td>
              </tr>
          )
      }
  );
    //const alldata = props.alldata;
   return (
      <div>
        <h2 className="titlefont"> All Data</h2>
        <br />
        <div>
      <div className="card-group">
      <div className="card bg-light mb-3">
      <div className="card-body">
      <table className="table table-striped">
                  <thead className="card-title">
                      <tr>
                      <th>Sl No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Balance</th>
                      </tr>
                  </thead>
                  <tbody className="card-text">
                     {DisplayData}
                 </tbody>
              </table>
          
        </div>
      </div>
      </div>   
      </div>
      </div>
    );
  }
  
 function Home() {
    return (
      <div className="App">
      <div className="card">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
          <h2>Welcome to the Amex Bank Demo!</h2>
          <h3>Delighting you everytime with the Best Customer Experience!</h3>
            <img src={logo} alt="bank" />
          </blockquote>
        </div>
      </div>

    </div>
    );
  }//setalldata(props.alldata);
  //const userList = props.userList;
  //const [alldata, setalldata] = useState([props.userList]);
  return(
  <Router> 
  <Header/>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/account" element={<Account />} />
    <Route path="/deposit" element={<Deposit />} />
    <Route path="/withdraw" element={<Withdraw />} />
    <Route path="/alldata" element={<Alldata  />} />
    </Routes>
    <Footer/>
</Router>

  );
  
}

export default App;
