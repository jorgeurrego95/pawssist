import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './Card';
import { Body, Heading } from './Text';
import { colors } from '../theme/colors';

type Props = { title: string; body: string; icon?: keyof typeof Ionicons.glyphMap };

export function InsightCard({ title, body, icon = 'sparkles' }: Props) {
  return (
    <Card>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Ionicons name={icon} size={20} color={colors.primary} />
        </View>
        <View style={styles.copy}>
          <Heading>{title}</Heading>
          <Body style={styles.body}>{body}</Body>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 14 },
  icon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.lightMint },
  copy: { flex: 1 },
  body: { marginTop: 6, color: colors.muted }
});
