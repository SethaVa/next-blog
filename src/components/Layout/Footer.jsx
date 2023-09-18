import Image from "next/image";
import Container from "./Container";
import ThemeSwitch from "../ThemeSwitch";

const Footer = (props) => {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} Setha Va. All rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-5 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          Made from ❤ by{" "}
          <a
            href="https://sethav.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Setha
          </a>
        </span>
        <ThemeSwitch />
      </div>
    </Container>
  );
};

export default Footer;
