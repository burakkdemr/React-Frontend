import React, { Component } from "react";
import SoftwarePng from "./software.png";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
class Deneme extends Component {
  state = {
    universities: []
  };
  componentDidMount() {
    // axios.get('https://virtserver.swaggerhub.com/MuhammetDilmac/Intern/1.0.0/universities')
    // .then(res => {
    //     console.log(res)
    //     alert(res.data[0].name)
    // })
  }

  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6 pt-5 mt-5">
            {/*Anasayfadaki Sol taraftaki açıklama*/}
            <p
              style={{
                fontFamily: "Roboto,Light",
                fontSize: "36px",
                color: "#000000"
              }}
            >
              <strong>Güvenliğinizi</strong> Yeniden Tanımlayın!
            </p>
            <br />
            <p
              style={{
                fontFamily: "Roboto,Regular",
                fontSize: "20px",
                color: "#000000"
              }}
            >
              Kodia’nın geliştirdiğini yeni nesil siber güvenlik ürünleriyle
              kurumsal güvenliğinizi artırın. Güvenlik araçlarınızı tek bir
              merkezden yöneterek proaktif güvenlik sağlayın.
            </p>

            <Link to="/universities">
              <Button
                type="button"
                value="uniList"
                style={{ color: "white", backgroundColor: "#1A3C7E" }}
              >
                Üniversite Listesi
              </Button>
            </Link>
          </div>
          <div className="col-sm-1">
            {/*Anasayfadaki sağ taraftaki açıklama*/}
            <img src={SoftwarePng} alt="Softwares" />
          </div>
        </div>
      </div>
    );
  }
}
export default Deneme;
