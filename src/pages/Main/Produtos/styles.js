import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex:1,
         
        backgroundColor:'#ECECEC'
    },
    headerButtons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:5,
        marginTop:-15,
       
         
    },
    textButtonCard:{
        color:'#fff',
        fontSize:14
    },
    cardButton:{
        backgroundColor:'#8257E5',
        height:50,
        padding:15,
        width:95,
        height:60,
        marginTop:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        
        elevation: 2,
        
    },
    root:{
        backgroundColor:'#000',
 
    }
    
});

export default styles;