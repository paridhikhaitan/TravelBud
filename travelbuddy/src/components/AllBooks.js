import React from "react";
import { Container, Col, Row } from "react-grid-system";
import Books from "../components/Books";
import allCourses from "../components/CourseHashmap";
import ReactSearchBox from "react-search-box";
import { Input } from "antd";

const { Search } = Input;

const courses = allCourses.map(course => {
  return (
    <Col md={2}>
      <div className="booktile" onClick={()=>{
        let el = document.getElementsByClassName("booktile")[0];
        el.innerHTML="";
        for(let i=0; i<Books.length; i++){

            if(course === Books[i].course){
              

              let d = document.createElement("div");
              let head = document.createElement("h3")
              head.innerHTML = Books[i].title;
              d.appendChild(head);
              el.appendChild(d);

              let h2 = document.createElement("h6");
              h2.innerHTML = Books[i].quarter;
              el.appendChild(h2);

              let ink = document.createElement("a");
              let tNode = document.createTextNode("Find your book here");
              ink.appendChild(tNode);
              ink.href = Books[i].link;
              el.appendChild(ink);

              d.style.marginTop = "5rem"
            }
        }
      }}>
        <img src={require("../images/Folder.svg")}/>
        <h5>{course}</h5>
      </div>
    </Col>
  );
});

class AllBooks extends React.Component {
  render() {
    return (
      <div className="allBooks">
        <Row>
          <Search
            placeholder="Search (Course, Books)"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
            className="searchInput"
            style={{marginBottom: "5rem"}}
          />
        </Row>
        <Row>{courses}</Row>
      </div>
    );
  }
}

export default AllBooks;
