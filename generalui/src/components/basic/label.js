import PropTypes from 'prop-types'
import "./label.css"

const Label = ({ text}) => {
  return (
    <label
      className='lbl'
    >
      {text}
    </label>
  )
}

Label.propTypes = {
  text: PropTypes.string,
}

export default Label