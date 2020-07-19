import { makeStyles } from '@material-ui/core/styles'

import { drawerWidth } from './SideMenu'

const styles = makeStyles(themes => ({
  titleBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  }
}))

export default styles