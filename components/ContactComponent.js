import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

class Contact extends Component  {
   
    static navigationOptions = {
        title: 'Contact Us'
    }
   
    render() {
      return (
       
       <ScrollView>
            <Card
            title='Contact Information'
             wrapperStyle={{margin: 20}}>
                <Text style={{margin: 10}}>
                1 Nucamp Way
                Seattle, WA 98001
                U.S.A.
                </Text>
                <Text>
                    Phone: 1-206-555-1234
                    Email: campsites@nucamp.co
                </Text>
            </Card>
        </ScrollView>

      );
    }
  }

  const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

export default Contact;