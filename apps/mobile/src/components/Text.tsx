import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export function DisplayText(props: TextProps) {
  return <RNText {...props} style={[styles.display, props.style]} />;
}

export function Heading(props: TextProps) {
  return <RNText {...props} style={[styles.heading, props.style]} />;
}

export function Body(props: TextProps) {
  return <RNText {...props} style={[styles.body, props.style]} />;
}

export function Caption(props: TextProps) {
  return <RNText {...props} style={[styles.caption, props.style]} />;
}

export function Metric(props: TextProps) {
  return <RNText {...props} style={[styles.metric, props.style]} />;
}

const styles = StyleSheet.create({
  display: { fontSize: 30, fontWeight: '800', color: colors.text, letterSpacing: -0.5 },
  heading: { fontSize: 20, fontWeight: '700', color: colors.text },
  body: { fontSize: 15, lineHeight: 22, color: colors.text },
  caption: { fontSize: 12, lineHeight: 17, color: colors.muted },
  metric: { fontSize: 24, fontWeight: '800', color: colors.dark }
});
