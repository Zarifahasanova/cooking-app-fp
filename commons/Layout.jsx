import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import COLORS from '../style/colors';
import { CustomText as Text } from '../components/CustomText/CustomText'

import arrowBackImg from '../assets/icons/backArrow.png'
import drawerImg from '../assets/icons/drawer.png'
import transparentImg from '../assets/icons/transparent.png'
import saveImg from '../assets/icons/save.png'
import editImg from '../assets/icons/edit.png'


export const  Layout = ({children, header = 'undefined', back = false, drawer = false, edit = false, save = false, }) => {
const insets = useSafeArea() ;
const navigation = useNavigation() ;
const custom = back || drawer || edit || save;
return (
    <View style={[styles.container, {
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
    }]}>


<StatusBar barStyle='light-content' translucent={true}/>


{custom && 

<View style={styles.customView} >
<TouchableOpacity disabled={!back} onPress={navigation.goBack}> 
<Image style={back ? {} : styles.transparentStyle} source={back ? arrowBackImg : transparentImg} />
                     </TouchableOpacity>
                    <Text style={styles.customText} weight='medium'>{header}</Text>
                    <TouchableOpacity onPress={
                        drawer ? navigation.toggleDrawer :
                            save ? save :
                                edit ? edit :
                                    () => {}}>
                        <Image style={drawer || edit || save ? {} : styles.transparentStyle} source={
                            drawer ? drawerImg :
                                save ? saveImg :
                                    edit ? editImg :
                                        transparentImg
                                    } />
                                    </TouchableOpacity>
                                </View>}
                                {
                !back && !drawer && !edit && !save &&
                <View style={styles.header}>
                    <Text weight='medium' style={styles.headerText}>{header}</Text>
                </View>
            }
  <View style={styles.body}>
                {children}
            </View>
        </View>
    )
}
 const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.main
    },
    body: {
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    header: {
        height: 75,
        justifyContent: 'center'
    },
    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    customView: {
        height: 75,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 12
    },
    customText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },  transparentStyle: {
        width: 15,
        height: 5
    }
 })
