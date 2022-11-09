import React from "react";
import { View, Text, Image } from "react-native";
const BottomTabView = ({ icon,title }) => {
  return (
    
       <View>
      <View style={{justifyContent:'center',flexDirection:'row'}}>
      <Image style={{ margin:5, width: 25, height: 25,resizeMode:'contain' ,tintColor:'gray'}} source={icon} />
</View>
       <Text style={{marginLeft:5,fontSize:12,color:'#1d1d1d'}}>
         {title}
       </Text>
    
    </View>
  );
};

export default BottomTabView;

