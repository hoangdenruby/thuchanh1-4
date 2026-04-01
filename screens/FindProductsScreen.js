// screens/FindProductsScreen.js

import React from 'react';
import { 
  StyleSheet, Text, View, Image, TextInput, 
  TouchableOpacity, FlatList, SafeAreaView 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

// --- DỮ LIỆU DANH MỤC (Nối ảnh monster.png về đúng ảnh thật) ---
const categories = [
  { id: '1', name: 'Fresh Fruits\n& Vegetable', color: '#BDEFFF26', image: require('../assets/fresh_fruits_and_veggie.png'), borderColor: '#BDEFFF' },
  { id: '2', name: 'Cooking Oil\n& Ghee', color: '#F8A44C26', image: require('../assets/cooking_oil_and_ghee.png'), borderColor: '#F8A44C' },
  { id: '3', name: 'Meat & Fish', color: '#F7A59326', image: require('../assets/meat_and_fish.png'), borderColor: '#F7A593' },
  { id: '4', name: 'Bakery & Snacks', color: '#D3B0E026', image: require('../assets/bakery_and_snacks.png'), borderColor: '#D3B0E0' },
  { id: '5', name: 'Dairy & Eggs', color: '#FDE59826', image: require('../assets/dairy_and_eggs.png'), borderColor: '#FDE598' },
  { id: '6', name: 'Beverages', color: '#B7DFF526', image: require('../assets/beverages.png'), borderColor: '#B7DFF5' },
];

export default function FindProductsScreen({ navigation }) {

  // Hàm render từng ô danh mục
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.categoryCard, { backgroundColor: item.color, borderColor: item.borderColor }]}
      onPress={() => {
        // --- XỬ LÝ LOGIC NÚT BẤM ---
        if (item.id === '5') { // Dairy & Eggs
          navigation.navigate('ProductList'); // Sang màn Trứng/Mì cũ
        } else if (item.id === '6') { // Beverages
          navigation.navigate('Beverages'); // Sang màn Đồ uống mới
        }
        // Các mục khác chưa làm
      }}
    >
      <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
      <Text style={styles.categoryName} numberOfLines={2}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Tiêu đề Find Products */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      {/* Thanh Search Store */}
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="black" />
        <TextInput placeholder="Search Store" style={{marginLeft: 10, flex: 1}} />
      </View>

      {/* Danh sách danh mục lưới 2 cột */}
      <FlatList
        data={categories}
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
  container: { flex: 1, backgroundColor: 'white' },
  header: { alignItems: 'center', marginTop: 20, marginBottom: 15 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  searchBar: {
    flexDirection: 'row', backgroundColor: '#F2F3F2', 
    marginHorizontal: 20, padding: 15, borderRadius: 15, alignItems: 'center',
    marginBottom: 20
  },
  listContent: {
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  categoryCard: {
    flex: 1,
    margin: 10,
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    height: 190,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryImage: {
    width: 100,
    height: 80,
    marginBottom: 15
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    textAlign: 'center'
  }
});