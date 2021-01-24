import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import FetchAllChats from '@/Store/Chat/FetchAllChats'
import PostChat from '@/Store/Chat/PostChat'
import SaveNewChat from '@/Store/Chat/SaveNewChat'
import { goBack } from '../../Navigators/Root'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const IndexChatContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const loginData = useSelector((state) => state.login.item)

  const [textMessage, changeTextMessage] = useState(null)

  const chats = useSelector((state) => state.chat.item)
  const newChat = useSelector((state) => state.chat.newChat)
  const newChatLoading = useSelector((state) => state.chat.postChat.loading)
  const chatsLoading = useSelector((state) => state.chat.fetchAllChats.loading)

  useEffect(() => {
    dispatch(FetchAllChats.action())
  }, [])

  if (newChat && newChat.name !== null) {
    dispatch(SaveNewChat.action(newChat))
    changeTextMessage(null)
  }

  return (
    <View style={[Layout.fill, Gutters.smallHPadding, Gutters.smallVPadding]}>
      <View style={[Layout.smallHPadding, Layout.smallVPadding, { flex: 1 }]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            paddingBottom: 8,
          }}
        >
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <TouchableOpacity
              onPress={() => goBack()}
              style={{ padding: 8, borderWidth: 1, borderRadius: 4 }}
            >
              <Text style={{ colors: 'teal', fontWeight: 'bold', fontSize: 16 }}>{'Back'}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 5, marginLeft: 8 }}>
            <Text style={{ fontSize: 20, color: 'teal' }}>Chat</Text>
          </View>
        </View>
      </View>
      <View style={[Gutters.smallHPadding, { flex: 10 }]}>
        <ScrollView>
          {(chatsLoading || newChatLoading) && <ActivityIndicator size={'large'} color={'teal'} />}
          {chats &&
            chats.length > 0 &&
            chats.map((v) => {
              let imageData = null
              if (v && v.email && v.email === loginData.email) {
                if (v.message.includes('image-')) {
                  const messageObj = v.message.split('image-')
                  imageData = messageObj[1]
                }
                return (
                  <View style={{ alignItems: 'flex-end', marginTop: 8, width: '100%' }}>
                    <View
                      style={{
                        padding: 8,
                        backgroundColor: 'white',
                        borderColor: 'teal',
                        borderRadius: 8,
                        width: '50%',
                      }}
                    >
                      {imageData ? (
                        <Image source={{ uri: `data:image/png;base64,${imageData}` }} style={{ height: 80, width: '100%' }} />
                      ) : (
                        <View
                          style={{
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                          }}
                        >
                          <Text style={{ fontSize: 12, color: 'teal' }}>{`${v.message}`}</Text>
                        </View>
                      )}
                      <View
                        style={{
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                        }}
                      >
                        <Text style={{ fontSize: 8, color: 'black', marginTop: 4 }}>
                          {v.date_time}
                        </Text>
                      </View>
                      
                      <View
                        style={{
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                        }}
                      >
                        <Text style={{ fontSize: 8, color: 'teal', marginTop: 4 }}>{v.name}</Text>
                      </View>
                    </View>
                  </View>
                )
              } else {
                if (v && v.message && v.message.includes('image-')) {
                  const messageObj = v.message.split('image-')
                  imageData = messageObj[1]
                }
                return (
                  <View style={{ alignItems: 'flex-start', marginTop: 8, width: '100%' }}>
                    <View
                      style={{ padding: 8, backgroundColor: 'teal', borderRadius: 8, width: '50%' }}
                    >
                      {imageData ? (
                        <Image source={{ uri: imageData }} style={{ height: 80, width: 140 }} />
                      ) : (
                        <Text style={{ fontSize: 12, color: 'white' }}>{`${v.message}`}</Text>
                      )}
                      <View
                        style={{
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}
                      >
                        <Text style={{ fontSize: 8, color: 'black', marginTop: 4 }}>
                          {v.date_time}
                        </Text>
                      </View>
                      <View
                        style={{
                          justifyContent: 'flex-end',
                          alignItems: 'flex-end',
                        }}
                      >
                        <Text style={{ fontSize: 8, color: 'white', marginTop: 4 }}>{v.name}</Text>
                      </View>
                    </View>
                  </View>
                )
              }
            })}
        </ScrollView>
      </View>
      <View
        style={[
          Layout.smallVPadding,
          {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            alignItems: 'center',
          },
        ]}
      >
        <View style={{ flex: 1, marginHorizontal: 12 }}>
          <TouchableOpacity
            onPress={() => {
              launchImageLibrary(
                {
                  mediaType: 'photo',
                  includeBase64: true,
                  quality: 0.3,
                },
                (value) => {
                  if (value.base64 !== '' && value.base64 !== null) {
                    const payload = {
                      name: loginData.name,
                      email: loginData.email,
                      message: `image-${value.base64}`,
                    }
                    dispatch(PostChat.action(payload))
                  }
                }
              )
            }}
            style={{ padding: 8, borderRadius: 8 }}
          >
            <Image
              source={require('@/Assets/Images/attach.png')}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 8, marginHorizontal: 12 }}>
          <TextInput
            placeholderTextColor={'brown'}
            placeholder={'type message here'}
            value={textMessage}
            onChangeText={changeTextMessage}
            style={{ padding: 8, borderColor: 'teal', borderWidth: 1, borderRadius: 8 }}
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 12 }}>
          <TouchableOpacity
            onPress={() => {
              if (textMessage.length > 4) {
                const payload = {
                  name: loginData.name,
                  email: loginData.email,
                  message: textMessage,
                }
                dispatch(PostChat.action(payload))
              } else {
                alert('please type message at least 5 characters')
              }
            }}
            style={{ padding: 8, borderRadius: 8 }}
          >
            <Image source={require('@/Assets/Images/send.png')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default IndexChatContainer
