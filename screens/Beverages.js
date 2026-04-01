import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView 
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

// --- DỮ LIỆU ĐỒ UỐNG ---
const beverageData = [
  { id: '1', name: 'Diet Coke', unit: '355ml, Price', price: '$1.99', image: require('../assets/diet_coke.png') },
  { id: '2', name: 'Sprite Can', unit: '325ml, Price', price: '$1.50', image: require('../assets/sprite_can.png') },
  { id: '3', name: 'Apple & Grape Juice', unit: '2L, Price', price: '$15.50', image: require('../assets/apple_and_grape_juice.png') },
  { id: '4', name: 'Orange Juice', unit: '2L, Price', price: '$15.50', image: require('../assets/orange_juice.png') },
  { id: '5', name: 'Coca Cola Can', unit: '325ml, Price', price: '$4.99', image: require('../assets/coca_cola_can.png') },
  { id: '6', name: 'Pepsi Can', unit: '330ml, Price', price: '$4.99', image: require('../assets/pepsi_can.png') },
  { id: '7', name: 'Monster Black', unit: '2L, Price', price: '$1.50', image: require('../assets/monster.png') },
  { id: '84', name: 'Monster White', unit: '2L, Price', price: '$1.50', image: require('../assets/white_monster.png') },
];

export default function BeveragesScreen({ navigation }) {

  // Hàm render từng item đồ uống
  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image 
        source={item.image} 
        style={styles.productImage} 
        resizeMode="contain" 
      />
      <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.productUnit}>{item.unit}</Text>
      
      <View style={styles.productBottom}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <AntDesign name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header với nút Back và Tiêu đề */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} // Quay lại màn hình trước đó
        >
          <Entypo name="chevron-left" size={28} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <View style={{ width: 40 }} /> {/* View đệm để tiêu đề nằm giữa */}
      </View>

      {/* Danh sách đồ uống dạng lưới 2 cột */}
      <FlatList
        data={beverageData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    backgroundColor: '#FFF',
    // Đảm bảo các card có chiều cao bằng nhau
    justifyContent: 'space-between', 
  },
  productImage: {
    height: 100,
    width: '100%',
    marginBottom: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    marginBottom: 5,
    height: 40, // Giữ chỗ cho 2 dòng tên
  },
  productUnit: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 15,
  },
  productBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  addButton: {
    backgroundColor: '#53B175',
    width: 45,
    height: 45,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});