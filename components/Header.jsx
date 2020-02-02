import Link from "next/link";
import Button from "./Button";

export const Header = ({}) => {
  return (
    <>
      <div className="header-wrapper">
        <Link href="/">
          <p className="mah-name">Home</p>
        </Link>
        <div className="middle-spacer" />
        <Button compressed>Download My Resume</Button>
      </div>
      <style jsx>{`
        .header-wrapper {
          padding: 16px;
          display: flex;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(white, transparent);
          z-index: 1;
        }

        .mah-name {
          font-size: 20px;
          font-weight: bolder;
          cursor: pointer;
          transition: all ease 0s;
          padding: 4px 0 4px 3px;
        }

        .mah-name:hover {
          padding: 4px 0 2px 3px;
          border-bottom: 2px solid black;
          transition: all ease 0s;
        }

        .middle-spacer {
          flex: 1;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Header;
