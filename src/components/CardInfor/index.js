import React, { useEffect, useState} from 'react';
import {View,Text,ActivityIndicator,TouchableOpacity, Alert} from 'react-native';
import { AsyncStorage } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5,Feather,Entypo,MaterialIcons } from "@expo/vector-icons";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native-elements';
import { ProgressBar, Colors } from 'react-native-paper';
import styles from './styles';
import { Avatar, Accessory, Divider } from 'react-native-elements';
import {AuthContext} from '../Context/context';
import { CheckBox } from 'react-native-elements'
import { Input } from 'react-native-elements';
import api from '../../services/api';

function CardInfo(){
    const navigation = useNavigation();
    const [userName,setUserName] = useState('');
    const [id,setId] = useState();
    const [email,setEmail] = useState('');
    const [bio,setBio] = useState('');
    const [sexo,setSexo] = useState('');
    const [avatar,setAvatar] = useState();
    const [ckF,setCkF] = useState(false);
    const [ckM,setCkM] = useState(false);
    const [ckIndefinido,setCkIndefinido] = useState(false);
    const [ltAvatar,setLtAvatar] = useState('');      
    const [password,setPassword] = useState('');
    const [dataCad,setDataCad] = useState('');
    const {getAvatar} = React.useContext(AuthContext);
    const [preview,setPreview] = useState(''); 
    const [token,setToken] = useState(''); 
    async  function imagePickerCall (){
          if(Constants.platform.android ){
              const {status} = await Permissions.askAsync(Permissions.CAMERA);  
               if(status !== "granted"){
                  alert("Não pode");
                  return;

              }else{

              }
          } 

          const data = await ImagePicker.launchImageLibraryAsync({});
 
           if(data.cancelled){
               return
           }
           if(!data.uri){
               return;
           }
         
          await AsyncStorage.setItem('preview',data.uri);
        
          setPreview(data.uri);
          setAvatar(data);
    }

     async function uploadImage (){
        let data = new FormData();
        let path = avatar.uri.split('/');
        let name = path[path.length - 1];
        const requestConfigFile = {
           
          };
        data.append('file',{fileName:name,uri:avatar.uri,type:avatar.type}, {headers: {  "Content-Type": "multipart/form-data"    }});
        
       
        try{
            
         const resp = await api.post('upload/21',{data}).then(response=>{
            console.log("IMG");
            console.log(response);
         }).catch(err=>{
            console.log(err);
         
         }); 
         console.log("resp");
         console.log(resp);

        }catch(err){
            console.log(err);
         
        }
         
     }

    const clearStorage = async () => {
         try {
              
              await AsyncStorage.removeItem('user');
              await AsyncStorage.removeItem('email');
              await AsyncStorage.removeItem('sexo');
              await AsyncStorage.removeItem('bio');
              await AsyncStorage.setItem('user',userName);
              await AsyncStorage.setItem('email',email);
              await AsyncStorage.setItem('sexo',sexo);
              await AsyncStorage.setItem('bio',bio);
              
              
            } catch(e) {
               
            }
           
    };
    const  getIdStorage = async () => {
        try{
             
             var user = await AsyncStorage.getItem('user');
             var email = await AsyncStorage.getItem('email');
             var bio = await AsyncStorage.getItem('bio');
             var sexo = await AsyncStorage.getItem('sexo');
             var avatar = await AsyncStorage.getItem('avatar');
             var dataC = await AsyncStorage.getItem('dataCad');
             var previewAvatar = await AsyncStorage.getItem('preview');
             var token = await AsyncStorage.getItem('userToken');
             var data = await AsyncStorage.getItem('data');
             var id_user = await AsyncStorage.getItem('id');
             setId(id_user);  
             setToken(token);
             
             setEmail(email);
             setUserName(user);  
             setBio(bio);
             setAvatar(avatar);  
             setSexo(sexo);
             setPreview(previewAvatar);
             let dtF = dataC.split('-');
             let dia = dtF[2].split('T');
             let mes = dtF[1];
             let ano = dtF[0];
             
             let Formt =dia[0]+"/"+mes+"/"+ano;
             setDataCad(Formt);
            
             if(sexo != ''){
                if(sexo === 'M'){
                    setCkM(true);
                }else if (sexo == 'F'){
                    setCkF(true);
                }else if(sexo == 'I')
                    setCkIndefinido(true);

             } 
              if(userName != undefined){
                let letAv = userName.substr(0,1);
                setLtAvatar(letAv);
              }
             
        }catch(error){
            
        }          
        
    }   
    function updateUser(){
        if(password != ''){
            let config = {headers:{'Authorization': 'Bearer ' + token}}  
            console.log(id);
            if(userName != '' && email != ''){
                const resp = api.put(`users/${id}`,{ 
                    username: userName,
                    avatar: "null",
                    email: email,
                    bio: bio,
                    gender: sexo,
                    password:password },config);

                    clearStorage();
                    setPassword('');
                    Alert.alert("Sucesso","Dados alterados !");
            }else{
                Alert.alert("Aviso","Usúario e email não estão preenchidos");
            }
        }else{
            Alert.alert("Aviso","Informe sua senha para alterar seus dados");
        }
    }
    
     useEffect(()=>{
        getIdStorage();
    },[]);

    return (
        <View style={styles.container}>
            
            <View style={styles.cardLogin}>
            
                 <View style={styles.headerCard}>
                     <Text style={styles.textHeader}> Meu perfil </Text>
                 </View>
                 <View style={styles.formLogin}>
                  <View style={styles.grupInfo}>
                   
                   <Avatar size="medium" rounded onPress={imagePickerCall} title={ltAvatar} 
                    source={{ uri:preview ? preview : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'  }}
                  
                    containerStyle={{backgroundColor:'#8257E5'}} />
                       
                        <TouchableOpacity  onPress={()=> uploadImage()}>
                       
                        <Text style={styles.txtInfo}>
                   
                        <Entypo name="camera" size={24} color="#8257E5" style={{margin: 10}} />
                            alterar foto do perfil
                        </Text>
                       
                   </TouchableOpacity>
                     </View>
                     <Text style={styles.txtInfo}>
                                Data de Cadastro: {dataCad}
                            </Text>
                     <Divider/>
                        <View style={styles.grupInfo}>
                        <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                    value={userName}
                                    onChangeText={(text)=>setUserName(text)}
                                    placeholder="Nome de usuario"
                                    leftIcon={<FontAwesome5 name={'user'}  color={'#8257E5'} size={20}  />}
                                />
                        </View>
                        <View style={styles.grupInfo}>
                        <Input  value={email}
                                onChangeText={(text)=>setEmail(text)}
                                 style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                 placeholder="Email"
                                 leftIcon={{ type: 'Fontisto', name: 'email', color:'#8257E5' }}
                                />
                        </View>
                       <View style={styles.grupInfo}>
                            
                        </View> 
                        <View style={styles.grupInfo}>
                             <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                                     value={bio}
                                    onChangeText={(text)=>setBio(text)}
                                    placeholder="Bio"
                                    leftIcon={ <Feather name={'align-left'} color={'#8257E5'}size={30}  />}
                                />
                        </View> 
                      
                      <View style={styles.grupInfo}>
                            <CheckBox
                                 style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                 checked={ckF}  
                                 onPress={()=> {!ckF ? (setCkF(true),setSexo('F')): setCkF(false);}} 
                                 title='Fem'
                                 checkedColor='#8257E5'
                                 checkedIcon='dot-circle-o'
                                 containerStyle={{backgroundColor:'#fff',width:90}}
                                 uncheckedIcon='circle-o' />
                            <CheckBox
                                    style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                    title='Masc'
                                    checked={ckM}  
                                    containerStyle={{backgroundColor:'#fff',width:90}}
                                    onPress={()=> {!ckM ? (setCkM(true),setSexo('M')): setCkM(false);} } 
                                    checkedIcon='dot-circle-o'
                                    checkedColor='#8257E5'
                                    uncheckedIcon='circle-o' />
                             <CheckBox
                                    checked={ckIndefinido}
                                    onPress={()=> {!ckIndefinido ? (setCkIndefinido(true),setSexo('I')): setCkIndefinido(false);} } 
                                    style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                    containerStyle={{backgroundColor:'#fff',width:90}}
                                    checkedColor='#8257E5'
                                    title='Indef.'
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o' />
                            
                        </View> 
                        <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                             secureTextEntry={true}
                             value={password}
                             onChangeText={(text)=>setPassword(text)}
                             placeholder="sua senha"
                             leftIcon={{ type: 'FontAwesome', name: 'lock',color:'#8257E5'  }}
                       />
                     
                        <TouchableOpacity  onPress={()=> updateUser()} style={styles.btnEdit}>
                       
                        <Text style={styles.txtEntrar}>
                            <FontAwesome5 name={'check'}  color={'#fff'} size={20}  />
                                Salvar
                        </Text>
                    </TouchableOpacity>
                  </View>
             </View>
        </View>
    );
}

export default CardInfo;