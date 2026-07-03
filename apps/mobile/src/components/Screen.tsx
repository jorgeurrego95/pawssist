import { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

type Props = { children: ReactNode; scroll?: boolean };

export function Screen({ children, scroll = true }: Props) {
  if (!scroll) {
    return <SafeAreaView style={styles.safe}><View style={styles.content}>{children}</View></SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.surface },
  content: { padding: 20, paddingBottom: 32 }
});
