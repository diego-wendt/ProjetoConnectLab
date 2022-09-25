import {StyledListSmallCards} from './StyledListSmallCards'
import PropTypes from 'prop-types'

export const ListSmallCards = ({children}) => {
return (
<StyledListSmallCards>{children}</StyledListSmallCards>
)
}

ListSmallCards.propTypes = {
    children: PropTypes.node,
  };