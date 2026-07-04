import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../src/theme/colors';

export default function AssistantScreen() {

    const [response, setResponse] = useState(
        "I can help you understand common pet health risks, prepare for vet visits, track care routines, and make safer decisions for Bella."
      );

      const [question, setQuestion] = useState("");
      const handleSend = () => {
        if (question.trim() === "") return;
      
        setResponse(`You asked: ${question}`);
      
        setQuestion("");
      };
      return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          <Text style={styles.title}>Pawssist Assistant</Text>
          <Text style={styles.subtitle}>Care that knows your pet.</Text>
      
          <View style={styles.card}>
            <Text style={styles.greeting}>Hi Jorge 👋</Text>
            <Text style={styles.question}>How can I help Bella today?</Text>
      
            <TouchableOpacity
              style={styles.suggestion}
              onPress={() =>
                setResponse(
                  "Yes. Watermelon is generally safe for dogs in moderation. Remove seeds and rind before feeding."
                )
              }
            >
              <Text style={styles.suggestionText}>Can Bella eat watermelon?</Text>
            </TouchableOpacity>
      
            <TouchableOpacity
              style={styles.suggestion}
              onPress={() =>
                setResponse(
                  "Bring water on walks, avoid strenuous activity during the hottest hours of the day, and watch for excessive panting, drooling, or lethargy."
                )
              }
            >
              <Text style={styles.suggestionText}>How can I prevent heat risk today?</Text>
            </TouchableOpacity>
      
            <TouchableOpacity
              style={styles.suggestion}
              onPress={() =>
                setResponse(
                  "Bella's rabies booster is due in 18 days. No action is required today, but you may want to schedule an appointment soon."
                )
              }
            >
              <Text style={styles.suggestionText}>When is Bella's next vaccine?</Text>
            </TouchableOpacity>
          </View>
      
          <View style={styles.chatBubble}>
            <Text style={styles.chatLabel}>Pawssist</Text>
            <Text style={styles.chatText}>{response}</Text>
          </View>
      
          <View style={styles.inputRow}>
            <TextInput
             style={styles.input}
             placeholder="Ask Pawssist..."
             placeholderTextColor="#9CA3AF"
             value={question}
            onChangeText={setQuestion}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSend}
            >
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 6,
  },
  question: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 18,
  },
  suggestion: {
    backgroundColor: '#F1F5F9',
    padding: 14,
    borderRadius: 16,
    marginBottom: 10,
  },
  suggestionText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  chatBubble: {
    backgroundColor: '#ECFDF5',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#BBF7D0',
    marginBottom: 20,
  },
  chatLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 8,
  },
  chatText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 15,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
  },
});