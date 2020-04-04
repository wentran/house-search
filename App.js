import React, {useState} from 'react';
import { StyleSheet, Text, NavigatorIOS, SafeAreaView,View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  return (
      <SafeAreaView>
        <View style={{ padding: 10 }}>

          <Text style={styles.description}>
           Search for houses to buy
          </Text>
        </View>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  }
});
