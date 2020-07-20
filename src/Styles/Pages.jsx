import { makeStyles } from '@material-ui/core/styles'

import { drawerWidth } from './Components'

const styles = makeStyles(themes => ({
  container: {
    marginLeft: drawerWidth
  }
}))

export default styles