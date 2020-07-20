import { makeStyles } from '@material-ui/core/styles'

export const drawerWidth = 120

const styles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
  },
  title: {
    zIndex: theme.zIndex.drawer + 1
  }
}))

export default styles