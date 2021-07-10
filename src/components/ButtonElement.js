import styled from "styled-components";
import { Link } from "react-scroll";
import { general } from "../configuration";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? general.themeColor : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : general.themeColor)};
    color: #000;
  }
`;
