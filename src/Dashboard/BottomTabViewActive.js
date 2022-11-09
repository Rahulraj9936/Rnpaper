import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const BottomTabViewActive = ({ icon, title }) => {
  return (
    <View>
      <View style={{justifyContent:'center',flexDirection:'row'}}>
      <Image style={{ margin:5, width: 35, height: 35,resizeMode:'contain',tintColor:'#50AFE4' }} source={icon} />
</View>
      <Text style={{color:'#50AFE4',fontSize:14,marginLeft:5}}>
        {title}
      </Text>
        
    </View>
  );
};

export default BottomTabViewActive;


