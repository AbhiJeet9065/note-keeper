import { color } from "@mui/system";
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
            }}>Created By AbhiJeet | copyright © {year}</p>
            <p style={{
                fontSize: "15px",
                fontFamily: "bold",
                color: "brown"
            }}>
                Made with love for great people.
            </p>
        </footer>
    </>
};

export default Footer;