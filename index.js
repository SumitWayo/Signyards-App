/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginPage from './src/screens/LoginPage';
import LandingPage from './src/screens/LandingPage';
import HomePage from './src/screens/HomePage';
import ProjectPage from './src/screens/ProjectPage';


// AppRegistry.registerComponent(appName, () => LoginPage);
// AppRegistry.registerComponent(appName, () => LandingPage);
AppRegistry.registerComponent(appName, () => HomePage);
// AppRegistry.registerComponent(appName, () => ProjectPage);



