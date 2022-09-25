import {StyledListDeviceCards} from './StyledListDeviceCards'
import PropTypes from 'prop-types'

export const ListDeviceCards = ({children}) => {
return (
<StyledListDeviceCards>{children}</StyledListDeviceCards>
)
}

ListDeviceCards.propTypes = {
    children: PropTypes.node,
  };