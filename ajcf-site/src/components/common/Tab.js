import * as React from 'react';

import Scroll from './Scroll';

const Tab = ({content, href, className}) =>
  <li className={className}>
    <Scroll type="id" element={href}>
      <a href={`#${href}`}>{content}</a>
    </Scroll>
  </li>

export default Tab;
