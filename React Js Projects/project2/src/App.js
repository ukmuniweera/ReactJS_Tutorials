import './App.css';
import Books from './components/Books';
import Mycont from './components/Mycont';
import Student from './components/Student';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
//parent
function App() {
  const sum=(num1,num2)=>{
    const s=num1+num2;
    console.log(`Sum is `+s);
    return s;
  }

  const books=[
    {id:"uov125",name:"fundametals of Programming", pages:200},
    {id:"uov126",name:"JavaScript for beginners", pages:150},
    {id:"uov127",name:"Knowdledge Base: guide book", pages:200},
    {id:"uov128",name:"Newsletter Issue 2, Vol 1", pages:20},
    {id:"uov129",name:"Modern web app", pages:450},
  ];
  const selectedBook =(book)=>{
    console.log(`selected book is ${book.name} which has ${book.pages} pages`)
  }
  return (
    <Container>
      <Row>
        <Col><image src={logo}/></Col>
        <Col><Mycont msg="Hello React !" dosum={sum}/></Col>
      </Row>
      <Row>
        <Col md="8">
        <Student regno="2020/IT/01" name="P.Kolins" age="25" degree="IT"/>
        </Col>
        <Col md="4">
        <Books bdata={books} onSelectBook={selectedBook}/>
        </Col>
      </Row>
      <Row>
        3
      </Row>
      <>
      
      {/*<Mycont msg="Hello Props!"/>*/}
      
      
    </>
    </Container>
    
    
  );
}

export default App;
