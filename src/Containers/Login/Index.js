import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, ActivityIndicator, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import DoLogin from '@/Store/Login/DoLogin'
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'

const IndexLoginContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.item)
  const fetchOneUserLoading = useSelector(
    (state) => state.user.fetchOne.loading,
  )
  const fetchOneUserError = useSelector((state) => state.user.fetchOne.error)

  const [userId, setUserId] = useState('1')

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }
  
  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
        {fetchOneUserLoading && <ActivityIndicator />}
        {fetchOneUserError ? (
          <Text style={Fonts.textRegular}>{fetchOneUserError.message}</Text>
        ) : (
          <Text style={Fonts.textRegular}>{t('example.helloUser', { name: user.name })}</Text>
        )}
      </View>
      <TouchableOpacity style={{ backgroundColor: 'white', paddingTop: 8, paddingHorizontal: 16, borderRadius: 8,  justifyContent: 'center', alignItems: 'center', marginTop: 12 }} onPress={async () => {
            GoogleSignin.configure({
                webClientId: '404901718533-6oh2sbo36b7q1vg5np0idinluh5hop8n.apps.googleusercontent.com',
                offlineAccess: true,
            })
            try {
                await GoogleSignin.hasPlayServices()
                const userInfo = await GoogleSignin.signIn()
                console.log({ userInfo })
                dispatch(DoLogin.action(userInfo.idToken))
              } catch (error) {
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                  // user cancelled the login flow
                } else if (error.code === statusCodes.IN_PROGRESS) {
                  // operation (e.g. sign in) is in progress already
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                  // play services not available or outdated
                } else {
                  // some other error happened
                }
              }
      }} title="Auto">
        <Text style={{ color: 'blue' }}>Google</Text>
      </TouchableOpacity>
    </View>
  )
}

export default IndexLoginContainer
