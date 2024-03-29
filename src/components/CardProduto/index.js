import React,{useState} from 'react';
import {View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5,AntDesign,Entypo,Foundation,Feather,MaterialCommunityIcons } from "@expo/vector-icons";
import styles from './styles';
import { Input } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import { Avatar, Accessory } from 'react-native-elements';
function CardProduto(){
    const navigation = useNavigation();
     const [formProduto,setFormProduto] = useState(false);
     
      
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
                     <Text style={styles.textHeader}> Cadastrar Produto </Text>
                 </View>
                 <View style={styles.formLogin}>
                    <View style={styles.grupTpProduto}>
                         <TouchableOpacity onPress={()=>trocaForm("Produto")} style={styles.bntTpProduto}>
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
                         <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Nome do produto"
                                leftIcon={<Feather name={'tag'}  color={'#8257E5'} size={20}  />}
                         />
                     </View> 
                        
                        <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Preço de venda"
                                leftIcon={<Foundation name={'pricetag-multiple'}  color={'#8257E5'} size={20}  />}
                          />
                         </View> 
                      
                        <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Preço de custo"
                                leftIcon={<Foundation name={'price-tag'}  color={'#8257E5'} size={20}  />}
                          />
                         </View> 
                         
                        <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Estoque minimo"
                                leftIcon={<AntDesign name={'minus'}  color={'#8257E5'} size={20}  />}
                          />
                         </View> 
                         <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Estoque máximo"
                                leftIcon={<AntDesign name={'plus'}  color={'#8257E5'} size={20}  />}
                          />
                         </View>
                         <Text style={styles.txtCk}>
                              Faz entregas ?
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
                         <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Descrição do produto"
                                leftIcon={<Entypo name={'text'}  color={'#8257E5'} size={20}  />}
                          />
                         </View>
                   </>
                    :
                    <>
                     <View style={styles.grupInfo}>
                         <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Nome do serviço"
                                leftIcon={<Feather name={'tag'}  color={'#8257E5'} size={20}  />}
                         />
                     </View> 
                        
                        <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Preço base"
                                leftIcon={<Foundation name={'pricetag-multiple'}  color={'#8257E5'} size={20}  />}
                          />
                         </View> 
                         <Text style={styles.txtCk}>
                              Aceita o recebimento de propostas de orçamento ?
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

                         <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Descrição"
                                leftIcon={<Entypo name={'text'}  color={'#8257E5'} size={20}  />}
                          />
                         </View>
                    </>
                   } 
                   
  
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

export default CardProduto;