/*
import React, { useState } from 'react';
import cx from 'classnames';
import { Popup } from 'semantic-ui-react';
import { LandingLink } from '../LandingLink';
import { HeaderBurgerContent } from './HeaderBurger/HeaderBurgerContent';
import { useRouteChangeEffect } from '../../../../../../ovrlib/utils/hooks/useRouteChangeEffect';
import { AJCFLogo } from './AJCFLogo';

const HeaderBurger = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  useRouteChangeEffect(handleCloseMenu);

  return (
    <>
      <LandingLink href="/home/">
        <AJCFLogo />
      </LandingLink>
      <Popup
        open={openMenu}
        basic
        on="click"
        hoverable
        onClose={handleCloseMenu}
        position="bottom right"
        className="header-popup landing-popup landing-container"
        horizontalOffset={13}
        verticalOffset={-61}
        content={<HeaderBurgerContent onClose={handleCloseMenu} />}
        trigger={
          <div
            className={cx(
              'text',
              'item',
              'inline-block',
              'auto-left',
              'burger-container'
            )}
            onClick={handleOpenMenu}
          >
            <div className={cx('hamburger', 'hamburger--boring')}>
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export { HeaderBurger };
*/
