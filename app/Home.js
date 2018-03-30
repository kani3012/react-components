import React from 'react';

import {View, Text, Button} from 'react-native';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => {
                this.props.navigation.navigate('Details', {
                  itemId: 86,
                  screenTitle: 'Title',
                });
              }}
            />
            <Button
                title = "Go to Drawer"
                onPress = { () => {
                    this.props.navigation.navigate('DrawerNav');
                }}
                />
          </View>
        );
      }
    }