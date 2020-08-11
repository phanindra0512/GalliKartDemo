import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
import { Divider, Card, Title } from 'react-native-paper'

function Pharmacy({ props, navigation }) {

    const groceriesData = [
        {
            prdid: '001',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS0pf7vaYp4oNLaQwSYAnILBq4yHm4BpiKeg&usqp=CAU',
            productName: 'Sugar',
            productPrice: '40',
            productDiscount: '10%',
            productDescription: 'A sweet material that consists essentially of sucrose obtained from sugarcane or sugar beets, is typically colorless or white when pure, and is commonly used to sweeten foods and beverages.Any of numerous soluble and usually sweet carbohydrates (as glucose or sucrose) that occur naturally especially in plants.'
        },
        {
            prdid: '002',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhlanGY-A4-7mI6QgBF0JkS38NNAakAew8zg&usqp=CAU',
            productName: 'Chilly Powder',
            productPrice: '60',
            productDiscount: '5%',
            productDescription: 'Chili powder is a red-colored blend of powdered spices. While it contains some cayenne pepper for heat, it also has spices such as cumin, garlic powder, oregano, and paprika intended to lend the flavors expected in chili con carne. The ratio is one part cayenne to seven parts other spices, depending on the blend.'
        },
        {
            prdid: '003',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTknHDjtBSriV9Uv7mJJb_Dc7M4bpqlo1rBag&usqp=CAU',
            productName: 'Tamarind',
            productPrice: '50',
            productDiscount: '7%',
            productDescription: 'Tamarind is a hardwood tree known scientifically as Tamarindus indica. ... The tree produces bean-like pods filled with seeds surrounded by a fibrous pulp. The pulp of the young fruit is green and sour. As it ripens, the juicy pulp becomes paste-like and more sweet-sour.'
        },
        {
            prdid: '004',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcmW-he6rnDYuIu-JaJDpvUIbCffgkbeDz5A&usqp=CAU',
            productName: 'Dal',
            productPrice: '75',
            productDiscount: '15%',
            productDescription: 'Dal (also spelled daal; pronunciation: [d̪aːl]) is a term used in the Indian subcontinent for dried, split pulses (that is, lentils, peas, and beans) that do not require pre-soaking. The term is also used for various soups prepared from these pulses.'
        },
        {
            prdid: '005',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLPbb1dfcxRDO-76ORekip4P8DfIlfnpWcCw&usqp=CAU',
            productName: 'Aata',
            productPrice: '45',
            productDiscount: '10%',
            productDescription: 'Atta or chakki atta is a wholemeal wheat flour, originating from the Indian subcontinent, used to make flatbreads such as chapati, roti, naan, paratha and puri. It is the most widespread flour in the Indian subcontinent.'
        }
    ]

    const medicinesData = [
        {
            prdid: '301',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSairfHryUWxIe8woUJmavS6UbiOtYcwaovsg&usqp=CAU',
            productName: 'OMEE',
            productPrice: '45',
            productDiscount: '10%',
            productDescription: 'Omee Capsule is used in the treatment of heartburn and chest pain due to stomach acid reflux disease in which acidic content from the stomach comes up to food pipe and mouth. Treatment of ulcers of stomach, intestine and inflammation and erosion of food pipe due to stomach acid'
        },
        {
            prdid: '302',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT309GK-FdUQ_Cx86ZHDT3usneYQ_zcmSscvw&usqp=CAU',
            productName: 'Dart',
            productPrice: '45',
            productDiscount: '10%',
            productDescription: 'Dart Tablet is a combination of three medicines: Paracetamol, Phenazone and Caffeine which relieve headache. Paracetamol and Phenazone work by blocking the release of certain chemical messengers that cause fever, pain and inflammation (redness and swelling).'
        },
        {
            prdid: '303',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmAQvz9e5ETHjkvq3tU6WdOjWChfwG0uiPTg&usqp=CAU',
            productName: 'Paracitmol-250',
            productPrice: '45',
            productDiscount: '10%',
            productDescription: 'Paracetamol is part of the class of drugs known as "aniline analgesics"; it is the only such drug still in use today. It is not considered an NSAID because it does not exhibit significant anti-inflammatory activity (it is a weak COX inhibitor).'
        },
        {
            prdid: '304',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6rctKTUtQOyJNffiXVK3AABdGoawcwzlAmA&usqp=CAU',
            productName: 'Hand Sanitizer',
            productPrice: '45',
            productDiscount: '10%',
            productDescription: 'Hand sanitizer is a liquid, gel, or foam generally used to decrease infectious agents on the hands. In most settings, hand washing with soap and water is generally preferred. Hand sanitizer is less effective at killing certain kinds of germs, such as norovirus and Clostridium difficile and unlike soap and water, it cannot remove harmful chemicals. People may incorrectly wipe off hand sanitizer before it has dried, and some are less effective because their alcohol concentrations are too low.'
        },
        {
            prdid: '305',
            productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYJgPdaO3Al94Fh3q7t6aaAvnXYuZt6_tKdg&usqp=CAU',
            productName: 'DarmiFord k5',
            productPrice: '45',
            productDiscount: '10%',
            productDescription: 'Dermiford Cream is a combination medicine used in the treatment of various types of skin infections. It minimizes symptoms of inflammation such as redness, swelling, and itching by acting against the infection-causing microorganisms.'
        }
    ]

    const [isValue, setIsValue] = useState(1)
    const [isTitle, setIsTitle] = useState('Pharmacy')

    const pic = 'data:image/png;base64,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'

    return (
        <View style={{ flex: 1, }}>
            <HeaderComponent title={isTitle} name="arrow-left" size={23} {...props} />
            <View style={{ flex: 0.22, flexDirection: 'row', marginTop: 10 }}>

                <TouchableOpacity style={{ flex: 1, }} onPress={() => { setIsValue(0); setIsTitle('Groceries') }}>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT970pg7X_HnpBhmov_hQXGljzTNiFZp4hDPg&usqp=CAU' }} style={{ width: 100, height: 65, borderRadius: 5 }} />
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'flex-start', alignItems: 'center', }}>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Groceries</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, }} onPress={() => { setIsValue(1); setIsTitle('Pharmacy') }}>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={{ uri: 'https://nu.aeon.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/header_sized-kendal-l4ikccachoc-unsplash.jpg' }} style={{ width: 100, height: 65, borderRadius: 5 }} />
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'flex-start', alignItems: 'center', }}>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Pharmacy</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, }} onPress={() => alert('Not available')}>
                    <View style={{ flex: 1, }}>
                        <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={{ uri: 'https://www.kindpng.com/picc/m/65-653183_defence-courier-service-tracking-hd-png-download.png' }} style={{ width: 100, height: 65, borderRadius: 5 }} />
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'flex-start', alignItems: 'center', }}>
                            <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Parcel</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <Divider style={{ backgroundColor: '#000' }} />
            <ScrollView style={{ flex: 1 }}>
                {
                    isValue == 1 ?

                        <View>
                            {
                                medicinesData.map((medicineData, index) => {
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails',
                                            {
                                                id: medicineData.prdid,
                                                prdName: medicineData.productName,
                                                prdImage: medicineData.productImage,
                                                prdPrice: medicineData.productPrice,
                                                prdDescription: medicineData.productDescription,
                                                prdDiscount: medicineData.productDiscount
                                            }
                                        )}>
                                            <View key={index} style={{ flex: 1, height: 180, flexDirection: 'row', }}>
                                                <View style={{ flex: 0.5, }}>
                                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                                        <Image source={{ uri: medicineData.productImage }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                                    </View>
                                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>{medicineData.productName}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 0.5, }}>
                                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                                        <Image source={{ uri: medicineData.productImage }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                                    </View>
                                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>{medicineData.productName}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>

                        // <View>
                        //     <View style={{ flex: 1, height: 180, flexDirection: 'row', }}>
                        //         <View style={{ flex: 0.5, }}>
                        //             <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                        //                 <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                        //             </View>
                        //             <View style={{ flex: 0.2, alignItems: 'center', }}>
                        //                 <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Sugar</Text>
                        //             </View>
                        //         </View>
                        //         <View style={{ flex: 0.5, }}>
                        //             <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                        //                 <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                        //             </View>
                        //             <View style={{ flex: 0.2, alignItems: 'center', }}>
                        //                 <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Sugar</Text>
                        //             </View>
                        //         </View>
                        //     </View>

                        //     <View style={{ flex: 1, height: 180, flexDirection: 'row', }}>
                        //         <View style={{ flex: 0.5, }}>
                        //             <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                        //                 <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                        //             </View>
                        //             <View style={{ flex: 0.2, alignItems: 'center', }}>
                        //                 <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Sugar</Text>
                        //             </View>
                        //         </View>
                        //         <View style={{ flex: 0.5, }}>
                        //             <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                        //                 <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                        //             </View>
                        //             <View style={{ flex: 0.2, alignItems: 'center', }}>
                        //                 <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Sugar</Text>
                        //             </View>
                        //         </View>
                        //     </View>


                        //     <View style={{ flex: 1, height: 180, flexDirection: 'row', }}>
                        //         <View style={{ flex: 0.5, }}>
                        //             <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                        //                 <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                        //             </View>
                        //             <View style={{ flex: 0.2, alignItems: 'center', }}>
                        //                 <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Sugar</Text>
                        //             </View>
                        //         </View>
                        //         <View style={{ flex: 0.5, }}>
                        //             <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                        //                 <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                        //             </View>
                        //             <View style={{ flex: 0.2, alignItems: 'center', }}>
                        //                 <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Sugar</Text>
                        //             </View>
                        //         </View>
                        //     </View>
                        // </View>
                        :
                        <View>


                            {
                                groceriesData.map((groceryItem, index) => {
                                    return (
                                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails',
                                            {
                                                id: groceryItem.prdid,
                                                prdName: groceryItem.productName,
                                                prdImage: groceryItem.productImage,
                                                prdPrice: groceryItem.productPrice,
                                                prdDescription: groceryItem.productDescription,
                                                prdDiscount: groceryItem.productDiscount
                                            }
                                        )}>
                                            <View key={index} style={{ flex: 1, height: 180, flexDirection: 'row', }}>
                                                <View style={{ flex: 0.5, }}>
                                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                                        <Image source={{ uri: groceryItem.productImage }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                                    </View>
                                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>{groceryItem.productName}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flex: 0.5, }}>
                                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                                        <Image source={{ uri: groceryItem.productImage }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                                    </View>
                                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>{groceryItem.productName}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }


                            {/* <View style={{ flex: 1, height: 180, flexDirection: 'row', }}>
                                <View style={{ flex: 0.5, }}>
                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                        <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Pharmacy</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, }}>
                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                        <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Pharmacy</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 1, height: 180, flexDirection: 'row', }}>
                                <View style={{ flex: 0.5, }}>
                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                        <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Pharmacy</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, }}>
                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                        <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Pharmacy</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={{ flex: 1, height: 180, flexDirection: 'row', }}>
                                <View style={{ flex: 0.5, }}>
                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                        <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Pharmacy</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, }}>
                                    <View style={{ flex: 0.9, alignItems: 'center', justifyContent: 'flex-end', }}>
                                        <Image source={{ uri: pic }} style={{ width: 110, height: 140, borderRadius: 5 }} />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', }}>
                                        <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 17, color: '#002F72' }}>Pharmacy</Text>
                                    </View>
                                </View>
                            </View> */}
                        </View>

                }

            </ScrollView>


        </View>
    )
}

export default Pharmacy
