import {StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
       
    },
    
    cardLogin:{
        backgroundColor:'#fff',
        margin:10,
        borderRadius:8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        
        elevation: 2,
         
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
    txtUpload:{
        color:'#8257E5',
        fontSize:18,
        margin:30,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily:'Archivo_400Regular'
    },
    txtEntrar:{
        color:'#fff',
        fontSize:15,
        paddingLeft:20,
        textAlign:'center',
        fontFamily:'Poppins_400Regular'
    },
    btnAddContact:{
         
        alignItems:'center',
        borderRadius:8,
        margin:5 
    },
    txtAddContact:{
        
        alignItems:'center',
        color:'#8257E5',
        fontSize:15,
        margin:5,
        textAlign:'center',
        fontFamily:'Poppins_400Regular'
    },
    txtCadastro:{
        fontSize:17,  
        marginTop:10,
        color:'#8257E5'
    },
    btnEdit:{ 
        borderRadius:8,
        textAlign:'center',
        backgroundColor:'#8257E5',
        padding:5,
      },
      
      itemAddFuncionamento:{
        flexDirection:'row'
      },
     grupInfo:{
         flexDirection:'row',
        
     },
     grupFuncionamento:{
        flexDirection:'column',
       
    },
     
     inputContact:{
         width:'80%'
     },
     inputHr:{
        width:'90%'
     },
     
     btnContactClose:{
        alignContent:'center',
        justifyContent:'center',
      
     },
     GpbtnHr:{
        alignContent:'center',
        justifyContent:'center',
        padding:5
     },
     grupInfoFuncinamento:{
        margin:5,
        paddingLeft:10
        
     }, 
     
     itemDia:{
         width:'90%',
         flexDirection:'row',
        justifyContent:'space-between',
     },
     txtLabel:{
         fontSize:20,
        
         alignItems:'center',
         
     }
     
});

export default styles;