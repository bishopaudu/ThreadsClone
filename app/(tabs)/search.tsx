import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
