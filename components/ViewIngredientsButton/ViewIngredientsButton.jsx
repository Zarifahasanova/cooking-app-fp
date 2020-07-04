import React from "react";
import {
  TouchableHighlight,
  Image,
  Text,
  View,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default class ViewIngredientsButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="rgba(73,182,77,1,0.9)"
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/icons/viewingredients.png")}
            style={styles.btnIcon}
          />
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
