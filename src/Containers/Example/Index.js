import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Text, TextInput, Button } from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import { navigate } from '@/Navigators/Root'
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IndexExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const token = useSelector((state) => state.login.token)

  useEffect(() => {
    console.log(token)
  }, [])

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
