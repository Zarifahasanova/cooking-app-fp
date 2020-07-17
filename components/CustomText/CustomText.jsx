import React from 'react';
import { Text } from 'react-native';

export const fonts = {
    bold: "MontserratBold",
    medium: "MontserratMedium",
    regular: "MontserratRegular",
}

export const CustomText = ({weight, children, style, ...rest}) => {
    return(
    <Text {...rest} style = {[{fontFamily: fontFamilies[weight] || fontFamilies.medium}, style]}>{children}</Text>
    )
}