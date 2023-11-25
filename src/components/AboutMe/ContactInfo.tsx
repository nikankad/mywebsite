import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";

type myTypes = {
  email: string;
  address: string;
};

const ContactInfo = ({ email, address }: myTypes) => {
  return (
    <div>
      <MDBCard className="mb-4">
        <MDBCardBody>
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Full Name</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">
                Nikan Kadkhodazadeh
              </MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Email</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">{email}</MDBCardText>
            </MDBCol>
          </MDBRow>
          <hr />

          <MDBRow>
            <MDBCol sm="3">
              <MDBCardText>Address</MDBCardText>
            </MDBCol>
            <MDBCol sm="9">
              <MDBCardText className="text-muted">{address}</MDBCardText>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default ContactInfo;
