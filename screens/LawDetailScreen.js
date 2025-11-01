import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LawDetailScreen({ route, navigation }) {
  const { law } = route.params;
  const [language, setLanguage] = useState("hinglish");

  const getDetail = () => {
    if (language === "english") return getLawDetailEnglish(law.title);
    if (language === "marathi") return getLawDetailMarathi(law.title);
    return getLawDetailHinglish(law.title);
  };

  const getScenario = () => {
    if (language === "english") return getScenarioEnglish(law.title);
    if (language === "marathi") return getScenarioMarathi(law.title);
    return getScenarioHinglish(law.title);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="#1E3D59" />
        </TouchableOpacity>

        <Ionicons name={law.iconName || "information-circle-outline"} size={70} color="#1E3D59" />

        <TouchableOpacity onPress={() => navigation.navigate("Chatbot")} style={styles.iconButton}>
          <Ionicons name="chatbubbles" size={36} color="#1E3D59" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>{law.title}</Text>

      <View style={styles.langContainer}>
        {["hinglish", "english", "marathi"].map((lang) => (
          <TouchableOpacity
            key={lang}
            onPress={() => setLanguage(lang)}
            style={[
              styles.langButton,
              { backgroundColor: language === lang ? "#FFD85E" : "#FFFFFF" },
            ]}
          >
            <Text style={styles.langText}>
              {lang === "hinglish" ? "Hinglish" : lang === "english" ? "English" : "Marathi"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          {language === "marathi" ? "कायद्याचे तपशील" : "Law Details"}
        </Text>
        <Text style={styles.detailText}>{getDetail()}</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>
          {language === "marathi" ? "खऱ्या आयुष्याचे दृश्य" : "Real-life Scenario"}
        </Text>
        <Text style={styles.detailText}>{getScenario()}</Text>
      </View>
    </ScrollView>
  );
}

// -----------------------------------------
// LAW DETAILS
// -----------------------------------------
function getLawDetailHinglish(title) {
  switch (title) {
    case "Consumer Rights":
      return `Right to Safety (Section 6a) — Aapko safe aur quality products milne chahiye. 
Right to Information — Price aur expiry clearly likha hona chahiye.
Right to Redressal — Defective product hone par complaint file kar sakte ho.`;

    case "Property Laws":
      return `Transfer of Property Act, 1882 — Property sale aur lease ke rules define karta hai.
Registration Act, 1908 — Property transaction valid tabhi hota hai jab wo registered ho.
Hindu Succession Act, 1956 — Ancestral property sabhi heirs me equally divide hoti hai.`;

    case "Women’s Safety Laws":
      return `Section 354 IPC — Molestation ke khilaf.
Section 509 IPC — Verbal harassment punishable hai.
Domestic Violence Act, 2005 — Ghar ke abuse par kanooni action liya ja sakta hai.`;

    case "Cyber Laws":
      return `Section 66 IT Act 2000 — Unauthorized access punishable hai.
Section 66C — Identity theft cybercrime hai.
Section 67 — Obscene content share karna illegal hai.`;

    default:
      return "Details not available.";
  }
}

function getLawDetailEnglish(title) {
  switch (title) {
    case "Consumer Rights":
      return `Right to Safety (Sec 6a): Protects from unsafe goods.
Right to Information (Sec 6b): Manufacturers must provide correct info.
Right to Redressal (Sec 2(6)): File complaints for defective goods.`;

    case "Property Laws":
      return `Transfer of Property Act 1882: Defines property ownership rules.
Registration Act 1908: Sales must be legally registered.
Hindu Succession Act 1956: Ancestral property divided equally.`;

    case "Women’s Safety Laws":
      return `Section 354 IPC: Protects against molestation.
Section 509 IPC: Verbal harassment is punishable.
Domestic Violence Act 2005: Protects women from domestic abuse.`;

    case "Cyber Laws":
      return `Section 66 IT Act 2000: Covers hacking.
Section 66C: Deals with identity theft.
Section 67: Prohibits obscene online content.`;

    default:
      return "Details not available.";
  }
}

function getLawDetailMarathi(title) {
  switch (title) {
    case "Consumer Rights":
      return `सुरक्षा हक्क – कलम 6(अ): सुरक्षित वस्तूंचा वापर करण्याचा हक्क.
माहितीचा हक्क – कलम 6(ब): किंमत व घटक स्पष्ट सांगितले पाहिजेत.
तक्रारीचा हक्क – कलम 2(6): दोषपूर्ण वस्तूवर तक्रार दाखल करता येते.`;

    case "Property Laws":
      return `मालमत्ता हस्तांतरण कायदा, 1882 – मालमत्ता व्यवहाराचे नियम सांगतो.
नोंदणी कायदा, 1908 – व्यवहार नोंदणीकृत असावा.
वारसाहक्क कायदा, 1956 – पैतृक मालमत्ता समान वाटली जाते.`;

    case "Women’s Safety Laws":
      return `कलम 354 IPC – छेडछाड गुन्हा आहे.
कलम 509 IPC – अपमानास्पद भाषा बेकायदेशीर आहे.
घरगुती हिंसाचार कायदा, 2005 – महिलांना अत्याचारापासून संरक्षण.`;

    case "Cyber Laws":
      return `कलम 66 IT कायदा 2000 – हॅकिंग गुन्हा आहे.
कलम 66C – ओळख चोरी गुन्हा आहे.
कलम 67 – अश्लील मजकूर शेअर करणे बेकायदेशीर.`;

    default:
      return "माहिती उपलब्ध नाही.";
  }
}

// -----------------------------------------
// REAL-LIFE SCENARIOS
// -----------------------------------------
function getScenarioHinglish(title) {
  switch (title) {
    case "Consumer Rights":
      return `Ek customer ne defective washing machine kharidi. Consumer court ne company ko fine aur replacement dono dene ka order diya.`;

    case "Property Laws":
      return `Ek buyer ne registry ke bina property li. Seller ne same property kisi aur ko bech di. Court ne pehle buyer ke favour me decision diya.`;

    case "Women’s Safety Laws":
      return `Ek woman ke workplace pe harassment case hua. ICC committee ne investigation ke baad offender ko suspend kiya.`;

    case "Cyber Laws":
      return `Ek student ke naam se fake account banaya gaya. Cyber Cell ne IP trace karke culprit ko arrest kiya.`;

    default:
      return "Scenario not available.";
  }
}

function getScenarioEnglish(title) {
  switch (title) {
    case "Consumer Rights":
      return `A consumer bought a faulty fridge. The consumer court ordered the company to replace it and pay compensation.`;

    case "Property Laws":
      return `A buyer purchased unregistered land. The seller resold it. Court ruled in favour of the first buyer with proof of payment.`;

    case "Women’s Safety Laws":
      return `A woman faced harassment at work. Internal committee investigated and suspended the accused.`;

    case "Cyber Laws":
      return `A fake social media account was made in a student's name. Cyber Cell tracked the IP and caught the culprit.`;

    default:
      return "Scenario not available.";
  }
}

function getScenarioMarathi(title) {
  switch (title) {
    case "Consumer Rights":
      return `एका ग्राहकाला खराब फ्रिज मिळाला. ग्राहक न्यायालयाने कंपनीला दंड ठोठावला आणि नवीन फ्रिज देण्याचा आदेश दिला.`;

    case "Property Laws":
      return `एका व्यक्तीने नोंदणीशिवाय जमीन घेतली. विक्रेत्याने ती पुन्हा विकली. न्यायालयाने पहिल्या खरेदीदाराच्या बाजूने निकाल दिला.`;

    case "Women’s Safety Laws":
      return `एका महिलेवर ऑफिसमध्ये छेडछाड झाली. चौकशीनंतर आरोपीवर कारवाई करण्यात आली.`;

    case "Cyber Laws":
      return `एका विद्यार्थिनीच्या नावाने बनावट प्रोफाइल तयार करण्यात आले. सायबर सेलने आरोपीला अटक केली.`;

    default:
      return "प्रसंग उपलब्ध नाही.";
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF9E5" },
  iconHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  iconButton: { padding: 5 },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1E3D59",
    textAlign: "center",
    marginVertical: 10,
  },
  langContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  langButton: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#FFD85E",
  },
  langText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1E3D59",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E3D59",
    marginBottom: 8,
  },
  detailText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 12,
    textAlign: "justify",
  },
  divider: {
    height: 1,
    backgroundColor: "#FFD85E",
    marginVertical: 15,
  },
});
