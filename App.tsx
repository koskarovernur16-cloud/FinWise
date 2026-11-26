import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import SplashScreen from './src/register/launch';
import SlideOne from './src/register/0.1.OnBoarding';
import SlideTwo from './src/register/0.2.OnBoarding';

export default function App() {
  const [screen, setScreen] = useState('splash');

  return (
    <>
      <StatusBar style="dark" />

      {screen === 'splash' && (
        <SplashScreen onFinish={() => setScreen('onboarding1')} />
      )}

      {screen === 'onboarding1' && (
        <SlideOne onNext={() => setScreen('onboarding2')} />
      )}

      {screen === 'onboarding2' && (
        <SlideTwo onNext={() => console.log('Онбординг завершён')} />
      )}
    </>
  );
}