import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import DoLogout from '@/Store/Login/DoLogout'
import { navigateAndSimpleReset } from '@/Navigators/Root'

const IndexProfileContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const loginData = useSelector((state) => state.login.item)

  useEffect(() => {
    console.log(loginData)
  }, [])

  return (
    <View style={[Layout.fill, Gutters.smallHPadding, Gutters.smallVPadding]}>
      <View style={[Layout.colCenter, Gutters.smallHPadding, { marginTop: 20 }]}>
        <Brand />
      </View>
      <ScrollView>
        <View style={[Gutters.smallHPadding, { marginTop: 40 }]}>
          <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Profile</Text>
        </View>
        <View
          style={[
            Gutters.largeHPadding,
            Gutters.largeVPadding,
            { marginTop: 12, borderColor: 'yellow', backgroundColor: 'white', borderRadius: 8 },
          ]}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'teal', marginTop: 12 }}>
            {'Email'}
          </Text>
          <TextInput
            style={{
              fontSize: 16,
              marginTop: 8,
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              paddingBottom: 4,
              marginBottom: 8,
            }}
            editable={false}
            keyboardType={'email-address'}
            value={loginData.email || 'null'}
            placeholder={'input your email here'}
            placeholderTextColor={'grey'}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'teal', marginTop: 12 }}>
            {'Name'}
          </Text>
          <TextInput
            style={{
              fontSize: 16,
              marginTop: 8,
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              paddingBottom: 4,
              marginBottom: 8,
            }}
            editable={false}
            value={loginData.name || 'John Doe'}
            placeholder={'input your name here'}
            placeholderTextColor={'grey'}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'teal', marginTop: 12 }}>
            {'Phone'}
          </Text>
          <TextInput
            style={{
              fontSize: 16,
              marginTop: 8,
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              paddingBottom: 4,
              marginBottom: 8,
            }}
            editable={false}
            value={loginData.phone || '+62-123123-123123'}
            placeholder={'input your name here'}
            placeholderTextColor={'grey'}
          />
        </View>
      </ScrollView>
      <View style={[Layout.colCenter, Gutters.largeHPadding, { marginTop: 40 }]}>
        <TouchableOpacity
          style={{
            backgroundColor: 'teal',
            paddingVertical: 8,
            paddingHorizontal: 32,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 12,
          }}
          onPress={async () => {
            dispatch(DoLogout.action())
            navigateAndSimpleReset('Login')
          }}
          title="Auto"
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default IndexProfileContainer
