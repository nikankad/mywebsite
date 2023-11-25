import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

type profileProps = {
  email: string;
};

const ProfileModal = ({ email }: profileProps) => {
  return (
    <div className="profileModal">
      <MDBCard className="mb-4">
        <MDBCardBody className="text-center">
          <MDBCardImage
            src="https://avatars.githubusercontent.com/u/46984837?v=4"
            alt="avatar"
            className="rounded-circle"
            style={{ width: "150px" }}
            fluid
          />
          <p style={{ fontSize: "160%" }} className="text-muted mb-1">
            Nikan
          </p>
          <p className="text-muted mb-2">Developer</p>
          <div className="d-flex justify-content-center mb-2">
            <Button href="mailto:nikan.nik83@gmail.com?subject=website%20email">
              Email
            </Button>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default ProfileModal;
