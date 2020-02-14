import React from "react";
import "./scss/App.scss";
import { Container, Col, Row } from "react-grid-system";
import {Input} from 'antd';
import allWish from './components/Wishlist';

import Navbar from "./components/Navbar";
import AllBooks from "./components/AllBooks";

const { TextArea } = Input;

const wishMap = allWish.map(wish => {
  const w = wish.wish;
  return(
    <div className="wish">
      <p>{wish.wish}</p>
    </div>
  );
});

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="banner">
          <Row className="bancon" style={{marginTop: "5rem"}}>
            <Col md={1}></Col>
            <Col md={5}>
              <h2>Tritons help Tritons 🔱</h2>
              <br />
              <h3>Search. Learn. Grow</h3>
              <h3>
                Build a community through your text books, notes and reviews.{" "}
              </h3>
            </Col>
            <Col md={1}></Col>
            <Col md={2}>
              <img src={require("./images/tb1.svg")} />
            </Col>
            <Col md={2}>
              <img src={require("./images/tb2.svg")} />
            </Col>
          </Row>
        </div>
        <Row style={{marginTop: "5rem"}}>
          <Col md={8}>
            <AllBooks />
          </Col>
          <Col md={4}>
            <h2>Wishlist</h2>
            {wishMap}
            <TextArea
              placeholder="Controlled autosize"
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange = {(event)=>{
                localStorage.setItem('wish-demand', event.target.value)
                console.log(localStorage.getItem('wish-demand'));
              }}
              style={{marginTop: "5rem"}}
            />
            <button type="button" onClick={()=>{
              let currWish = localStorage.getItem("wish-demand");
              let currDate = new Date().toLocaleDateString;

              let toPush = {currWish, currDate};
              allWish.push(toPush);
              localStorage.setItem("wish-list", allWish);
              console.log(allWish);
            }} style={{margin: "5rem"}}>SUBMIT</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
