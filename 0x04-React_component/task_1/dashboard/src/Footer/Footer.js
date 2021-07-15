import './Footer.css';
import { getFullYear } from '../utils/utils'
import { getFooterCopy } from '../utils/utils';
var React = require('react');

function Footer() {
  const footerCopy = `Copyright ${getFullYear()} - ${getFooterCopy(true)}`;
  return (
    <div className="App-footer">
      <p>{footerCopy}</p>
    </div>
  );
}

export default Footer;
