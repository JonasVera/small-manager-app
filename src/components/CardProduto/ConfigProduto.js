import React,{useState} from 'react';
import {View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-community/picker';
import { FontAwesome5,AntDesign,Entypo,Foundation,Feather,MaterialCommunityIcons } from "@expo/vector-icons";
import styles from './styles';
import { Input } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import { Avatar, Accessory } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
function ConfigProduto(){
    const navigation = useNavigation();
    const [formProduto,setFormProduto] = useState(false);
    const [btnActive,setBtnActive] = useState('bntActive'); 
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };

      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('date');
      };

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
                     <Text style={styles.textHeader}> Configurações </Text>
                 </View>
                 <View style={styles.formLogin}>
                    <View style={styles.grupTpProduto}>
                         <TouchableOpacity onPress={()=>trocaForm("Produto")}    style={styles.bntTpProduto}>
                                <Text style={styles.txtPromo}>
                                        Lançar Promoções
                              </Text>
                         </TouchableOpacity>
                         <TouchableOpacity  onPress={()=>trocaForm("Servico")}  style={styles.bntTpProduto}>
                            <Text style={styles.txtEntrar}>
                               
                                     Meus Produtos
                                   </Text>
                                   </TouchableOpacity>
                    </View>

                   {formProduto == true ? 
                   <> 
                     <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Nome da promoção"
                                leftIcon={<Foundation name={'pricetag-multiple'}  color={'#8257E5'} size={20}  />}
                          />
                         </View>  
                         <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="% Desconto"
                                leftIcon={<Foundation name={'pricetag-multiple'}  color={'#8257E5'} size={20}  />}
                          />
                         </View> 
                          
                         <View  style={styles.inputHr}>
                         <Input style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                 placeholder="Data inicial"
                                 leftIcon={<AntDesign onPress={()=>showDatepicker()} name={'clockcircleo'} color={'#8257E5'}size={18}  />}
                         />
                         <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                 placeholder="Data final"
                                 leftIcon={<AntDesign onPress={showTimepicker} name={'clockcircleo'} color={'#8257E5'}size={18}  />}
                         />
                </View>
              
            {show && (
                 <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                   />
                )} 
                         <View style={styles.grupInfo}>
                          <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                                placeholder="Descrição"
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
                        
                    </>
                   } 
                    
                   <TouchableOpacity  onPress={()=> updateUser()} style={styles.btnEdit}>
                       
                        <Text style={styles.txtEntrar}>
                            <FontAwesome5 name={'check'}  color={'#fff'} size={20}  />
                                Lançar Promoção
                        </Text>
                    </TouchableOpacity>
                    
                    
                 </View>
                
                   
                  
            </View>
        </View>
    );
}

export default ConfigProduto;