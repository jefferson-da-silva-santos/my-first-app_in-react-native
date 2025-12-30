import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'

export default function CustomTabBar({ state, navigation }) {
  return (
    <View style={styles.tabArea}>
      <TouchableOpacity style={styles.tabItem}>
        <AntDesign
          name="bars"
          style={{ fontSize: 32 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItemButtom}>
        <View>
          <Entypo
            name="plus"
            size={40}
          />
        </View>
        <View>
          <MaterialIcons
          name="edit"
          style={{color:'#000'}}
          size={30}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <FontAwesome
          name="user"
          style={{ fontSize: 32 }}
        />
      </TouchableOpacity>
    </View>
  )
}