import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import { navigate } from '@/Navigators/Root'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IndexExampleContainer = () => {
  const { Common, Gutters, Layout } = useTheme()

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[Layout.colCenter, Gutters.smallHPadding]}>
        <Brand />
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      ></View>
      <TouchableOpacity
        onPress={() => {
          navigate('Chat')
        }}
        style={{
          backgroundColor: 'blue',
          paddingVertical: 16,
          paddingHorizontal: 24,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>Chat</Text>
      </TouchableOpacity>
    </View>
  )
}

export default IndexExampleContainer
