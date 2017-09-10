import React,{Component} from 'react';
import {View, Text,StyleSheet,Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');
export default class ComingLiveList extends Component{
    render(){
        return(
            <View style={styles.ao}>
                <View style = {styles.header}>
                    <Text style={styles.headerText}>COMING MATCH LIST</Text>
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