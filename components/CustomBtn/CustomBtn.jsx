import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { CustomText as Text } from '../CustomText'
import COLORS from '../../style/colors';

export class CustomBtn extends Component {
    render() {

        const {style, onPressHandler, text, textStyle} = this.props;
        return (
            <TouchableOpacity
                style={[styles.buttonContainer, style]}
                onPress={() => { onPressHandler() }}>
                <Text
                    weight="bold"
                    style={[styles.buttonText, textStyle]}>{ text }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignSelf: 'center',
        width: '85%',
        height: 45,
        backgroundColor: COLORS.main,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        textTransform: 'uppercase',
        color: 'white'
    }
})