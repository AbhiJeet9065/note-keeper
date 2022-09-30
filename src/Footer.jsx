import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return <>
        <footer style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "orange",
          textAlign: "center",
        }}>
            <p style={{
                fontSize: "18px",
                fontFamily: "bold"
            }}>copyright © {year}</p>
        </footer>
    </>
};

export default Footer;