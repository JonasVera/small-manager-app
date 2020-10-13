import React,{useState} from 'react';
import {View,Switch,Text,ActivityIndicator,Picker} from 'react-native';
 
import { Image } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import { FontAwesome5,MaterialCommunityIcons,AntDesign,Entypo,Feather} from "@expo/vector-icons";
import styles from '../styles';
import { Avatar, Accessory } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

import { TouchableOpacity } from "react-native-gesture-handler";
 
 
function ItemFuncionamento(){
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
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
        showMode('time');
      };

    return ( 
        <View style={styles.grupFuncionamento}> 
          <View style={styles.itemAddFuncionamento}>
          <Picker
            
            selectedValue={selectedValue}
             style={{ height: 50, width:100,}}
             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
             <Picker.Item disabled label="Dia" value="" />
             <Picker.Item label="Segunda-Feira" value="Seg" />
             <Picker.Item label="Terça-Feira" value="Ter" />
             <Picker.Item label="Quarta-Feira" value="Qua" />
             <Picker.Item label="Quinta-Feira" value="Qui" />
             <Picker.Item label="Sexta-Feira" value="Sex" />
             <Picker.Item label="Sábado" value="Sab" />
             <Picker.Item label="Domingo" value="Dom" />
          </Picker>
         
        </View> 
        
         <View style={styles.itemAddFuncionamento}>
         <View  style={styles.inputHr}>
                     <Input  style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                        placeholder="Inicio"
                        leftIcon={<AntDesign onPress={showTimepicker} name={'clockcircleo'} color={'#8257E5'}size={18}  />}
                     />
                </View>
                
                  <View  style={styles.inputHr}>
                     <Input   style={{color:'#8257E5',fontFamily:'Poppins_400Regular',}} 
                        placeholder="Fim"
                        leftIcon={<AntDesign onPress={showTimepicker} name={'clockcircleo'} color={'#8257E5'}size={18}  />}
                     />
                </View>
                <TouchableOpacity  style={styles.btnContactClose} >
                    <AntDesign  name={'closecircleo'}  color={'#8257E5'} size={25}   />
                </TouchableOpacity>
                <TouchableOpacity   >
                     <AntDesign  name={'closecircleo'}  color={'#DC143C'} size={25}   />
                </TouchableOpacity>
                
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
                        
   </View> 
   <View style={styles.itemAddFuncionamento}>
                
                    
   </View>   
   </View>
           
    );
}

export default ItemFuncionamento;