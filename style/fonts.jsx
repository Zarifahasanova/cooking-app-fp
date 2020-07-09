import * as Font from 'expo-font'

import MontserratRegular from '../assets/fonts/MontserratRegular.ttf'
import MontserratMedium from '../assets/fonts/MontserratMedium.ttf'
import MontserratBold from '../assets/fonts/MontserratBold.ttf'
import NotoBold from '../assets/fonts/Noto Sans Bold.ttf'
import Noto from '../assets/fonts/Noto Sans.ttf'

export const loadFonts = () => {
    return Font.loadAsync({
        MontserratRegular,
        MontserratMedium,
        MontserratBold,
        NotoBold,
        Noto
    })
};