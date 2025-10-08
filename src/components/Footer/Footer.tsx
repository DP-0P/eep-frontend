import React from "react";
import "@fontsource/roboto/200.css";
import styles from "./Footer.module.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

interface FooterProps {
  title: string;
}
const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <header className={styles.footerClass}>
      <h1>
        {title}
        <CopyrightIcon className={styles.copyRightIcon}></CopyrightIcon>
      </h1>
    </header>
  );
};

export default Footer;
