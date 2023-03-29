/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const mockData = [
  {
    _id: '63d1e0d1d35076e9ad441a39',

    index: 0,

    guid: 'a034b1ca-63fe-44c3-af33-a87ef8b2e2bd',

    isActive: true,

    balance: '$2,096.91',

    age: 45,

    eyeColor: 'brown',

    name: 'Webster Gibbs',

    email: 'webstergibbs@gonkle.com',

    about:
      'Reprehenderit labore nostrud ea nulla in laborum non amet tempor. Esse dolore non Lorem sint. Et voluptate ullamco ea enim in quis sit voluptate. Dolore consequat voluptate labore ipsum fugiat Lorem sint officia. Commodo enim consectetur veniam veniam dolor ullamco commodo magna ullamco. Amet labore officia nulla enim non dolore veniam. Ipsum ea quis ex consequat aliquip ullamco consequat.\r\n',

    registered: '2014-08-07T06:51:45 +06:00',

    favoriteFruit: 'strawberry',
  },

  {
    _id: '63b1b0c1201cfa43b8d04add',

    index: 1,

    guid: 'df9f76e8-e5cb-409c-83b2-aa8b40b609ae',

    isActive: false,

    balance: '$3,974.78',

    age: 42,

    eyeColor: 'green',

    name: 'Bradford Bauer',

    email: 'bradfordbauer@gonkle.com',

    about:
      'Est duis laborum Lorem ad Lorem laborum labore consequat aute. Aliqua velit in velit sit veniam nisi enim incididunt. Elit ex ex qui ullamco sit sunt labore do elit ullamco. Irure ipsum mollit elit aliquip culpa adipisicing anim cillum cillum laborum sit sunt fugiat. Labore tempor minim duis consequat pariatur et voluptate laborum ex officia ea. Nostrud officia sunt ullamco consequat laboris consequat consequat ex incididunt ex. Minim eiusmod laborum cillum ad.\r\n',

    registered: '2022-06-18T07:45:21 +06:00',

    favoriteFruit: 'strawberry',
  },

  {
    _id: '51d1b0c16f0dfe86e1acb2a4',

    index: 2,

    guid: 'a1768c42-ec90-43a2-b4e5-abc9d5407ae5',

    isActive: true,

    balance: '$2,747.04',

    age: 55,

    eyeColor: 'blue',

    name: 'Kline Pruitt',

    email: 'klinepruitt@gonkle.com',

    about:
      'Laboris laboris consequat cillum commodo minim laborum. Commodo ad do dolor in do irure. Nulla labore sint voluptate officia amet Lorem nisi aliquip est voluptate irure. Do dolor aliqua magna in eu dolor. Proident mollit officia eu labore dolore ullamco nisi Lorem ad et.\r\n',

    registered: '2017-02-11T07:05:02 +07:00',

    favoriteFruit: 'strawberry',
  },

  {
    _id: '231db0c193a63368e53b6a2e',

    index: 3,

    guid: 'a42e90c7-df28-46d7-a2b0-af7373852b89',

    isActive: false,

    balance: '$1,753.71',

    age: 47,

    eyeColor: 'blue',

    name: 'Albert Abbott',

    email: 'albertabbott@gonkle.com',

    about:
      'Ad qui laboris duis mollit. Ullamco aliquip cupidatat commodo dolore id elit reprehenderit quis proident. Labore ullamco ut tempor esse.\r\n',

    registered: '2019-06-19T02:52:37 +06:00',

    favoriteFruit: 'strawberry',
  },

  {
    _id: '64d1b0d1bf493c874d707456',

    index: 4,

    guid: 'd508f1ce-41bd-4ed5-8afa-abaac0c25218',

    isActive: false,

    balance: '$2,187.80',

    age: 40,

    eyeColor: 'blue',

    name: 'Goldie Weber',

    email: 'goldieweber@gonkle.com',

    about:
      'Ex do minim incididunt aliqua. Laborum qui elit officia elit. Dolor eu nostrud voluptate eiusmod dolor. Proident dolore duis nostrud dolore enim excepteur aliqua excepteur et.\r\n',

    registered: '2014-12-30T07:23:22 +07:00',

    favoriteFruit: 'apple',
  },

  {
    _id: '63b1e0d1825af6d43dca2ca5',

    index: 5,

    guid: 'ef6da832-8c06-4c5f-9ec3-36a062404d81',

    isActive: false,

    balance: '$1,462.15',

    age: 53,

    eyeColor: 'green',

    name: 'Kara Marsh',

    email: 'karamarsh@gonkle.com',

    about:
      'Ipsum exercitation velit est nulla velit nostrud nostrud ex cillum ad proident quis consectetur. Cupidatat ea minim consectetur proident ut. Officia proident consectetur adipisicing dolor adipisicing dolor consequat irure irure exercitation deserunt. Deserunt adipisicing nulla sunt et culpa ex eiusmod.\r\n',

    registered: '2018-06-14T05:16:31 +06:00',

    favoriteFruit: 'banana',
  },

  {
    _id: '63a1b0e1ef4562ca4acd87f5',

    index: 6,

    guid: 'a39e8744-9e36-4e97-b81a-2bd36df71638',

    isActive: true,

    balance: '$3,053.13',

    age: 39,

    eyeColor: 'blue',

    name: 'Salas Lopez',

    email: 'salaslopez@gonkle.com',

    about:
      'Dolor dolore aliqua adipisicing id culpa nulla tempor non. Do aliqua eiusmod in labore reprehenderit laboris id consectetur culpa veniam dolore. Sint qui laborum ut aliqua voluptate fugiat ea. Deserunt deserunt est magna eu adipisicing et ipsum anim sunt nulla amet reprehenderit. In excepteur aliquip esse aliquip eu laborum consectetur. Irure ad ullamco ut ut veniam.\r\n',

    registered: '2018-07-27T08:33:24 +06:00',

    favoriteFruit: 'banana',
  },

  {
    _id: '63d1b0d192ecdce878cb4dac',

    index: 7,

    guid: 'fa08bad1-fa81-4fe2-a7b3-242c94c071f0',

    isActive: false,

    balance: '$963.15',

    age: 49,

    eyeColor: 'blue',

    name: 'Slater Chang',

    email: 'slaterchang@gonkle.com',

    about:
      'Pariatur ex ex exercitation dolore. Exercitation sit sint excepteur non ipsum consectetur fugiat cupidatat ea laboris proident sint ipsum sint. Incididunt proident duis minim qui consectetur eu in officia laboris fugiat consequat enim aute. Laboris voluptate qui aliqua non veniam duis esse amet anim sint ullamco culpa cupidatat. Irure quis ea dolor minim laborum occaecat esse veniam velit et veniam. Dolore veniam dolor dolore cupidatat.\r\n',

    registered: '2022-10-21T07:24:31 +06:00',

    favoriteFruit: 'apple',
  },

  {
    _id: '64d1b0d1778b8593bc1be6b3',

    index: 8,

    guid: '37ca9cb1-5c45-4330-b4e5-25a5f314bd32',

    isActive: true,

    balance: '$3,377.06',

    age: 20,

    eyeColor: 'brown',

    name: 'Bryan Randall',

    email: 'bryanrandall@gonkle.com',

    about:
      'Dolor nostrud aliquip id non ex. Esse labore magna nostrud voluptate labore sit cupidatat pariatur ut duis officia officia dolor. Nostrud reprehenderit ipsum tempor mollit nulla ad dolor deserunt. Occaecat adipisicing amet tempor anim exercitation dolor eu nostrud officia. Ad consequat culpa aliquip nulla elit incididunt elit ea veniam do.\r\n',

    registered: '2017-05-12T10:11:12 +06:00',

    favoriteFruit: 'strawberry',
  },
];

type InvestorProps = {
  name: string;
  balance: string;
  email: string;
  age: string;
  isActive: boolean;
  id: string;
  handler: (string) => void;
};

const InvestorItem = ({
  name,
  balance,
  email,
  age,
  isActive,
  id,
  handler,
}: InvestorProps) => (
  <TouchableOpacity onPress={handler}>
    <View style={isActive ? styles.itemActive : styles.item} key={id}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.fields}>Balance: {balance}</Text>
      <Text style={styles.fields}>E-mail: {email}</Text>
      <Text style={styles.fields}>Age: {age}</Text>
    </View>
  </TouchableOpacity>
);

function DetailScreen({route, navigation}) {
  const {about} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>{about}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={({item}) => (
          <InvestorItem
            name={item.name}
            email={item.email}
            balance={item.balance}
            isActive={item.isActive}
            age={item.age}
            id={item._id}
            handler={() => {
              navigation.navigate('Detail', {about: item.about});
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  itemActive: {
    backgroundColor: '#ff0000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  title: {
    fontSize: 32,
  },
  fields: {
    fontSize: 18,
  },
});

export default App;
