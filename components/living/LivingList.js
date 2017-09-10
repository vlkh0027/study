import React,{Component} from 'react';
import {View, Text, FlatList, Image,StyleSheet,TouchableOpacity, Dimensions, ListItem} from 'react-native';
import firebase from './../FireBaseConfig';

var {height, width} = Dimensions.get('window');
export default class LivingList extends Component{
    constructor(props){
        super(props);
        
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
        if (this.refs.myRef) 
            this.setState({myVar: true});
        list=[];
        this.state={
          
        }
        database = firebase.database();
        user = database.ref('User');
    }

    render(){
        return(
            <View style={styles.ao}>
                <View style = {styles.header}>
                    <Text style={styles.headerText}>HAPPENING MATCH</Text>
                </View>
                <View style={styles.aolist}>
                    <FlatList
                    style={{transform: [{ scaleY: -1 }] }}
                    data={this.state.list}
                    keyExtractor={(item, index) => item.carID}
                    renderItem={({item}) => 
                    <ListItem avatar style={{ transform: [{ scaleY: -1 }]}}
                    
                    >
                    </ListItem>
                    }
                    />
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
    aolist:{
        flex:1,
    },
});

