import React, { Component } from 'react'

import { Container, Row, Col,Table,Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import Header from '../components/Header';
import axios from 'axios'
export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      student_name:'',
      student_uni:'',
      student_start_date:''
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  toggle () {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit () {
    axios.post('https://virtserver.swaggerhub.com/MuhammetDilmac/Intern/1.0.0/students', {
      name: this.state.student_name,
      started_at:this.state.student_start_date,
      university: this.state.student_uni
    })
    .then(function (response) {
      console.log(response);
    })
  }
    render() {
        return (
          
            <Container>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Öğrenci Ekle</ModalHeader>
          <ModalBody>
           
            İsim <Input  name="student_name" onChange={this.handleChange} />
            Univerite <Input name="student_uni" onChange={this.handleChange} />
            Başlama Tarihi <Input  name="student_start_date" onChange={this.handleChange} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Kaydet</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
            <Row>
              <Col>
                  <Header/>
              </Col>
            </Row>
           
            <Row>
              <Col xs="12" className="mt-5">
                    <p style={{fontFamily:"Roboto,Regular",fontSize:"20px",color:"#000000"}}><strong>Öğrenci Listesi</strong></p>
                </Col>
            </Row>
            <Row>
              <Col xs="12" className="mt-5">
                   <Button onClick={this.toggle}>Öğrenci Ekle</Button> 
              </Col>
            </Row>
                <br></br>
<Row>
    <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ÖĞRENCİ ADI</th>
            <th>ÜNİVERSİTE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
           
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
           
          </tr>
        </tbody>
    </Table>
</Row>
           
          </Container>
        )
    }
}
