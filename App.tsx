import { useEffect, useState } from 'react';
import { Button, FlatList, Image, Text, View, ScrollView, SafeAreaView, } from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'A',
        price: 1500,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJHX9tdZaYRsF6CJWCTUcfsxEpSk80XWjjg&s',
      },
      {
        id: 2,
        name: 'B',
        price: 1000,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRog3ItvKlFnuSUCgk4U0n3U1A2Ezl6qkEEjA&s'
          },
      {
        id: 3,
        name: 'C',
        price: 1500,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDX1Y-t_dC4-pLHOa2g6RDdkfbFmoQdnA-Uw&s',
      },
      {
        id: 4,
        name: 'D',
        price: 2000,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuTVM_oinPGLeMDC7C2jlNODOLkQ-RE0aYg&s',
      },
      {
        id: 5,
        name: 'E',
        price: 1000,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfD6M71IKV9cjZexeD2peZkgEgkcXeqD3xA&s',
      },
      {
        id: 6,
        name: 'F',
        price: 2000,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_C544jibtAbcGYDaU2PtUYER0qvSHtMwBgg&s',
      },
      {
        id: 6,
        name: 'F',
        price: 9000,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5_n7aGWTt4xpSHeDyBqO58cUdYPjEqXS3w&s',
      },
      
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
        <SafeAreaView style={{ padding: 10 }}>
          <FlatList
            data={products}
            numColumns={2}
            ListHeaderComponent={() => (
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'left',
                  marginTop: 20,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Showroom Car
              </Text>
            )}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: 'white',
                  maxWidth: '45%',
                  maxHeight: 400,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                  padding: 30,
                  borderRadius: 7,
                  borderWidth: 2,
                  shadowRadius: 5,
                }}>
                <Image
                  source={{ uri: item.photo }}
                  style={{ width: 100, height: 75, borderRadius: 3 }} />
                <Text style={{ paddingVertical: 10 }}>{item.name}</Text>
                <Text style={{ paddingBottom: 10 }}>Price: ${item.price}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()} />
        </SafeAreaView>
      </ScrollView>
  );
};

export default App;