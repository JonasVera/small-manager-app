import {StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
         
        backgroundColor:'#ECECEC'
    },
    
    cardLogin:{
        backgroundColor:'#fff',
       
        borderRadius:8,
        width:'100%' 
         
    },
    grupTpProduto:{
        justifyContent:'center',
        flexDirection:'row',
        padding: 10,
    },  
    bntTpProduto:{
        borderColor:'#8257E5',
        alignContent:'space-around',
        borderWidth:1,
        width:'50%',
        height:30,
        justifyContent:'center',
        paddingRight:10,
        
    },
   
    btnEdit:{ 
        borderRadius:8,
        textAlign:'center',
        backgroundColor:'#8257E5',
        padding:5,
      },
     
    formLogin:{
        margin:10, 
    },
    headerCard:{
        backgroundColor:'#8257E5',
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        height:25,
    },
    logo:{
        
        alignContent:'center',
        resizeMode:'contain',
        width:'100%',
        justifyContent:'center'
    },
    textHeader:{
        fontSize:18,
        textAlign:'center',
        marginTop:0,
        color:'#fff',
       
    },
    grupSelect:{
        flexDirection:'row',
    },
    iconSelect:{
       padding:10, 
    },
    txtEntrar:{
        color:'#8257E5',
        fontSize:18,
        textAlign:'center',
        justifyContent:'center'
      
    },
    txtPromo:{
        color:'#8257E5',
        fontSize:18,
        textAlign:'center',
        justifyContent:'center'
    },
    btnActive:{
        backgroundColor:'#8257E5',
       
    },
    txtCk:{
        color:'#8257E5',
        fontSize:18,
        paddingLeft:10,
    },
    txtCadastro:{
        fontSize:17,  
        marginTop:10,
        color:'#8257E5'
    },
    btnEdit:{
        width:'100%',
        textAlign:'center',
        backgroundColor:'transparent',
        padding:5,
    },
     grupInfo:{
         flexDirection:'row',
       
     },
     txtLabel:{
         fontSize:20,
         alignItems:'center',
         
     }
     
});

export default styles;