import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Text, TextInput, TouchableOpacity } from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import DoLogin from '@/Store/Login/DoLogin'
import SaveToken from '@/Store/Login/SaveToken'
import { navigateAndSimpleReset } from '@/Navigators/Root'

const IndexLoginContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const loginData = useSelector((state) => state.login.item)
  const loginLoading = useSelector((state) => state.login.doLogin.loading)
  const loginError = useSelector((state) => state.login.doLogin.error)

  const [userId, setUserId] = useState('1')

  const [username, changeUsername] = useState(null)
  const [password, changePassword] = useState(null)

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }

  if (loginData && loginData.email) {
    dispatch(SaveToken.action({ token: loginData.email }))
    navigateAndSimpleReset('Main')
  }

  if (loginError) {
    console.log(loginError)
  }

  return (
    <View style={[Layout.fill, Gutters.smallHPadding, Gutters.smallVPadding]}>
      <View style={[Layout.colCenter, Gutters.smallHPadding, { marginTop: 20 }]}>
        <Brand />
      </View>
      <View style={[Gutters.smallHPadding, { marginTop: 40 }]}>
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Sign In</Text>
      </View>
      <View style={[Gutters.smallHPadding, { marginTop: 40 }]}>
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
          keyboardType={'email-address'}
          value={username}
          onChangeText={changeUsername}
          placeholder={'input your email here'}
          placeholderTextColor={'grey'}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'teal', marginTop: 12 }}>
          {'Password'}
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
          secureTextEntry={true}
          value={password}
          onChangeText={changePassword}
          placeholder={'input your password here'}
          placeholderTextColor={'grey'}
        />
      </View>
      <View style={[Layout.colCenter, Gutters.largeHPadding, { marginTop: 40 }]}>
        <ActivityIndicator size={'large'} animating={loginLoading} />
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
            dispatch(DoLogin.action(username, password))
          }}
          title="Auto"
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 32,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 12,
          }}
          onPress={async () => {
            dispatch(DoLogin.action(username, password))
          }}
          title="Auto"
        >
          <Text style={{ color: 'teal', fontSize: 20 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default IndexLoginContainer
