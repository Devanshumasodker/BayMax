import Tts from 'react-native-tts';

export const initiazeTTSListeners = async () => {
  Tts.getInitStatus().then(
    () => {
      console.log('TTS is ready');
    },
    err => {
      if (err.code === 'no_engine') {
        console.log('No TTS engine installed 💀');
        Tts.requestInstallEngine();
      }
    },
  )

  
};
