import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

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

        <MaterialCommunityIcons name="scale-balance" size={70} color="#1E3D59" />

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
              {lang === "hinglish"
                ? "Hinglish"
                : lang === "english"
                ? "English"
                : "Marathi"}
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
          {language === "marathi" ? "खऱ्या आयुष्याचे उदाहरण" : "Real-life Scenario"}
        </Text>
        <Text style={styles.detailText}>{getScenario()}</Text>
      </View>
    </ScrollView>
  );
}

/* -------------------- LAW DETAILS -------------------- */
function getLawDetailHinglish(title) {
  switch (title) {
    case "Consumer Rights":
      return `1️⃣ Right to Safety – Section 6(a), Consumer Protection Act, 2019:
Aapko safe aur quality products milne chahiye jo aapke health ke liye harmful na ho.

2️⃣ Right to Information – Section 6(b):
Aapko product ke price, expiry date, aur ingredients clearly bataye jane chahiye.

3️⃣ Right to Redressal – Section 2(6):
Agar product defective hai ya fraud hua hai, aap consumer court mein complaint kar sakte ho.`;

    case "Property Laws":
      return `1️⃣ Transfer of Property Act, 1882:
Property sale, gift, lease, aur mortgage ke rules define karta hai.

2️⃣ Registration Act, 1908:
Property ka transaction tabhi valid hota hai jab wo legally register ho.

3️⃣ Rent Control Act:
Agar tenant rent nahi deta ya illegal possession rakhta hai, landlord legal action le sakta hai.`;

    case "Women’s Safety Laws":
      return `1️⃣ Section 354 IPC:
Bina consent ke touch ya harassment karna offence hai.

2️⃣ Section 509 IPC:
Public ya private jagah pe insulting comments karna punishable hai.

3️⃣ POSH Act, 2013:
Workplace pe sexual harassment ke khilaf complaint di ja sakti hai.`;

    case "Cyber Laws":
      return `1️⃣ Section 66, IT Act 2000:
Unauthorized access aur hacking punishable offence hai.

2️⃣ Section 66C:
Identity theft ya fake account banana cybercrime hai.

3️⃣ Section 67:
Online obscene content share karna illegal hai.`;

    default:
      return "Details not available.";
  }
}

function getLawDetailEnglish(title) {
  switch (title) {
    case "Consumer Rights":
      return `1️⃣ Right to Safety – Section 6(a):
You have the right to be protected from unsafe goods and services.

2️⃣ Right to Information – Section 6(b):
Manufacturers must provide correct and clear product information.

3️⃣ Right to Redressal – Section 2(6):
You can file complaints for defective products or unfair trade practices.`;

    case "Property Laws":
      return `1️⃣ Transfer of Property Act, 1882:
Defines legal transfer of ownership and rights.

2️⃣ Registration Act, 1908:
Unregistered property sales are not valid in court.

3️⃣ Rent Control Act:
Protects landlords from non-paying tenants and illegal occupancy.`;

    case "Women’s Safety Laws":
      return `1️⃣ Section 354 IPC:
Covers physical assault or harassment of women.

2️⃣ Section 509 IPC:
Deals with verbal or emotional harassment.

3️⃣ POSH Act, 2013:
Protects women from workplace sexual harassment.`;

    case "Cyber Laws":
      return `1️⃣ Section 66, IT Act 2000:
Deals with hacking and data breaches.

2️⃣ Section 66C:
Punishes identity theft or fake profile creation.

3️⃣ Section 67:
Prohibits sharing obscene material online.`;

    default:
      return "Details not available.";
  }
}

function getLawDetailMarathi(title) {
  switch (title) {
    case "Consumer Rights":
      return `1️⃣ सुरक्षा हक्क – कलम 6(अ):
सुरक्षित आणि दर्जेदार वस्तू वापरण्याचा ग्राहकाला अधिकार आहे.

2️⃣ माहितीचा हक्क – कलम 6(ब):
उत्पादनाची किंमत, तारीख आणि घटक स्पष्ट सांगितले पाहिजेत.

3️⃣ तक्रार करण्याचा हक्क – कलम 2(6):
दोषपूर्ण वस्तू मिळाल्यास ग्राहक न्यायालयात तक्रार करू शकतो.`;

    case "Property Laws":
      return `1️⃣ मालमत्ता हस्तांतरण कायदा, 1882:
मालमत्ता विक्री आणि हस्तांतरणाचे नियम सांगतो.

2️⃣ नोंदणी कायदा, 1908:
नोंदणीशिवाय मालमत्ता व्यवहार अवैध असतो.

3️⃣ भाडे नियंत्रण कायदा:
भाडे न भरणाऱ्या किंवा बेकायदेशीररीत्या राहणाऱ्या भाडेकरूंवर कारवाई करता येते.`;

    case "Women’s Safety Laws":
      return `1️⃣ कलम 354 IPC:
महिलांवर छेडछाड किंवा हल्ला करणे गुन्हा आहे.

2️⃣ कलम 509 IPC:
अपमानास्पद भाषा किंवा हावभाव करणे बेकायदेशीर आहे.

3️⃣ POSH कायदा, 2013:
कामाच्या ठिकाणी लैंगिक छळाविरुद्ध संरक्षण देते.`;

    case "Cyber Laws":
      return `1️⃣ कलम 66 माहिती तंत्रज्ञान कायदा, 2000:
अनधिकृत प्रवेश आणि हॅकिंग गुन्हा आहे.

2️⃣ कलम 66C:
ओळख चोरी आणि बनावट प्रोफाइल तयार करणे गुन्हा आहे.

3️⃣ कलम 67:
अश्लील सामग्री ऑनलाईन शेअर करणे दंडनीय आहे.`;

    default:
      return "माहिती उपलब्ध नाही.";
  }
}

