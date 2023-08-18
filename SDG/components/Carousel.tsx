import {View, Text} from 'react-native';
import React from 'react';
import {SlideBox} from 'react-native-image-slider-box';

export default function Carousel(){
    const images = [
        require('../images/1.jpg'),
        require('../images/2.jpg'),
        require('../images/3.jpg'),
        require('../images/4.jpg'),
    ];
    return (
        <View>
            <SlideBox images= {images} dotColor="red" inactiveDotColor="black" />
        </View>
    );
}
