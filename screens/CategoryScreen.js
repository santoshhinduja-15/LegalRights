import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const categories = [
  {
    id: '1',
    title: 'Consumer Rights',
    shortDesc: 'Jaano apne adhikaar jab aap kisi product ya service lete ho.',
    detail: `🧾 Consumer Rights (Consumer Protection Act, 2019)

Har consumer ke paas kuch basic adhikaar hote hain:
- Right to Safety: Unsafe product ke against protection.
- Right to Information: Product ki sahi details milni chahiye.
- Right to Choose: Zabardasti koi product nahi thopa ja sakta.
- Right to Redressal: Agar fraud hua hai toh complaint kar sakte ho consumer court mein.
- Right to Consumer Education: Apne rights ke baare mein seekhne ka adhikaar.

📘 Example Scenario:
Man lo aapne ek mixer grinder kharida jo warranty period ke andar hi blast ho gaya.
Aap consumer forum mein complaint file kar sakte ho aur manufacturer ko compensation dena pad sakta hai.`,
    icon: <Ionicons name="cart-outline" size={36} color="#1E3D59" />,
    color: '#FFCE45',
  },
  {
    id: '2',
    title: 'Property Laws',
    shortDesc: 'Property kharidne, bechne aur virasat ke kanoon samjho.',
    detail: `🏠 Property Laws (Transfer of Property Act, 1882)

Property ke ownership aur transfer ke liye kuch rules defined hain:
- Property transfer sale, gift, lease, ya mortgage ke form mein hota hai.
- Legal documents aur stamp duty zaruri hai.
- Ancestral property mein sabhi heirs ka equal right hota hai.

📘 Example Scenario:
Agar kisi ne bina registered sale deed ke property bech di, toh wo illegal transaction maana jaata hai.
Aap civil court mein case file karke apna haq wapas le sakte ho.`,
    icon: <MaterialCommunityIcons name="home-city-outline" size={36} color="#1E3D59" />,
    color: '#FFD85E',
  },
  {
    id: '3',
    title: 'Women’s Safety Laws',
    shortDesc: 'Mahilao ki suraksha aur samman ke liye kanoon.',
    detail: `👩‍⚖️ Women’s Safety Laws (IPC Sections + Special Acts)

Important kanoon jo women ko protect karte hain:
- Section 354 IPC: Molestation aur assault ke khilaf.
- Section 509 IPC: Harassment aur badtameezi ke khilaf.
- Domestic Violence Act, 2005: Ghar ke andar abuse se protection.
- POSH Act, 2013: Workplace pe sexual harassment ke khilaf kanoon.

📘 Example Scenario:
Agar office mein koi female employee ko unwanted comments ya touch se disturb kare,
wo Internal Complaints Committee (ICC) mein report kar sakti hai, jahan employer ko action lena padta hai.`,
    icon: <FontAwesome5 name="female" size={36} color="#1E3D59" />,
    color: '#FFECA3',
  },
  {
    id: '4',
    title: 'Cyber Laws',
    shortDesc: 'Online fraud aur data misuse se bachne ke kanoon.',
    detail: `💻 Cyber Laws (Information Technology Act, 2000)

Ye laws online safety aur data protection ke liye bane hain:
- Section 43 & 66: Hacking aur unauthorized access punishable hain.
- Section 66C: Identity theft aur phishing ke liye jail aur fine dono.
- Section 67: Obscene content share karna punishable offence hai.

📘 Example Scenario:
Agar koi social media pe aapki fake profile banata hai aur misuse karta hai,
toh aap cyber cell mein complaint file karke uske khilaf action karwa sakte ho.`,
    icon: <MaterialCommunityIcons name="laptop" size={36} color="#1E3D59" />,
    color: '#FFF5C0',
  },
];

export default function CategoryScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.color }]}
      activeOpacity={0.85}
      onPress={() => navigation.navigate('LawDetail', { law: item })}
    >
      <View style={styles.iconContainer}>{item.icon}</View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.shortDesc}>{item.shortDesc}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 🔙 Back + 💬 Chatbot Buttons */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={36} color="#1E3D59" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Chatbot')}>
          <Ionicons name="chatbubbles" size={34} color="#1E3D59" />
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Legal Categories</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9E5', padding: 20 },
  topBar: {
    paddingTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', // ✅ evenly space back + chat icons
    alignItems: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E3D59',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: { marginRight: 15 },
  title: { fontSize: 18, fontWeight: '700', color: '#1E3D59', marginBottom: 4 },
  shortDesc: { fontSize: 14, color: '#333', lineHeight: 20 },
});
