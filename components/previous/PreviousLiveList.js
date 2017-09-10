import React,{Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
var {height, width} = Dimensions.get('window');
export default class PreviousLiveList extends Component{
    render(){
        return(
            <View style={styles.ao}>
                <View style = {styles.header}>
                    <Text style={styles.headerText}>PREVIOUS MATCH LIST</Text>
                </View>
                <View>
                <Text>ahihi</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ao:{
        flex:1, 
        
    },
    header:{
        height:height/13,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#007ACC',
        paddingTop:10,
    },
    headerText:{
        color:'#FFFFFF',
        fontWeight:'bold',
        fontFamily:'Avenir',
        fontSize:15,
    },
});