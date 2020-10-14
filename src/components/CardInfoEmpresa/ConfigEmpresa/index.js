import React,{useEffect, useState} from 'react';
import {View,Switch,Text,ActivityIndicator,Picker} from 'react-native';
import { Image } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5,MaterialCommunityIcons,MaterialIcons,AntDesign,Entypo,Feather} from "@expo/vector-icons";
import styles from './styles';
import { FaBeer } from 'react-icons/ai';
import { Avatar, Accessory } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import ItemFuncionamento from './ItemFuncionamento';
import api from '../../../services/api';
 
import { AsyncStorage } from 'react-native';
function ConfigEmpresa(){
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
  
  
     useEffect(()=>{
         
     },[]);
    return (
        <>
        
        <View style={styles.container}>
         
            <View style={styles.cardLogin}>
                 <View style={styles.headerCard}>
                     <Text style={styles.textHeader}> Configurações </Text>
                 </View>
                 <View style={styles.formLogin}> 
                         
                          <View style={styles.grupInfo}>
                                <FontAwesome5 name={'clock'} color={'#8257E5'}size={20}  />
                                <Text style={styles.txtAddContact}>
                                      Adicionar horarios de funcionamento
                                    </Text>
                                 
                          </View>    
                                <View style={styles.grupInfoFuncinamento}>
                                    
                                       <ItemFuncionamento/>
                                        
                                       <ItemFuncionamento/>
                                       <ItemFuncionamento/>
                                       <ItemFuncionamento/>
                                       <ItemFuncionamento/>
                                       
                                     
                                </View>
                              
                        <TouchableOpacity  onPress={()=> setModal(true)} style={styles.btnEdit}>
                            
                            <Text style={styles.txtEntrar}>
                                <FontAwesome5 name={'check'}  color={'#fff'} size={20}  />
                                {mode == 'Save' ? " Cadastrar" : "  Editar"}
                            </Text>
                         </TouchableOpacity>
                        
                 
                 </View>
                
                   
                
            </View>
           
            
        </View>
        
        </>
    );
}

export default ConfigEmpresa;