import React,{useEffect, useState} from 'react';
import {View,Switch,Text,ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { Image } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5,MaterialCommunityIcons,MaterialIcons,AntDesign,Entypo,Feather} from "@expo/vector-icons";
import styles from './styles';
import { FaBeer } from 'react-icons/ai';
import { Avatar, Accessory } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
 
import api from '../../services/api';
import { AsyncStorage } from 'react-native';
function CardInfoEmpresa(){
    const navigation = useNavigation();
    const [name,setName] = useState();
    const [industry,setIndustry] = useState();
    const [category,setCategory] = useState();
    const [cnpj,setCnpj] = useState();
    const [description,setDescription] = useState();
    const [id,setId] = useState();
    const [logo,setLogo] = useState();
    const [adress,setAdress] = useState();
    const [data,setData] = useState();
    const [dataContact,setDataContact] = useState();
    const [selectedValue, setSelectedValue] = useState("");
    const [user_id, setId_user] = useState();
    const [mode,setMode] = useState('Save');
    const [modeContact,setModeContact] = useState('Save');
    const [tpContInst,setTpContInst] = useState(false);
    const [typesContact,setTypesContact] = useState({});
    const [tpContFace ,setTpContFace] = useState(false);
    const [tpContWhat,setTpContWhat] = useState(false);
    const [tpContTel,setTpContTel] = useState(false);
    const [valueContactWhat,setValueContactWhat] = useState();
    const [valueContactTel,setValueContactTel] = useState();
    const [valueContactInstagram,setValueContactInst] = useState();
    const [valueContactFace,setValueContactFace] = useState();
    const [tpIconSaveContact,setTpIconSaveContact] = useState("checkcircleo");  

    const  displayData = async () => {
        try{
           
             var obj = await AsyncStorage.getItem('data_empresa');
             var storeContatos = await AsyncStorage.getItem('data_contacts');
             let objJson = JSON.parse(obj);
             let objContatos = JSON.parse(storeContatos);
             setDataContact(objContatos);
            
             setData(objJson);
            
             
             if(objJson !== null){
                setName(objJson.name);
                setIndustry(objJson.industry);
                setCategory(objJson.category);
                setCnpj(objJson.cnpj);
                setId(objJson.id);
                setLogo(objJson.logo);
                setDescription(objJson.description);
                setAdress(objJson.adress);
                setId_user(objJson.user_id);
                setMode('Edit'); 
            }else{
                var id = await AsyncStorage.getItem('id');
                setId_user(id);
             } 
            
        }catch(error){
            console.log(error); 
        }                   
    }
       
    function addContactTP (tipo){
       
        if(tipo == 'Inst')
            setTpContInst(true);
        if(tipo == 'Tel')
            setTpContTel(true);
        if(tipo == 'What')
            setTpContWhat(true);
        if(tipo == 'Face')
            setTpContFace(true);                
    }
 
    async function getCompanies(){
        
        if(data === null){
            const resp =  await api.get(`user/companies?id_user=${user_id}`).then(async res =>{
             
                setName(res.data.Result[0].name);
                setIndustry(res.data.Result[0].industry);
                setCategory(res.data.Result[0].category);
                setCnpj(res.data.Result[0].cnpj);
                setId(res.data.Result[0].id);
                setLogo(res.data.Result[0].logo); 
                setDescription(res.data.Result[0].description);
                setAdress(res.data.Result[0].adress);
                
                try {
                     await AsyncStorage.setItem('data_empresa',JSON.stringify(res.data.Result[0]));
                } catch (error) {
                    console.log(error);
                }
               
              }).catch(err=>{
                console.log(err);
              }) 
         }
         getContacts();
      }
     
     async function refreshData (data){
        var obj = await AsyncStorage.removeItem('data_empresa');
        await AsyncStorage.setItem('data_empresa',JSON.stringify(data));
        displayData();
     } 
     async function addCompanie(){

        const data = {
                name,
                category:"",
                industry,
                cnpj,
                description,
                adress,
                user_id
        }
        
         if(mode == 'Save'){
            try {
                const resp = await api.post('user/companies/',data); 
            } catch (error) {
                console.log(error);
            }
            setMode('Edit');
         }else{
            const resp = await api.put('user/companies/',data); 
         } 
         refreshData(data);
          
      }
       
      async function addContact(category,value){
          
          if(value !== "" || value !== null || value !== undefined){
                const data = {category,value,id_companie:id}
                const resp =  await api.post(`user/contact?user_id=${user_id}`,data).then(async res =>{
                dataContact = null;
                getContacts();
            }).catch(err=>{
              console.log(err); 
            }) 
          }else{
              Alert.alert("Aviso","Preencha o contato para salvar !!");
          }
       
     } 
       
       async function getContacts(){
         let data;
            console.log("REQUISITADO.2.");
            console.log(user_id);
            if(id !== undefined){
                const resp =  await api.get(`user/contact?user_id=${user_id}`).then(async res =>{
             
                    data = res.data.Result;
                      
                     if(data !== null || data.size !== 0 || data !== undefined){
                      data.map((item) =>{
                          if(item.category === "FaceBook"){
                              setValueContactFace(item.value);
                              setTpContFace(true);
                          } 
                          if(item.category === "Instagram"){
                              setValueContactInst(item.value); 
                              setTpContInst(true);
                          }
                             
                          if(item.category === "whatsapp"){
                              setValueContactWhat(item.value); 
                              setTpContWhat(true);
                          }
                           
                          if(item.category === "Telefone"){
                              setValueContactTel(item.value); 
                              setTpContTel(true);
                          }
                             
                       });
           
                    }
      
                   }).catch(err=>{
                     console.log(err);
                   });
            }
           
           
     } 
     
     useEffect(()=>{
        displayData();
        getCompanies();
       
  
     },[]);
    return (
        <View style={styles.container}>
            
            <View style={styles.cardLogin}>
                 <View style={styles.headerCard}>
                     <Text style={styles.textHeader}> Empresa </Text>
                 </View>
                 <View style={styles.formLogin}> 
                        <View style={styles.grupInfo}>
                         
                         <Image
                            source={{ uri: 'https://dummyimage.com/250/8257E5/fffff' }}
                            style={{ width: 100, height: 100,borderRadius:8,marginLeft:10 }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                      
                          <Text style={styles.txtUpload}>   <Entypo name="camera" size={20} color="#8257E5" style={{marginRight: 10}} /> Logo da empresa </Text>
                        </View>
                        <View style={styles.grupInfo}>
                             <Input style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                                    value={name}
                                    onChangeText={(text)=>setName(text)}
                                    placeholder="Nome da empresa"
                                    leftIcon={<Feather name={'briefcase'} color={'#8257E5'}size={20}  />}
                                />
                        </View> 
                        <View style={styles.grupInfo}>
                             <Input style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                                    value={industry}
                                    onChangeText={(text)=>setIndustry(text)}
                                    placeholder="Ramo de atividade"
                                    leftIcon={<Feather name={'bookmark'} color={'#8257E5'}size={20}  />}
                        />
                        </View> 
                  
                        <View style={styles.grupInfo}>
                             <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                                     value={cnpj}
                                     onChangeText={(text)=>setCnpj(text)}
                                    placeholder="CNPJ"
                                    leftIcon={<MaterialCommunityIcons name={'file-document-outline'} color={'#8257E5'}size={20}  />}
                                />
                        </View> 
                       
                        <View style={styles.grupInfo}>
                             <Input style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                                    multiline={true}
                                    numberOfLines={2}
                                    value={description}
                                    onChangeText={(text)=>setDescription(text)}
                                    placeholder="Descrição da empresa"
                                    leftIcon={ <Feather name={'align-left'} color={'#8257E5'}size={20}  />}
                                />
                        </View> 

                        <Divider/> 
                        <View style={styles.grupInfo}>
                            
                        </View> 
                        <View style={styles.grupInfo}>
                         <Picker
                                selectedValue={selectedValue}
                                     style={{ height: 50, width: 150,}}
                                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
                                       <Picker.Item disabled label="Selecione o contato" value="" />
                                       <Picker.Item label="Instagram" value="Inst" />
                                       <Picker.Item label="Facebook" value="Face" />
                                       <Picker.Item label="Whatsapp" value="What" />
                                       <Picker.Item label="Telefone" value="Tel" />
                                </Picker>
                        <TouchableOpacity 
                            onPress={()=>addContactTP(selectedValue)}
                            style={styles.btnAddContact}>
                             <Text style={styles.txtAddContact}>
                                  <AntDesign name={'pluscircle'}  color={'#8257E5'} size={28}  />
                                   Adicionar Contato
                            </Text>
                        </TouchableOpacity>
                               
                      </View>

                      {tpContInst && <View style={styles.grupInfo}>
                      <View  style={styles.inputContact}>
                             <Input style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                                 value={valueContactInstagram}
                                 onChangeText={(text)=>setValueContactInst(text)}
                                 placeholder="Url instagram"
                                 leftIcon={ <FontAwesome5 name={'instagram'} color={'#8257E5'}size={20}  /> }
                              />
                              </View>
                               <TouchableOpacity  onPress={()=>addContact("Instagram",valueContactInstagram)} style={styles.btnContactClose} >
                                    <AntDesign  name={tpIconSaveContact}  color={'#8257E5'} size={23}   />
                               </TouchableOpacity>
                               <TouchableOpacity  style={styles.btnContactClose} >
                                    <AntDesign  name={'closecircleo'}  color={'#DC143C'} size={23}   />
                               </TouchableOpacity>
                        </View> } 
                        {tpContFace &&  
                       <View style={styles.grupInfo}>
                        <View  style={styles.inputContact}>
                         <Input style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                             value={valueContactFace}
                             onChangeText={(text)=>setValueContactFace(text)}
                             placeholder="Url Facebook"
                             leftIcon={<FontAwesome5 name={'facebook'} color={'#8257E5'}size={20}  /> }
                          />
                          </View>
                            <TouchableOpacity onPress={()=>addContact("Facebook",valueContactFace)}  style={styles.btnContactClose} >
                                    <AntDesign  name={tpIconSaveContact}  color={'#8257E5'} size={23}   />
                            </TouchableOpacity>
                           <TouchableOpacity  style={styles.btnContactClose} >
                                    <AntDesign  name={"closecircleo"}  color={'#DC143C'} size={25}   />
                               </TouchableOpacity>
                        </View>  }
                      
                        {tpContWhat && <View style={styles.grupInfo}>
                        <View  style={styles.inputContact}>
                            <Input style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}}
                                 value={valueContactWhat}
                                 onChangeText={(text)=>setValueContactWhat(text)}
                                 placeholder="WhatsApp"
                                 leftIcon={  <FontAwesome5 name={'whatsapp'} color={'#8257E5'}size={20}  /> }
                             />
                             </View>
                             <TouchableOpacity onPress={()=>addContact("whatsapp",valueContactWhat)}   style={styles.btnContactClose} >
                                    <AntDesign  name={tpIconSaveContact}  color={'#8257E5'} size={23}   />
                               </TouchableOpacity>
                              <TouchableOpacity  style={styles.btnContactClose} >
                                    <AntDesign  name={'closecircleo'}  color={'#DC143C'} size={25}   />
                               </TouchableOpacity>
                        </View> 
                    }   
                     {tpContTel &&                               
                     <View style={styles.grupInfo}>
                           <View  style={styles.inputContact}>
                           <Input style={{color:'#8257E5',fontFamily:'Poppins_400Regular',width:'70%'}}
                                 placeholder="Telefone"
                                 leftIcon={  <FontAwesome5 name={'phone'} color={'#8257E5'}size={20}  /> }
                             />
                           </View>
                             <TouchableOpacity  onPress={()=>addContact("Telefone",valueContactTel)}  style={styles.btnContactClose} >
                                    <AntDesign  name={tpIconSaveContact}  color={'#8257E5'} size={23}   />
                               </TouchableOpacity>
                              <TouchableOpacity  style={styles.btnContactClose} >
                                    <AntDesign  name={'closecircleo'}  color={'#DC143C'} size={25}   />
                               </TouchableOpacity>
                        </View>  
                    }      
                         
                      <Divider/>
                      <View style={styles.grupInfo}>
                                 <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                     value={adress}
                                     onChangeText={(text)=>setAdress(text)}
                                    placeholder="Endereço"
                                    leftIcon={<Entypo name={'address'} color={'#8257E5'}size={20}  />}
                                />
                          </View>

                       <View style={styles.grupInfo}>
                                 <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                    placeholder="Região de atendimento"
                                    leftIcon={<MaterialCommunityIcons name={'web'} color={'#8257E5'}size={20}  />}
                                 />
                          </View>
                              
                        <TouchableOpacity  onPress={()=> addCompanie()} style={styles.btnEdit}>
                             <Text style={styles.txtEntrar}>
                                <FontAwesome5 name={'check'}  color={'#fff'} size={20}  />
                                {mode == 'Save' ? " Cadastrar" : "  Editar"}
                            </Text>
                         </TouchableOpacity>
                        
                 </View>
                
                   
                  
            </View>
        </View>
    );
}

export default CardInfoEmpresa;