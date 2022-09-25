import {StyledInputContainer} from './StyledInputContainer'
import PropTypes from 'prop-types'

export const InputContainer = ({children}) => {
return (
<StyledInputContainer>{children}</StyledInputContainer>
)
}

InputContainer.propTypes = {
    children: PropTypes.node,
  };