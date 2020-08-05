import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, Text, Image } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

class ImageSnapCarousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                {
                    image: 'https://www.foogadlife.com/wp-content/uploads/2020/06/vegetables-1024x545.jpg',
                    caption: 'AVOID VISITING CROWDED PLACES'
                },
                {
                    image: 'https://omsi.in/wp-content/uploads/2018/04/Online-Medical-Store-Howrah.jpg',
                    caption: 'STAY HOME STAY SAFE'
                },
                {
                    image: 'https://www.asiaone.com/sites/default/files/original_images/Dec2014/20141217_parcelcollection_ST.jpg',
                    caption: 'KEEP YOUR HANDS CLEAN'
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2020/03/26/16/11/corona-4970836__340.jpg',
                    caption: 'USE FACE MASK IF YOU`RE FEELING UNWELL'
                },
                {
                    image: 'https://www.connexionfrance.com/var/connexion/storage/images/_aliases/articleimage/media/images/fruit-and-veg2/811376-1-eng-GB/fruit-and-veg.jpg',
                    caption: 'AVOID PHYSICAL CONTACT WITH OTHER PEOPLE'
                }
            ]
        }
    }

    _renderItem = ({ item, index }) => {
        return (
            <View key={index} style={{ flex: 1 }}>
                <Card elevation={10}>
                    <Card.Cover source={{ uri: item.image }} style={{ width: 340, height: 200,borderColor:'grey',borderWidth:2,borderRadius:5 ,alignSelf:'center',}} />
                    {/* <Text style={{ textAlign: 'center', padding: 10, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>{item.caption}</Text> */}
                </Card>
            </View>
        );
    }


    render() {
        return (
            <Carousel
                layout={'default'}
                layoutCardOffset={18}
                ref={(c) => { this._carousel = c; }}
                data={this.state.images}
                renderItem={this._renderItem}
                sliderWidth={350}
                itemWidth={330}
                autoplayDelay={1000}
                autoplay={true}
                autoplayInterval={2500}
            // onScroll={this._renderItem}

            // layout={'default'}
            // layoutCardOffset={18}

            />
        );
    }
}

export default ImageSnapCarousel
