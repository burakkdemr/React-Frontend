import React, { Component } from 'react'
import { Container, Row, Col ,Table} from 'reactstrap';
import Header from '../components/Header';

 class UniversityDetails extends Component {
    render() {
        return (
            <div>
                 
            <Container>
            <Row>
              <Col>
                  <Header/>
              </Col>
            </Row>
           
            <Row>
              <Col xs="12" className="mt-5">
                    <p style={{fontFamily:"Roboto,Regular",fontSize:"20px",color:"#000000"}}><strong>Üniversite Listesi</strong></p>
                </Col>
            </Row>

                <br></br>

                <Row>
    <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>üNİVERSİTE ADI</th>
            <th>DETAY</th>
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
            </div>
        )
    }
}
export default UniversityDetails;