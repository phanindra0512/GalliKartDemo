import React, { Component } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, Text, Image } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

class ImageSnapCarousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeSlide: '',
            images: [
                {
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5OMhEJsG7EylmLG5KHLgxMJ5jKfqKWr3oIA&usqp=CAU',
                    caption: 'AVOID VISITING CROWDED PLACES'
                },
                {
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM41cPGzZ-KjIKk0QLn_W5qJXPgrwdk0_1Eg&usqp=CAU',
                    caption: 'STAY HOME STAY SAFE'
                },
                {
                    image: 'https://www.pngkey.com/png/detail/84-847833_grocery-png-background-image-online-shopping-groceries.png',
                    caption: 'KEEP YOUR HANDS CLEAN'
                },
                {
                    image: 'https://img.freepik.com/free-photo/laptop-shopping-bags-online-shopping-concept_1423-189.jpg?size=626&ext=jpg',
                    caption: 'USE FACE MASK IF YOU`RE FEELING UNWELL'
                },
                {
                    image: 'https://p4.wallpaperbetter.com/wallpaper/145/876/936/doctor-medicine-nurse-wallpaper-preview.jpg',
                    caption: 'AVOID PHYSICAL CONTACT WITH OTHER PEOPLE'
                }
            ]
        }
    }

    _renderItem = ({ item, index }) => {
        return (
            <View key={index} style={{ flex: 1 }}>
                <Card elevation={10}>
                    <Card.Cover source={{ uri: item.image }} style={{ width: 330, height: 120, }} />
                    {/* <Text style={{ textAlign: 'center', padding: 10, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>{item.caption}</Text> */}
                </Card>
            </View>
        );
    }

    // get pagination() {
    //     const { images } = this.state;
    //     return (
    //         <Pagination
    //             dotsLength={images.length}
    //             activeDotIndex={this.state.activeSlide}
    //             containerStyle={{ backgroundColor: '#002F72', }}
    //             dotStyle={{
    //                 width: 10,
    //                 height: 10,
    //                 borderRadius: 5,
    //                 // marginHorizontal: 8,
    //                 backgroundColor: 'rgba(255, 255, 255, 0.92)'
    //             }}
    //             inactiveDotStyle={{
    //                 // Define styles for inactive dots here
    //             }}
    //             inactiveDotOpacity={0.4}
    //             inactiveDotScale={0.6}
    //         />
    //     );
    // }

    render() {
        return (
            <View>
                <Carousel
                    layout={'default'}
                    layoutCardOffset={18}
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.images}
                    renderItem={this._renderItem}
                    sliderWidth={350}
                    itemWidth={300}
                    autoplayDelay={1000}
                    autoplay={true}
                    autoplayInterval={2000}
                // onScroll={this._renderItem}

                // layout={'default'}
                // layoutCardOffset={18}

                />
                {/* {this.pagination} */}
            </View>
        );
    }
}

export default ImageSnapCarousel
