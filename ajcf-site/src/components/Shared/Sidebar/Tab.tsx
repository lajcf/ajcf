import * as React from "react";
import { Link } from "gatsby";
import Scroll from "../Scroll";

export interface TabProps {
  content: string;
  href: string;
  className: string;
  sectionId: string;
}

const Tab = ({ content, sectionId, href, className }: TabProps) => (
  <li className={className}>
    <Scroll type="id" element={sectionId}>
      <Link to={href}>{content}</Link>
    </Scroll>
  </li>
);

export default Tab;
