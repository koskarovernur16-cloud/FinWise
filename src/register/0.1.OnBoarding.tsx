import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

type Props = {
  onNext: () => void;
};

export default function SlideOne({ onNext }: Props) {
  const { width, height } = useWindowDimensions();

  const artSize = Math.min(width * 0.7, height * 0.42);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome To{'\n'}Expense Manager</Text>
      </View>

      <View style={styles.sheet}>
        <View style={styles.spaceTop} />
        <Image
          source={require('../../assets/onboarding-coins.png')}
          style={{ width: artSize, height: artSize }}
        />

        <View style={styles.spaceBottom} />

        <Pressable onPress={onNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#00D09E',
  },

  header: {
    height: '33%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingBottom: 48,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '800',
    color: '#0E3E3E',
    textAlign: 'center',
  },

  sheet: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F1FFF3',
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    paddingBottom: 56,
  },

  spaceTop: {
    flex: 4,
  },

  spaceBottom: {
    flex: 1,
  },

  button: {
    paddingHorizontal: 40,
    paddingVertical: 14,
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0E3E3E',
  },

  dots: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#A8CBB8',
  },

  dotActive: {
    backgroundColor: '#00D09E',
    borderColor: '#00D09E',
  },
});