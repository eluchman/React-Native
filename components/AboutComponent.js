import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { PARTNERS } from '../shared/partners';
import { Card } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


function Mission() {

    return (
    <Card title='Our Mission'>
        <Text>
            We present a curated database of the best campsites 
            in the vast woods of backcountry of the World Wide Web
            Wilderness. We increase access to adventure for the public 
            while promoting safe and respectful use of resources. The expert
            wilderness trekkers on our staff personally verify each campsite 
            to make sure that they are up to our standards. We also present a platform
            for campers to share reviews on campsites they have visited with each other.
        </Text>

    </Card>

    );
}

class About extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS,
        };
    }
   
    static navigationOptions = {
        title: 'About Us'
    }
   
    render() {

        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png')}}
                />
            );
        };


      return (
        <ScrollView>
                < Mission />
        </ScrollView>

      );

      return (
      
      <Card>
        <FlatList
            data={this.state.partners}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
        </Card>
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



export default About;