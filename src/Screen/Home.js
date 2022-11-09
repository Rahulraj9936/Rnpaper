import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { pencil, pencile, telephone } from '../assets/Index'
import { validate } from 'react-native-web/dist/cjs/exports/StyleSheet/validate'

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
const [showOption,setShowOption] = useState(false)
  const Data = [{
    id: 1,
    name: 'Paras Jai', Status: 'Completed'
  },
  {
    id: 2,
    name: 'Rahul Jain', Status: 'Not Present'
  },
  {
    id: 3,
    name: 'Kamal Jain', Status: 'waiting'
  },
  {
    id: 4,
    name: 'Raman Jain', Status: 'Completed'
  },
  {
    id: 5,
    name: 'Paras Jain', Status: 'In Progress'
  },
  {
    id: 6,
    name: 'Sameer Jain', Status: 'Booked'
  }, 
    { id: 7,
  name: 'Paras Jain', Status: 'Completed'
},
{
  id: 8,
  name: 'Rahul Jain', Status: 'Not Present'
},
{
  id: 9,
  name: 'Kamal Jain', Status: 'waiting'
},
{
  id: 10,
  name: 'Raj Jain', Status: 'Completed'
},
{
  id: 11,
  name: 'Paras Jain', Status: 'In Progress'
},
{
  id: 12,
  name: 'Ram Jain', Status: 'Booked'
},
{
  id: 13,
  name: 'Kaml Jain', Status: 'waiting'
},
{
  id: 14,
  name: 'Ram Jain', Status: 'Completed'
},
{
  id: 15,
  name: 'Paras Jain', Status: 'In Progress'
},
{
  id: 16,
  name: 'Samer Jain', Status: 'Booked'
}
  ]

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1.4,
          width: "100%",
          marginLeft: 25,
          backgroundColor: 'black'
        }}
      />


    )
  }
  const Item = ({ item }) => (




    <View style={{ flexDirection: 'row', margin: 5 ,flex:1}}>
      <View style={{ marginLeft: 18 }}>
        <View >

          <Text style={{ fontSize: 16 }}>
            <Text>
              {item.id}.
            </Text>
            {item.name}
          </Text>
        </View>
        <View style={{alignSelf:'center',marginTop:5}}>
          <Text style={{fontWeight:'500', fontSize: 15, backgroundColor: ((item.Status == "Completed") ? "#f58e98" : (item.Status == "Not Present") ? "#ccc6c6" : (item.Status == "waiting") ? "#f5daab" : (item.Status == "Booked") ? "#d99eca" : (item.Status == "In Progress") ? "#baf7f7" : 'white'), height: 25, width: 100, borderRadius: 20,textAlign:'center' ,color: ((item.Status == "Completed") ? "#b00415" : (item.Status == "Not Present") ? "#4d4949" : (item.Status == "waiting") ? "#b57404" : (item.Status == "Booked") ? "#bf0290" : (item.Status == "In Progress") ? "#027373" : 'white'),borderColor: ((item.Status == "Completed") ? "#b00415" : (item.Status == "Not Present") ? "#4d4949" : (item.Status == "waiting") ? "#b57404" : (item.Status == "Booked") ? "#bf0290" : (item.Status == "In Progress") ? "#027373" : 'white'),borderWidth:1.5,padding:1.3}}>
            {item.Status}
          </Text>
        </View>

      </View>
      <View style={{ flexDirection: 'row',marginLeft:'40%'}}>
        <TouchableOpacity>
        <Image
          style={{
            resizeMode: "contain",
            marginRight: 20,
            height:35,
            width:35
          }}
          source={pencil}
        />
        </TouchableOpacity>
       <TouchableOpacity>
 <Image
          style={{
            resizeMode: "contain",
            height:35,width:35

          }}
          source={telephone}
        />
       </TouchableOpacity>
       
      </View>
    </View>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  return (
    <>
    
      <View style={{ backgroundColor: '#32ddf0', height: 60, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, fontWeight: '600', color: 'white' }}>Today's Booking</Text>
      </View>
      <View style={{ margin: 16, borderColor: 'black', borderWidth: 0.7 }}>
        <TouchableOpacity style={{ backgroundColor: 'red', height: 36, alignItems: 'flex-start', justifyContent: 'center' }}  activeOpacity={0.8} onPress ={()=>setShowOption(!showOption)}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 16, marginLeft: 15, fontWeight: '600', color: 'white' }}>
              02:00 PM - 04:00 PM
            </Text>
            <Image
              style={{
                height: 25, marginLeft: 150,
                width: 25,
                resizeMode: "contain",
                tintColor: 'white'
              }}
              source={pencil}
            /></View>
        </TouchableOpacity>
        {showOption && (<View style={{ marginBottom: 10 ,height:'100%'}}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemDivider}
          extraData={selectedId}
        />
      </View>)}
      </View>
      <View style={{ marginLeft: 15, marginRight: 15, marginTop: 15, borderColor: 'black', borderWidth: 0.7 }}>
        <TouchableOpacity style={{ backgroundColor: '#96999e', height: 36, alignItems: 'flex-start', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 16, marginLeft: 15, fontWeight: '600', color: 'white' }}>
              04:00 PM - 06:00 PM
            </Text>
            <Image
              style={{
                height: 25, marginLeft: 150,
                width: 25,
                resizeMode: "contain",
                tintColor: 'white'
              }}
              source={pencil}
            /></View>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 15, marginRight: 15, marginTop: 27, borderColor: 'black', borderWidth: 0.7 }}>
        <TouchableOpacity style={{ backgroundColor: '#96999e', height: 36, alignItems: 'flex-start', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ fontSize: 16, marginLeft: 15, fontWeight: '600', color: 'white' }}>
              06:00 PM - 08:00 PM
            </Text>
            <Image
              style={{
                height: 25, marginLeft: 150,
                width: 25,
                resizeMode: "contain",
                tintColor: 'white'
              }}
              source={pencil}
            /></View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Home