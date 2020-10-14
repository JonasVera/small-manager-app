import React,{useState} from 'react';
import {View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import { FontAwesome5,AntDesign,Entypo,Foundation,Feather,MaterialCommunityIcons } from "@expo/vector-icons";
import styles from './styles';
import { Input } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import { Avatar, Accessory } from 'react-native-elements';

function VendaProduto(){
    const navigation = useNavigation();
    const [formProduto,setFormProduto] = useState(false);
    const [btnActive,setBtnActive] = useState('bntActive'); 
      
    function trocaForm(tp){
         if(tp == "Servico"){
           setFormProduto(false);
          
         }else{
          setFormProduto(true);
         }
          
     }

    return (
        <View style={styles.container}>
           
             
            <View style={styles.cardLogin}>
            <View style={styles.headerCard}>
                     <Text style={styles.textHeader}> Lançar produtos </Text>
                 </View>
                 <View style={styles.formLogin}>
                    <View style={styles.grupTpProduto}>
                         <TouchableOpacity onPress={()=>trocaForm("Produto")}    style={styles.bntTpProduto}>
                                <Text style={styles.txtEntrar}>
                                         Produto
                              </Text>
                         </TouchableOpacity>
                         <TouchableOpacity  onPress={()=>trocaForm("Servico")}  style={styles.bntTpProduto}>
                            <Text style={styles.txtEntrar}>
                               
                                     Serviço
                                   </Text>
                                   </TouchableOpacity>
                    </View>

                   {formProduto == true ? 
                   <>

                         <View style={styles.grupInfo}>
                                 <Picker  style={{ height: 50, width: 150,}}  >
                                       <Picker.Item disabled label="Produto" value="" />
                                       <Picker.Item label="1" value="Inst" />
                                       <Picker.Item label="2" value="Face" />
                                       <Picker.Item label="3" value="What" />
                                       <Picker.Item label="4" value="Tel" />
                                </Picker>
                         </View> 
                             
                     <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Preço de venda"
                                leftIcon={<Foundation name={'pricetag-multiple'}  color={'#8257E5'} size={20}  />}
                          />
                         </View> 
                        
                        
                         <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Desconto"
                                leftIcon={<Foundation name={'pricetag-multiple'}  color={'#8257E5'} size={20}  />}
                          />
                         </View> 
                        <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Quantidade"
                                leftIcon={<Foundation name={'price-tag'}  color={'#8257E5'} size={20}  />}
                          />
                         </View> 
                          
                         <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Observação"
                                leftIcon={<Entypo name={'text'}  color={'#8257E5'} size={20}  />}
                          />
                         </View>
                         
                   </>
                    :
                    <>
                        <View style={styles.grupSelect}>
                       
                                 <Picker  style={{ height: 50, width: 150,}}  >
                                       <Picker.Item disabled label="Serviço" value="" />
                                       <Picker.Item label="1" value="Inst" />
                                       <Picker.Item label="2" value="Face" />
                                       <Picker.Item label="3" value="What" />
                                       <Picker.Item label="4" value="Tel" />
                                </Picker> 
                         </View> 
                        
                        <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Preço"
                                leftIcon={<Foundation name={'pricetag-multiple'}  color={'#8257E5'} size={20}  />}
                          />
                          
                         </View> 
                         <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Valor total"
                                leftIcon={<Foundation name={'pricetag-multiple'}  color={'#8257E5'} size={20}  />}
                          />
                          
                         </View> 
                         <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Observação"
                                leftIcon={<Entypo name={'text'}  color={'#8257E5'} size={20}  />}
                          />
                         </View>
                         <Text style={styles.txtCk}>
                            Serviço finalizado ?
                        </Text>
                         <View style={styles.grupInfo}>
                            <CheckBox
                                 style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                title='Sim'
                                 checkedColor='#8257E5'
                                 checkedIcon='dot-circle-o'
                                 containerStyle={{backgroundColor:'#fff',width:90}}
                                 uncheckedIcon='circle-o' />
                            <CheckBox
                                    style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                    title='Não'
                                    containerStyle={{backgroundColor:'#fff',width:90}}
                                    checkedIcon='dot-circle-o'
                                    checkedColor='#8257E5'
                                    uncheckedIcon='circle-o' />
                         </View> 

                         
                    </>
                   } 
                   
  
                   <TouchableOpacity  onPress={()=> updateUser()} style={styles.btnEdit}>
                       
                        <Text style={styles.txtEntrar}>
                            <FontAwesome5 name={'check'}  color={'#fff'} size={20}  />
                                Lançar venda
                        </Text>
                    </TouchableOpacity>
                    
                    
                 </View>
                
                   
                  
            </View>
        </View>
    );
}

export default VendaProduto;