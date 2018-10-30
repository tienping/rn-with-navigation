import 'babel-polyfill';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import configureStore from './app/configureStore';
import { registerScreens } from './app/ScreenConfiguration';

export const store = configureStore({});
registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'screen.Splash',
        title: 'Home',
        navigatorStyle: {
            navBarHidden: true,
            tabBarHidden: true,
        },
    },
});

export default function App() {

}
