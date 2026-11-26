import { useEffect } from 'react';
import {
   Image, 
   StyleSheet,
   Text, 
   View 
  } from 'react-native';

const LOGO = require('../../assets/logo-trend.png');

type Props = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.screen}>
      <Image source={LOGO} style={styles.logo} />
      <Text style={styles.wordmark}>FinWise</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#00D09E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 126,
    tintColor: '#0E3E3E', 
  },
  wordmark: {
    marginTop: 6,
    fontSize: 52,
    fontWeight: '800',
    letterSpacing: -1,
    color: '#FFFFFF',
  },
});
