import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import anh1 from "./assets/canaulau.png";
const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
    image: require('./assets/canaulau.png'), 
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    image: require('./assets/ga_bo_toi.png'), 
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: require('./assets/xa_can_cau.png'), 
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: require('./assets/dochoidangmohinh.png'), 
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: require('./assets/lanh_dao_gian_don.png'), 
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: require('./assets/hieu_long_con_tre.png'), 
  },
];

const Item = ({ title, shop, image }) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.shop}>{shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} shop={item.shop} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View>
        <TouchableOpacity style={{flexDirection : 'row' , alignItems : 'center' , justifyContent : 'space-between' , paddingHorizontal : 15 , backgroundColor : '#1BA9FF' , height : 49}}>
          <Image source={require('./assets/Group 10.png')}></Image>
          <Image source={require('./assets/Vector (Stroke).png')}></Image>
          <Image source={require('./assets/Vector 1 (Stroke).png')}></Image>
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical : 50,
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
    borderRadius: 5,
  
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  shop: {
    fontSize: 12,
    color: 'gray',
  },
  chatButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChatListScreen;
