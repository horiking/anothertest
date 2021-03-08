import PropTypes from 'prop-types'
import "./button.css"

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button