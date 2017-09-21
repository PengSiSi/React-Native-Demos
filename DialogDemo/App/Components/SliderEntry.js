
import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './../Styles/SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={[styles.image, { position: 'relative' }]}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`You've clicked '${title}'`); }}
              >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    <Text style={{flexDirection: 'row', justifyContent:'center', marginVertical: 20, marginHorizontal: 100,color:'white'}}>第二章</Text>
                    <Text style={{flexDirection: 'row', justifyContent:'center', marginHorizontal: 80,color:'white'}}>丰富的图形世界</Text>
                    <View style={{flexDirection: 'row', justifyContent:'center', marginVertical: 20}}>
                        <Text style={{flexDirection: 'row', alignSelf: 'center', color:'white'}}>完成</Text>
                        <Text style={{flexDirection: 'row', fontSize: 20, alignSelf: 'center',color:'white'}}> 50% </Text>
                        <Text style={{flexDirection: 'row', alignSelf: 'center',color:'white'}}>战胜</Text>
                        <Text style={{flexDirection: 'row', fontSize: 20, alignSelf: 'center',color:'white'}}> 20% </Text>
                        <Text style={{flexDirection: 'row', alignSelf: 'center',color:'white'}}>的同学</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}