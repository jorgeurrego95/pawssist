import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';

type Props = {
  label: string;
  variant?: 'primary' | 'cta' | 'quiet';
  onPress?: () => void;
};

export function Button({ label, variant = 'primary', onPress }: Props) {
  return (
    <Pressable style={[styles.button, styles[variant]]} onPress={onPress}>
      <Text style={[styles.text, variant === 'quiet' && styles.quietText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { borderRadius: radius.md, paddingVertical: 14, paddingHorizontal: 18, alignItems: 'center' },
  primary: { backgroundColor: colors.primary },
  cta: { backgroundColor: colors.cta },
  quiet: { backgroundColor: colors.lightMint },
  text: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
  quietText: { color: colors.dark }
});
