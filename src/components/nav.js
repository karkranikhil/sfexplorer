import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';  
import Toggle from './toggle';

const Nav = ({fastType, mode, onToggle, isConverter }) => (
  <nav className="nav">
    {/* <Toggle
      checked={fastType}
      leftLabel="Normal type speed"
      name="fastType"
      onChange={onToggle}
      rightLabel="Fast type speed"
    /> */}
    
    <Toggle
      checked={mode}
      leftLabel="Light Mode"
      name="dark"
      onChange={onToggle}
      rightLabel="Dark Mode"
    />
    {isConverter ? 
    <Link to='/' className='dark-white navlink'><span>SF</span> Command Explorer</Link>:
    <Link to='/sfdx-to-sf-converter' className='dark-white navlink'><span>SFDX</span> to <span>SF</span> Command Convertor</Link>
    }
    
  </nav>
);

Nav.propTypes = {
  fastType: PropTypes.bool,
  mode: PropTypes.bool,
  onToggle: PropTypes.func,
};

export { Nav };
