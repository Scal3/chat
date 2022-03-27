import './Button.css';

import PropTypes from 'prop-types'

const Button = ({ isLoading, children }) => {

  return (
    <button 
      className='Button'
      type="submit" 
      disabled={isLoading}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.string
}

export default Button