import { Navigation } from 'react-native-navigation';

import SplashScreen from './containers/SplashScreen';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
    Navigation.registerComponent('screen.Splash', () => SplashScreen, store, Provider);
}

export const TabConfig = {
    tabs: [
        {
            label: 'First',
            title: 'FIRST',
            screen: 'screen.Splash',
            icon: require('../app/resources/question.png'),
            selectedIcon: require('../app/resources/question.png'),
            navigatorStyle: {
                navBarTextFontSize: 15,
                navigationBarColor: '#000000',
                navBarTitleTextCentered: true,
                navBarHidden: false,
                navBarBackgroundColor: 'white',
                navBarNoBorder: false,
            },
            passProps: {},
        },
        {
            label: 'Second',
            title: 'SECOND',
            screen: 'screen.Splash',
            icon: require('../app/resources/question.png'),
            selectedIcon: require('../app/resources/question.png'),
            navigatorStyle: {
                navBarTextFontSize: 15,
                navigationBarColor: '#000000',
                navBarTitleTextCentered: true,
                navBarHidden: false,
                navBarBackgroundColor: 'white',
                navBarNoBorder: false,
            },
            passProps: {},
        },
    ],
    animationType: 'fade',
    title: 'WE ARE GREAT',
    tabsStyle: {
        tabBarButtonColor: 'rgb(158,158,158)',
        tabBarSelectedButtonColor: 'rgb(136,17,68)',
    },
    appStyle: {
        forceTitlesDisplay: true,
    },
};

let isBottomTabInitialized = false;

export function goToLanding() {
    if (!isBottomTabInitialized) {
        isBottomTabInitialized = true;
        Navigation.startTabBasedApp(TabConfig);
    }
}
