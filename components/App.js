import React,{Component} from 'react'
import {
    StackNavigator,
  } from 'react-navigation';
import LivingList from './living/LivingList';
import Live from './living/Live';
import ComingLiveList from './coming/ComingLiveList';
import PreviousLiveList from './previous/PreviousLiveList';
import Home from './Home';
const App = StackNavigator({
    LivingList: { screen: LivingList },
    Live: { screen: Live },
    ComingLiveList: { screen: ComingLiveList },
    PreviousLiveList: { screen: PreviousLiveList },
    Home: { screen: Home }
    },

    {
        initialRouteName:'Home',
        headerMode:'none',
        navigationOptions :{
            
        }
    }
);
export default App;

