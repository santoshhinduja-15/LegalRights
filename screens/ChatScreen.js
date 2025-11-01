import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! You can ask about Consumer Rights, Property Laws, Cyber Safety, or Women Protection — I’ll reply in your language and explain step-by-step.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const flatListRef = useRef();

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  // --- Language Detection ---
  const detectLanguage = (text) => {
    const marathi = ["majha", "karu", "jhala", "kaay", "tumcha"];
    const hinglish = ["mera", "adhikar", "kaise", "karna", "nahi", "hai"];
    const lower = text.toLowerCase();
    if (marathi.some((w) => lower.includes(w))) return "marathi";
    if (hinglish.some((w) => lower.includes(w))) return "hinglish";
    return "english";
  };

  // --- Keyword Groups ---
  const consumerKeywords = [
    "consumer", "product", "refund", "seller", "defective",
    "warranty", "replacement", "fraud", "complaint", "service"
  ];
  const propertyKeywords = [
    "property", "land", "rent", "tenant", "owner", "lease",
    "agreement", "eviction", "registry", "sale", "flat"
  ];
  const cyberKeywords = [
    "cyber", "hack", "scam", "account", "online", "data",
    "phishing", "fraud", "identity", "hacked", "instagram", "facebook"
  ];
  const womenKeywords = [
    "harass", "abuse", "violence", "molest", "rape", "dowry",
    "domestic", "stalking", "verbal", "touch", "workplace", "office"
  ];

  const containsKeyword = (text, keywords) =>
    keywords.some((word) => text.includes(word));

  // --- Main Bot Reply Function ---
  const getBotReply = (text, lang) => {
    const lower = text.toLowerCase();

    // ✅ Consumer Law
    if (containsKeyword(lower, consumerKeywords)) {
      if (lang === "english")
        return `Applicable Law: Consumer Protection Act, 2019 (Section 2 & 6)
If a product is defective or the seller refuses refund:
1. Contact the seller or company and request a replacement or refund.
2. If denied, file a complaint on consumerhelpline.gov.in.
3. Visit your nearest District Consumer Forum with the bill and proof.
Example: If you bought a mobile and the seller refused refund for a faulty device, you can demand replacement and also claim compensation for mental stress.`;
      if (lang === "hinglish")
        return `Law: Consumer Protection Act, 2019 (Section 2 & 6)
Agar product defective hai ya seller refund deny karta hai:
1. Pehle seller/company ko contact karo aur refund ya replacement maango.
2. Agar solve nahi hota toh consumerhelpline.gov.in pe complaint file karo.
3. Bill aur warranty proof ke sath Consumer Forum jao.
Example: Agar aapne phone kharida aur wo kharab nikla, toh aapko refund aur mental stress ka compensation mil sakta hai.`;
      return `Kayda: Consumer Protection Act, 2019 (Section 2 & 6)
Jar vastu defective asel kiwa vikreta refund deny kart asel tar:
1. Company la contact kara ani refund kiwa replacement maanga.
2. Jar madat nahi milali tar consumerhelpline.gov.in var complaint kara.
3. Bill ani proof gheun District Consumer Forum madhe jaa.
Udaharan: Jar tumhi mobile ghata ani vikreta refund deny karto, tar tumhala replacement ani compensation milel.`;
    }

    // ✅ Property Law
    if (containsKeyword(lower, propertyKeywords)) {
      if (lang === "english")
        return `Applicable Law: Transfer of Property Act, 1882 & Rent Control Act
If your tenant hasn’t paid rent:
1. Send a written notice giving them 15–30 days to pay.
2. If still unpaid, file an eviction suit under the Rent Control Act.
3. Keep rent agreement and previous payment proof ready.
Example: If your tenant didn’t pay rent for 6 months, the court can order eviction and recovery of pending rent.`;
      if (lang === "hinglish")
        return `Law: Transfer of Property Act, 1882 & Rent Control Act
Agar tenant 6 months se rent nahi de raha:
1. Usko written notice do (15–30 days ka time do).
2. Agar fir bhi nahi deta toh Rent Control Act ke under eviction case file karo.
3. Agreement aur payment proofs ready rakho.
Example: Court tenant ko rent pay karne aur house vacant karne ka order de sakta hai.`;
      return `Kayda: Transfer of Property Act, 1882 ani Rent Control Act
Jar bhadekaru 6 mahinepasun rent bharat nasel tar:
1. Likhi notice dya (15–30 divasacha avadhi dya).
2. Jar rent nahi bharla tar Rent Control Act antargat eviction case file kara.
3. Agreement ani bhadya cha proof ready theva.
Udaharan: Court tenant la rent bharayla ani ghar khali karayla order deu shakto.`;
    }

    // ✅ Cyber Law
    if (containsKeyword(lower, cyberKeywords)) {
      if (lang === "english")
        return `Applicable Law: IT Act, 2000 (Sections 66C, 66D)
If your account is hacked:
1. Report it at cybercrime.gov.in.
2. Attach screenshots and proofs.
3. Inform your contacts not to engage with the hacker.
4. File an FIR under Section 66C for identity theft.
Example: If someone hacked your Instagram, you can report it and get it recovered through the Cyber Cell.`;
      if (lang === "hinglish")
        return `Law: IT Act, 2000 (Section 66C, 66D)
Agar aapka account hack ho gaya hai:
1. cybercrime.gov.in pe complaint file karo.
2. Screenshot aur proof attach karo.
3. Apne doston ko batao ki fake account ignore karein.
4. Police station me FIR karao under Section 66C (identity theft).
Example: Instagram account hack hone par Cyber Cell me report karke recover kar sakte ho.`;
      return `Kayda: IT Act, 2000 (Section 66C, 66D)
Jar tumcha account hack jhala asel tar:
1. cybercrime.gov.in var complaint kara.
2. Screenshot ani proof attach kara.
3. Mitranna sangaa ki fake account ignore karava.
4. Section 66C antargat FIR kara (identity theft sathi).
Udaharan: Instagram account hack jhalyas Cyber Cell madhun recover karta yeil.`;
    }

    // ✅ Women Safety
    if (containsKeyword(lower, womenKeywords)) {
      if (lang === "english")
        return `Applicable Law: IPC Sections 354, 509 & Domestic Violence Act, 2005
If a woman faces harassment:
1. File an FIR under Section 354 (molestation) or 509 (verbal abuse).
2. At workplace, report to Internal Complaints Committee (POSH Act).
3. You can call helpline 1091 for immediate help.
Example: If someone harasses a woman in office, employer must act within 10 days under POSH guidelines.`;
      if (lang === "hinglish")
        return `Law: IPC Sections 354, 509 & Domestic Violence Act, 2005
Agar koi mahila ke sath harassment hua:
1. Section 354 ya 509 ke tahat FIR file karo.
2. Agar office me hua toh POSH Act ke tahat complaint do.
3. 1091 women helpline pe call karo.
Example: Office me harassment hone par employer ko 10 din me action lena hota hai.`;
      return `Kayda: IPC Section 354, 509 ani Domestic Violence Act, 2005
Jar mahilevar harassment jhala asel tar:
1. Section 354 kiwa 509 antargat FIR kara.
2. Office madhye POSH Act pramane complaint kara.
3. 1091 women helpline var call kara.
Udaharan: Office madhye harassment jhalyas employer la 10 divasat action ghaycha asto.`;
    }

    // ⚠️ Fallback
    if (lang === "english")
      return "That’s an interesting situation! It doesn’t clearly fall under any specific legal category I handle (Consumer, Property, Cyber, or Women Safety). You can still consult a local legal advisor for accurate guidance.";
    if (lang === "hinglish")
      return "Yeh situation thoda alag lagta hai. Ye directly Consumer, Property, Cyber ya Women Safety se related nahi hai. Better hoga agar aap kisi legal advisor se discuss karo.";
    return "He paristiti thodi vegli aahe. Hi Consumer, Property, Cyber kiwa Women Safety category madhye yet nahi. Krupaya local lawyer kade salah ghya.";
  };

  // --- Send Message ---
  const sendMessage = () => {
    if (!input.trim()) return;
    const lang = detectLanguage(input);
    const newMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, newMsg]);
    const botReply = getBotReply(input, lang);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: botReply, sender: "bot" },
      ]);
    }, 400);
    setInput("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF9E5" }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageBubble,
                item.sender === "user"
                  ? styles.userBubble
                  : styles.botBubble,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={styles.chatContainer}
        />

        <View style={styles.inputContainer}>
          <Ionicons name="chatbox-ellipses-outline" size={22} color="#FFD85E" style={{ marginRight: 6 }} />
          <TextInput
            style={styles.input}
            placeholder="Type your question..."
            placeholderTextColor="#888"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  chatContainer: { padding: 15, paddingBottom: 80 },
  messageBubble: {
    padding: 12,
    marginVertical: 6,
    maxWidth: "80%",
    borderRadius: 15,
  },
  userBubble: {
    backgroundColor: "#FFD85E",
    alignSelf: "flex-end",
  },
  botBubble: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    borderColor: "#FFD85E",
    borderWidth: 1,
  },
  messageText: { fontSize: 15, color: "#1E3D59" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#1E3D59",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#333",
    minHeight: 40,
    maxHeight: 100,
    textAlignVertical: "top",
  },
  sendButton: {
    backgroundColor: "#FFD85E",
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
});