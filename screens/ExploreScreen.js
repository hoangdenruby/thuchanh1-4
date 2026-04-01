import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView 
} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import FilterModal from './FilterModal'; 

const searchResults = [
  { id: '1', name: 'Egg Chicken Red', unit: '4pcs, Price', price: '$1.99', image: require('../assets/egg_chicken_red.png') },
  { id: '2', name: 'Egg Chicken White', unit: '180g, Price', price: '$1.50', image: require('../assets/egg_chicken_white.png') },
  { id: '3', name: 'Egg Pasta', unit: '30g, Price', price: '$15.99', image: require('../assets/egg_pasta.png') },
  { id: '4', name: 'Egg Noodles', unit: '2L, Price', price: '$15.99', image: require('../assets/egg_noodles.png') },
  { id: '5', name: 'Mayonnais Eggless', unit: 'Chai, Price', price: '$4.99', image: require('../assets/mayonnais_eggless.png') },
  { id: '6', name: 'Purple Egg Noodles', unit: '500g, Price', price: '$15.99', image: require('../assets/purple_egg_noodles.png') },
];

// Thêm navigation vào props để sử dụng lệnh quay lại
export default function ProductListScreen({ navigation }) {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [searchText, setSearchText] = useState("Egg");

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image 
        source={item.image} 
        style={styles.productImage} 
        resizeMode="contain" 
      />
      <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
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
      
      {/* --- PHẦN MỚI: NÚT BACK VÀ TIÊU ĐỀ --- */}
      <View style={styles.backHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <AntDesign name="left" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dairy & Eggs</Text>
        <View style={{ width: 24 }} /> {/* View rỗng để cân bằng tiêu đề vào giữa */}
      </View>

      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
            <Feather name="search" size={20} color="#181725" style={styles.searchIcon} />
            <TextInput 
              style={styles.searchInput} 
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
              placeholder="Search Store"
            />
            {searchText.length > 0 && (
              <TouchableOpacity onPress={() => setSearchText("")}>
                <AntDesign name="closecircle" size={16} color="#7C7C7C" />
              </TouchableOpacity>
            )}
        </View>
        
        <TouchableOpacity 
          style={styles.filterBtn} 
          onPress={() => setFilterVisible(true)}
        >
          <Feather name="sliders" size={24} color="#181725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={searchResults} 
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <FilterModal 
        visible={isFilterVisible} 
        onClose={() => setFilterVisible(false)} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF' 
  },
  // Style cho phần Header mới
  backHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backBtn: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  searchHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 10,
  },
  searchBar: { 
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F2F3F2', 
    borderRadius: 15, 
    paddingHorizontal: 15, 
    height: 50 
  },
  searchIcon: { 
    marginRight: 10 
  },
  searchInput: { 
    flex: 1, 
    fontSize: 16, 
    fontWeight: '600',
    color: '#181725' 
  },
  filterBtn: { 
    marginLeft: 15 
  },
  listContent: { 
    paddingHorizontal: 10, 
    paddingBottom: 100 
  },
  productCard: { 
    flex: 1, 
    margin: 10, 
    padding: 15, 
    borderRadius: 18, 
    borderWidth: 1, 
    borderColor: '#E2E2E2',
    backgroundColor: '#FFF'
  },
  productImage: { 
    height: 100, 
    width: '100%', 
    marginBottom: 15 
  },
  productName: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#181725',
    marginBottom: 5 
  },
  productUnit: { 
    fontSize: 14, 
    color: '#7C7C7C', 
    marginBottom: 15 
  },
  productBottom: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },
  productPrice: { 
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#181725' 
  },
  addButton: { 
    backgroundColor: '#53B175', 
    width: 45, 
    height: 45, 
    borderRadius: 17, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
});