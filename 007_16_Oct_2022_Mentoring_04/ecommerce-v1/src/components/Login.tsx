
import { Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {useRef, useState, FormEvent} from "react";
import {useNavigate} from "react-router-dom";

import data from "../data.js";

const Login = () => {

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event : FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const matchedUserData = 
    data.users.find( 
      (userData) => {

        let result : boolean = 
        (usernameRef.current?.value === userData.username) &&
        (passwordRef.current?.value === userData.password);
    
        return result;
      }
    )  

    if (matchedUserData){
      navigate("/shopping");
    }else{
      setErrorMessage("Username / password - dont match..")
    }
  }

  return (

    <div className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}>
      

      <Card style={{ width: '18rem' }}>

      {
          errorMessage && (
            <small className="text-danger">{errorMessage}</small>
          )
      }

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username"
              ref={usernameRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label >
            <Form.Control type="password" placeholder="Password" 
              ref={passwordRef} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

      </Card>


    </div>
  );
}

export { Login };