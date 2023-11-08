import { Platform, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native'

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RefreshControl } from 'react-native-gesture-handler';
import { useRef } from 'react';

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null)
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
      loop={true}
      autoPlay={true}
      style={{
        width:100,
        height:90,
        alignSelf:'center'
      }}
      />
    </ScrollView>
  </SafeAreaView>
  );
}


