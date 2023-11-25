import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdb-react-ui-kit";

import ProfileModal from "./ProfileModal";
import Links from "./Links";
import ContactInfo from "./ContactInfo";
export default function ProfilePage() {
  // my names and finals

  const github: string = "https://github.com/nikankad";
  const email: string = "nikan.nik83@gmail.com";
  const address: string = "United States";

  return (
    <div className="aboutMe">
      <MDBContainer className="py-3">
        <MDBRow>
          <MDBCol lg="4">
            <ProfileModal email={email} />
            <Links github={github} />
          </MDBCol>
          <MDBCol lg="8">
            <ContactInfo email={email} address={address} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
