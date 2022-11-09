import { View, Text,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { Input, Icon } from '@rneui/themed';

// import { TextInput } from 'react-native-paper';

const Login = ({navigation}) => {
  const [loginData, setLoginData] = React.useState({
    passwrd: "",
    phoneN: "",
  });
  const [mob,setMob]=React.useState("0");
  const [pass,setPass] = React.useState("1");

  const checkData=() => {
    if(loginData.phoneN.length == 0 || loginData.passwrd.length == 0)
    {
      Alert.alert("Warning","Please fill Mobile Number or Password");
    }
    else{
      if(loginData.phoneN !== mob)
      {
       Alert.alert("Warning","Check the Mobile Number");
      }
      else if(loginData.passwrd !== pass)
      {
       Alert.alert("Warning","Check the Password");
      }
      else if(loginData.phoneN == mob && loginData.passwrd == pass){
      navigation.navigate('Dashboard');
      }
      else{
       Alert.alert("Warning","Please enter the valid credentials");
      }
    }
  }
  return (
    <>
    <View style={{backgroundColor:'#32ddf0',height:60,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>Login</Text>
    </View>
    <View style={{margin:24 }} >
    {/* <Input
  placeholder='Phone Number'
  style={{}}
  maxLength={10}
  onChangeText={(text) => {
    setLoginData({ ...loginData, phoneN: text });
  }}
/>
<Input
      placeholder='Password'
  secureTextEntry={true}
  maxLength={8}
  onChangeText={(text) => {
    setLoginData({ ...loginData,passwrd: text });
  }}
    /> */}
    <TextInput
      mode='flat'
 backgroundColor='#e1f5f0'
 underlineColor='#32ddf0'
      label="Phone Number"
      onChangeText={(text) => {
        setLoginData({ ...loginData,phoneN: text });
      }}
      maxLength={10}
      activeUnderlineColor="#32ddf0"
      placeholder="Type Phone Number"
      right={<TextInput.Affix text="/10" />}
  
    />
       <TextInput
       style={{marginTop:30}}
      mode='flat'
      activeUnderlineColor="#32ddf0"
      underlineColor='#32ddf0'
      backgroundColor='#e1f5f0'
 
      label="Password"
      onChangeText={(text) => {
        setLoginData({ ...loginData,passwrd: text });
      }}
      maxLength={10}
      placeholder="Type Password"
      right={<TextInput.Affix text="/8" />}
      
    />
</View>
<TouchableOpacity
          onPress={() => {
            // navigation.navigate("DashBoard");
            checkData();
          }}
        >
          <View
            style={{
              backgroundColor: "#50AFE4",
              borderRadius: 25,
              marginTop: 5,backgroundColor:'#32ddf0',
              height:43,width:180,justifyContent:'center',alignItems:'center',alignSelf:'center'
            }}
          >
            <Text
             style={{fontSize:18,fontWeight:'bold',color:'white'}}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>
    </>
  )
}

export default Login