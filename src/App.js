import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import {Link, withRouter, BrowserRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddIcon from '@material-ui/icons/Add';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddListScreen from './screens/AddList'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  navBar: {
    width: '100%',
    backgroundColor: "#2d2f30",
    position: 'fixed',
    bottom: 0,
  },
  navBarText: {
    color: "white",
  },
  topBar: {
    backgroundColor: "#f54260",
    fontSize: "55px",
    flex: 1,
    textAlign: "center",
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
    position: 'absolute',
    bottom: 0,
  },
  inputBox: {
    alignContent: "center",
    backgroundColor: "blue",
    flex: 1,
  },
});

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  return (
    <div>
    <header className={classes.topBar}>
      APP NAME
    </header>

    <AddListScreen />
    
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.navBar}
    >
      <BottomNavigationAction label="List History" icon={<RestoreIcon />} className={classes.navBarText} />
      <BottomNavigationAction label="Add List" icon={<AddIcon />} className={classes.navBarText} />
      <BottomNavigationAction label="Tab 3" icon={<LocationOnIcon />} className={classes.navBarText} />
    </BottomNavigation>
    </div>
  );
}