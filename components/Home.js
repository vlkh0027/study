import React,{Component} from 'react';
import {View, Text, FlatList, Image,StyleSheet,TouchableOpacity, Dimensions} from 'react-native';
import firebase from './FireBaseConfig';
import TabNavigator from 'react-native-tab-navigator';
import LivingList from './living/LivingList';
import ComingLiveList from './coming/ComingLiveList';
import PreviousLiveList from './previous/PreviousLiveList';
var {height, width} = Dimensions.get('window');
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state= {selectedTab: 'LivingList'}
        //this.props.navigation.navigate('DrawerClose');
    }
    render(){
        return(
                <View style={styles.ao}>
                <TabNavigator
                    tabBarStyle={{ height:height/12 , borderWidth: 0, 
                                flex: 1, paddingTop:5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#F5FCFF',
                                borderTopColor: 'gray' }}
                >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'LivingList'}
                        title="Matching List"
                        selectedTitleStyle={{color:'black', fontFamily:'Avenir',fontSize:12}} 
                        renderIcon={() => <Image style={styles.icon}  source={require('./image/living.png')}/>} 
                        //renderSelectedIcon={() => <Image source={} />}
                        //badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'LivingList' })}>
                        <LivingList/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'ComingLiveList'}
                        title="Coming Match List"
                        selectedTitleStyle={{color:'black', fontFamily:'Avenir',fontSize:12}}
                        renderIcon={() => <Image style={styles.icon}  source={require('./image/coming.png')}/>} 
                        //renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'ComingLiveList' })}>
                        <ComingLiveList/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'PreviousLiveList'}
                        title="Previous Match List"
                        selectedTitleStyle={{color:'black', fontFamily:'Avenir',fontSize:12}} 
                        renderIcon={() => <Image style={styles.icon}  source={require('./image/previous.png')}/>} 
                        //renderSelectedIcon={() => <Image source={} />}
                        //renderBadge={() => <CustomBadgeView />}
                        onPress={() => this.setState({ selectedTab: 'PreviousLiveList' })}>
                        <PreviousLiveList/>
                    </TabNavigator.Item>
                </TabNavigator>
                </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
    ao:{
        flex:1, 
        //backgroundColor:'red',
    },
    icon:{
        width: 25,
        height: 25,     
    },
});

