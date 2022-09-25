import {StyledFooterBar} from './StyledFooterBar'
import PropTypes from 'prop-types'

export const FooterBar = ({children}) => {
return (
<StyledFooterBar>{children}</StyledFooterBar>
)
}

FooterBar.propTypes = {
    children: PropTypes.node,
  };