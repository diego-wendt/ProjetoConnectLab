import {StyledTextoSubTitle} from './StyledTextoSubTitle'
import PropTypes from 'prop-types'

export const TextoSubTitle = ({children}) => {
return (
<StyledTextoSubTitle>{children}</StyledTextoSubTitle>
)
}

TextoSubTitle.propTypes = {
    children: PropTypes.node,
  };