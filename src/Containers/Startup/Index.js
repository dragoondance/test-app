import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTheme } from '@/Theme'
import { useDispatch, useSelector } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'
import Auth from '@/Store/Startup/Auth'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'

const IndexStartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()
  const token = useSelector((state) => state.login.token)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('testttt')
    console.log({ token })
    if (token === null) {
      dispatch(Auth.action())
    } else {
      dispatch(InitStartup.action())
    }
  }, [])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={Gutters.largeVMargin} />
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
    </View>
  )
}

export default IndexStartupContainer
