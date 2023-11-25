import { getAllByPlaceholderText } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [aboutMeText, setAboutMeText] = useState("");

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const response = await fetch("public/textfiles/aboutme.txt");
        console.log(response);
        const text = await response.text();
        setAboutMeText(text);
      } catch (error) {
        console.error("Error fetching about me text:", error);
      }
    };

    fetchAboutMe();
  }, []);

  return (
    <div>
      <p>{aboutMeText}</p>
    </div>
  );
};

export default AboutMe;
