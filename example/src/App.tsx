import * as React from 'react';

import { StyleSheet, View, Text, Button, NativeModules } from 'react-native';
import { multiply } from 'react-native-awesome-library';

var cameraManager = NativeModules.RNTestModule

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  const onClickCamera = () => {
    console.log('onClickCamera');
    cameraManager.openCamera();
  };

  return (
    <View style={styles.container}>
      <Button title="openCamera" onPress={onClickCamera}> </Button>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
