import React from "react";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type profileProps = {
  github: string;
};
const Links = ({ github }: profileProps) => {
  return (
    <div className="profileLinks">
      <MDBCard className="mb-4 mb-lg-0">
        <MDBCardBody className="p-0">
          <MDBListGroup flush className="rounded-3">
            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
              <MDBCardText>
                <a href={github} target="_blank">
                  Github
                </a>
              </MDBCardText>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
              <MDBIcon fab icon="github fa-lg" style={{ color: "#333333" }} />
              <MDBCardText>mdbootstrap</MDBCardText>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
              <MDBIcon fab icon="twitter fa-lg" style={{ color: "#55acee" }} />
              <MDBCardText>@mdbootstrap</MDBCardText>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
              <MDBIcon
                fab
                icon="instagram fa-lg"
                style={{ color: "#ac2bac" }}
              />
              <MDBCardText>mdbootstrap</MDBCardText>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Links;
