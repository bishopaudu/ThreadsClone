import { Platform, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native'
import * as React from 'react'

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RefreshControl } from 'react-native-gesture-handler';
import { useRef } from 'react';
import { ThreadsContext } from '../../context/threadContext';
import ThreadsItem from '../../components/ThreadsItem';

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null)
  const threads = React.useContext(ThreadsContext)
  return (
  <SafeAreaView>
    <ScrollView contentContainerStyle={{
      paddingHorizontal:10,
      paddingTop:Platform.select({android:30})
    }}
    refreshControl={<RefreshControl 
      onRefresh={() => {
        animationRef.current?.play()
      }}
      tintColor={'transparent'}
      refreshing={false}/>}
    >
      <Lottie
      ref={animationRef}
      source={require('../../lottieAnimations/threadsAnim.json')}
      loop={false}
      autoPlay={true}
      style={{
        width:100,
        height:90,
        alignSelf:'center'
      }}
      />
      {threads.map((thread) => (
        <ThreadsItem key={thread.id} {...thread}/>
      ) )}
    </ScrollView>
  </SafeAreaView>
  );
}


