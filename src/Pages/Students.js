import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  Table,
  ModalBody
} from "reactstrap";
import Header from "../components/Header";
import axios from "axios";

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      students: [],
      student_detail: [],
      student_id: "",
      student_name: "",
      student_uni: "",
      student_start_date: "",
      uni_founded_date: "",
      uni_types: ""
    };

    this.toggle = this.toggle.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.getStudents();
  }
  getStudents = () => {
    axios
      .get(
        "https://virtserver.swaggerhub.com/MuhammetDilmac/Intern/1.0.0/students"
      )
      .then(response => {
        let ogrenciler = response.data;
        this.setState({ students: ogrenciler });
      });
    // öğrenci eklediğim halde rağmen hep bir öğrenci geliyor
  };
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  studentsDetail = student_id => {
    this.toggle();
    axios
      .get(
        "https://virtserver.swaggerhub.com/MuhammetDilmac/Intern/1.0.0/students/" +
          student_id
      )
      .then(response => {
        const name = response.data.name;
        const started_at = response.data.started_at;
        const uniname = response.data.university.name;
        const founded_at = response.data.university.founded_at;
        const type = response.data.university.type;
        this.setState({ student_name: name });
        this.setState({ student_start_date: started_at });
        this.setState({ student_uni: uniname });
        this.setState({ uni_founded_date: founded_at });
        this.setState({ uni_types: type });
        this.setState({ student_id: student_id });
      });
  };

  render() {
    const { students } = this.state;
    return (
      <Container>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{ height: 264, fontWeight: 393.22 }}
          centered
        >
          <ModalHeader
            style={{
              fontFamily: "Roboto,Medium",
              fontSize: "20px",
              color: "#3E3F42"
            }}
            toggle={this.toggle}
          >
            {" "}
            {this.state.student_name}{" "}
          </ModalHeader>
          <ModalBody>
            {
              <p
                className="mt-2"
                style={{
                  fontFamily: "Roboto,Medium",
                  fontSize: "14px",
                  color: "#31394D",
                  textAlign: "left"
                }}
              >
                ID:<strong>{this.state.student_id}</strong>
                <br />
                Üniversite Adı:<strong>{this.state.student_uni}</strong>
                <br />
                Başlangıç Tarihi:
                <strong>{this.state.student_start_date}</strong>
                <br />
                Kuruluş Tarihi:<strong>{this.state.uni_founded_date}</strong>
                <br />
                Türü:<strong>{this.state.uni_types}</strong>
              </p>
            }
          </ModalBody>
        </Modal>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col xs="12" className="mt-5 stdList">
            <p
              style={{
                fontFamily: "Roboto,Regular",
                fontSize: "20px",
                color: "#000000",
                cursor: "default"
              }}
            >
              <strong>Öğrenci Listesi</strong>
            </p>
          </Col>
        </Row>

        <br />
        <Row>
          <Table className="table table-hover">
            <thead>
              <tr style={{ cursor: "default" }}>
                <th>ID</th>
                <th>ÖĞRENCİ ADI</th>
                <th>ÜNİVERSİTE</th>
              </tr>
            </thead>

            <tbody>
              {students.map(student => (
                <tr
                  style={{ cursor: "pointer" }}
                  onClick={() => this.studentsDetail(student.id)}
                  key={student.id}
                >
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.university}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}
