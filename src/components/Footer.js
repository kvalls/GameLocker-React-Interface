import React, { useContext } from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

export default function Footer() {
  const navigate = useNavigate();
  const [log, setLog] = useContext(LoginContext);

  return (
    <div>
      {(log === 0) ? (
        <MDBFooter color="red darken-1" className="font-small mt-4 fixed-bottom">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow className="Row">
              <MDBCol>
                <h1 className="list-unstyled">
                  <a onClick={() => navigate(`/contact`)}>Contact</a>
                </h1>
              </MDBCol>
            </MDBRow>
            {/* <MDBRow className="Row">
              <MDBCol>
                <h1 className="list-unstyled">
                  <a onClick={() => navigate(`/store`)}>Store</a>
                </h1>
              </MDBCol>
            </MDBRow> */}
            <MDBRow className="Row">
              <MDBCol>
                <h1 className="list-unstyled">
                  <a onClick={() => navigate(`/home`)}>Main</a>
                </h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      ) : (
        <MDBFooter color="red darken-1" className="font-small mt-4 fixed-bottom">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow className="Row">
              <MDBCol>
                <h1 className="list-unstyled">
                  <a onClick={() => navigate(`/contact`)}>Contact</a>
                </h1>
              </MDBCol>
            </MDBRow>
            {/* <MDBRow className="Row">
              <MDBCol>
                <h1 className="list-unstyled">
                  <a onClick={() => navigate(`/store`)}>Store</a>
                </h1>
              </MDBCol>
            </MDBRow> */}
            <MDBRow className="Row">
              <MDBCol>
                <h1 className="list-unstyled">
                  <a onClick={() => navigate(`/home`)}>Main</a>
                </h1>
              </MDBCol>
            </MDBRow>
            <MDBRow className="Row">
              <MDBCol>
                <h1 className="list-unstyled">
                  <a onClick={() => navigate(`/library`)}>Library</a>
                </h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
      )}
    </div>
  );
}