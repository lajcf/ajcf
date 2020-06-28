import * as React from "react";
import { PropsWithChildren } from "react";
import cx from "classnames";
import { Icon } from "semantic-ui-react";
import { LandingLink } from "./LandingLink";

interface LinkItemProps {
  onClick?: () => void;
  external?: boolean;
  isURIScheme?: boolean;
  iconName?: string;
  href: string;
}

const LinkItem = ({ href, children, isURIScheme, iconName, onClick }: PropsWithChildren<LinkItemProps>) => {
  if (isURIScheme) {
    return (
      <a href={href} onClick={onClick}>
        {iconName && <i className={cx("ui", "icon", iconName)} />}
        <p>{children}</p>
      </a>
    );
  }

  return (
    <LandingLink href={href}>
      {iconName && <i className={cx("ui", "icon", iconName)} />}
      <p>{children}</p>
    </LandingLink>
  );
};

const Footer = () => (
  <footer className="footer">
    <i className="ui icon facebook f circular" />
    <div className="flex ui">
      {/* <AJCFColumn>
        <ul className="menu">
          <li>&copy; Untitled. All rights reserved.</li>
        </ul>
      </AJCFColumn> */}
      <div>
        allo
        <Icon name="facebook" size="large" />
      </div>
      <div className="column" id="footer-socials">
        <ul className="list-unstyled">
          <li>
            <LinkItem href="https://facebook.com/ovrsea">
              <i className="ui icon facebook f circular" />
            </LinkItem>
            <LinkItem href="https://twitter.com/ovrsea_com">
              <i className="ui icon twitter circular" />
            </LinkItem>
            <LinkItem href="https://linkedin.com/company/ovrsea">
              <i className="ui icon linkedin in circular" />
            </LinkItem>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