/* -------------------- REAL-LIFE SCENARIOS -------------------- */
function getScenarioHinglish(title) {
  switch (title) {
    case "Consumer Rights":
      return `Ramesh ne ek branded washing machine kharidi. Do hafton ke andar hi machine kharab ho gayi aur service center sirf delay karta raha. Usne Consumer Protection Act 2019 ke tahat complaint file ki. Company ko nayi machine aur ₹5,000 fine dene ka order mila.`;

    case "Property Laws":
      return `Ek landlord ka tenant 6 mahine se rent nahi de raha tha aur ghar khali karne se mana kar raha tha. Landlord ne Rent Control Act ke tahat case file kiya. Court ne tenant ko 30 din me rent clear karne aur ghar khali karne ka order diya.`;

    case "Women’s Safety Laws":
      return `Ek female employee ke boss baar-baar inappropriate comments karte the. Usne POSH Act 2013 ke under ICC committee me complaint di aur Section 509 IPC ke tahat FIR file ki. Inquiry ke baad boss ko suspend kar diya gaya.`;

    case "Cyber Laws":
      return `Ek college student ke naam se fake Instagram account banaya gaya. Usne cybercrime.gov.in par report di aur Section 66C IT Act ke tahat case file kiya. Cyber Cell ne IP trace karke culprit ko arrest kiya.`;

    default:
      return "Scenario not available.";
  }
}

function getScenarioEnglish(title) {
  switch (title) {
    case "Consumer Rights":
      return `A man bought a washing machine that stopped working within two weeks. The company ignored his complaint, so he filed a case under the Consumer Protection Act. The court ordered the company to replace it and pay ₹5,000 compensation.`;

    case "Property Laws":
      return `A tenant failed to pay rent for six months. The landlord filed a case under the Rent Control Act. The court ordered payment of dues within 30 days or eviction.`;

    case "Women’s Safety Laws":
      return `A female employee faced inappropriate comments from her manager. She complained under the POSH Act and filed an FIR under Section 509 IPC. The manager was suspended after the inquiry.`;

    case "Cyber Laws":
      return `A fake Instagram account was created using a student's photos. She reported it under Section 66C of the IT Act. The Cyber Cell traced and arrested the culprit.`;

    default:
      return "Scenario not available.";
  }
}

function getScenarioMarathi(title) {
  switch (title) {
    case "Consumer Rights":
      return `रामेशने नवीन वॉशिंग मशीन घेतले पण दोन आठवड्यांतच ती बंद पडली. कंपनीने दुरुस्ती नाकारली म्हणून त्याने Consumer Protection Act अंतर्गत तक्रार दाखल केली. न्यायालयाने कंपनीला नवीन मशीन देण्याचा आणि ₹5,000 भरपाई देण्याचा आदेश दिला.`;

    case "Property Laws":
      return `भाडेकरूने सहा महिन्यांपासून भाडे दिले नव्हते. मालकाने Rent Control Act अंतर्गत केस दाखल केली. न्यायालयाने भाडेकरूला 30 दिवसांत भाडे भरण्याचा किंवा घर रिकामे करण्याचा आदेश दिला.`;

    case "Women’s Safety Laws":
      return `एका महिला कर्मचाऱ्याला तिच्या मॅनेजरकडून अपमानास्पद टिप्पण्या मिळत होत्या. तिने POSH कायदा अंतर्गत ICC कडे तक्रार केली आणि कलम 509 IPC अंतर्गत FIR दाखल केली. मॅनेजरला निलंबित करण्यात आले.`;

    case "Cyber Laws":
      return `एका विद्यार्थिनीच्या नावाने बनावट इंस्टाग्राम अकाउंट तयार करण्यात आले. तिने कलम 66C माहिती तंत्रज्ञान कायदा अंतर्गत तक्रार केली. सायबर पोलिसांनी आरोपीला अटक केली.`;

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
