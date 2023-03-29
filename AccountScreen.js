import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Logo from './Assets/imags/Logo.png';

function AccountScreen() {
  const [page, setPage] = useState('Account');

  const navigateTo = (pageName) => {
    setPage(pageName);
  }

  const renderPage = () => {
    switch (page) {
      case 'Orders':
        return <OrdersScreen navigateTo={navigateTo} />;
      case 'MyDetails':
        return <MyDetailsScreen navigateTo={navigateTo} />;
      case 'DeliveryAddress':
        return <DeliveryAddressScreen navigateTo={navigateTo} />;
      case 'About':
        return <AboutScreen navigateTo={navigateTo} />;
      default:
        return (
          <View style={styles.container}>
            <View style={styles.userInfo}>
              <Image source={Logo} style={styles.logo} />
              <Text style={styles.username}>Account Name</Text>
              <Text style={styles.email}>example@gmail.com</Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('Orders')}>
                <Text style={styles.optionButtonText}>Orders</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('MyDetails')}>
                <Text style={styles.optionButtonText}>My Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('DeliveryAddress')}>
                <Text style={styles.optionButtonText}>Delivery Address</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} onPress={() => navigateTo('About')}>
                <Text style={styles.optionButtonText}>About</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        );
    }
  }

  return renderPage();
}

function OrdersScreen({ navigateTo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigateTo('Account')}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <Text>Orders Screen</Text>
    </View>
  );
}

function MyDetailsScreen({ navigateTo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigateTo('Account')}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      <Text>My Details Screen</Text>
    </View>
  );
}

function DeliveryAddressScreen({ navigateTo }) {
    return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigateTo('Account')}>
    <Text style={styles.backButtonText}>{'< Back'}</Text>
    </TouchableOpacity>
    <Text>Delivery Address Screen</Text>
    <Text>Address Line 1</Text>
    <Text>Address Line 2</Text>
    <Text>City</Text>
    <Text>State</Text>
    <Text>Zip Code</Text>
    <TouchableOpacity style={styles.editButton}>
    <Text style={styles.editButtonText}>Edit Address</Text>
    </TouchableOpacity>
    </View>
    );
    }
    
    function AboutScreen({ navigateTo }) {
    return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigateTo('Account')}>
    <Text style={styles.backButtonText}>{'< Back'}</Text>
    </TouchableOpacity>
    <Text>About Screen</Text>
    </View>
    );
    }
    
    export default function App() {
    return (
    <AccountScreen />
    );
    }
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    userInfo: {
    alignItems: 'center',
    marginBottom: 50,
    },
    logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    },
    username: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    email: {
    fontSize: 18,
    color: '#666',
    },
    options: {
    alignItems: 'center',
    marginBottom: 70,
    width: '100%',
    },
    optionButton: {
    backgroundColor: '#eee',
    padding: 15,
    paddingHorizontal: 100,
    borderRadius: 0,
    marginBottom: 10,
    alignSelf: 'flex-start',
    width: '100%',
    },
    optionButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    },
    logoutButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    },
    logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    },
    backButton: {
    marginBottom: 20,
    },
    backButtonText: {
    color: '#4CAF50',
    fontSize: 18,
    },
    editButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    },
    editButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    },
    });