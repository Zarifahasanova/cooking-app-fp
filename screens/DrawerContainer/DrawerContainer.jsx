import React from 'react';
import { View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import MenuButton from '../../components/MenuButton/MenuButton';
import { AppIcon } from "../../style/AppStyles";
export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="HOME"
            source={require('../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="CATEGORIES"
            source={require('../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SEARCH"
            source={require('../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="SIGNUP"
            source={require('../../assets/icons/signup.png')}
            onPress={() => {
              navigation.navigate('SignUp');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="LOGIN"
            source={require('../../assets/icons/login.jpg')}
            onPress={() => {
              navigation.navigate('Login');
              navigation.closeDrawer();
            }}
          /><MenuButton
          title="LOGOUT"
          source={require('../../assets/icons/logout.png')}
          onPress={() => {
            navigation.navigate('Dashboard');
            navigation.closeDrawer();
          }}
        />
          
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
