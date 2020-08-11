import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PayPal from 'react-native-paypal-gateway';
import { GooglePay } from 'react-native-google-pay';

const allowedCardNetworks = ['VISA', 'MASTERCARD'];
const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];

const requestData = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      // stripe (see Example):
      gateway: 'stripe',
      gatewayMerchantId: 'stripeVclean4u',
      stripe: {
        publishableKey: 'pk_test_51GwPsiK7y3iSuvM2uCF1GqvdzKwouux5JXZLgatR3yCP4lSeSlI3MEf8Pgz0YHFTdz3KbkriFxm3Jbq7xDAjlXBv00B7zWDKts',
        version: '2018-11-08',
      },
      // other:
      //   gateway: 'example',
      //   gatewayMerchantId: 'exampleGatewayMerchantId',
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '10',
    totalPriceStatus: 'FINAL',
    currencyCode: 'USD',
  },
  merchantName: 'parasad',
};

function PaymentScreen({ navigation }) {
  const paymentPaypal = async () => {
    try {
      PayPal.initialize(PayPal.NO_NETWORK, "AWZq6AwBsDXF0hQPynVFkr6r9weLDVQGx97rP_neAGsN2P36xpj4yDeLh9IvvyoAEB_x80JipoUaOzd1");
      PayPal.pay({
        price: '40.70',
        currency: 'USD',
        description: 'Galli kart demo payment testing',
      }).then(confirm => {
        console.log('pay success', confirm)
      })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }

  const payWithGoogle = async () => {
    try {
      GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);

      // Check if Google Pay is available
      GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
        .then((ready) => {
          if (ready) {
            // Request payment token
            GooglePay.requestPayment(requestData)
              .then((token) => {
                // Send a token to your payment gateway
                console.log(token);
              })
              .catch((error) => console.log(error.code, error.message));
          }
        })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#002F72', paddingLeft: 15, paddingTop: 10 }}>Payment Methods</Text>
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
        <TouchableOpacity onPress={() => alert('Not available right now')}>
          <Card style={{ height: 70, width: 320, }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ flex: 0.5 }}>
                <Image source={require('../../assets/cards.png')} style={{ width: 50, height: 50, borderColor: 'grey', borderWidth: 1, borderRadius: 5, marginLeft: 15 }} />

              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Pay with Cards</Text>

              </View>
              <View style={{ flex: 0.3 }}>
                <Icon name="chevron-right" color="#002F72" size={30} />
              </View>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={paymentPaypal}>
          <Card style={{ height: 70, width: 320, marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ flex: 0.5 }}>
                <Image source={require('../../assets/paypal-logoe.png')} style={{ width: 50, height: 50, borderColor: 'grey', borderWidth: 1, borderRadius: 5, marginLeft: 15 }} />

              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Paypal</Text>

              </View>
              <View style={{ flex: 0.3 }}>
                <Icon name="chevron-right" color="#002F72" size={30} />
              </View>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Not available right now')}>
          <Card style={{ height: 70, width: 320, marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ flex: 0.5 }}>
                <Image source={require('../../assets/iphonelogo.jpg')} style={{ width: 50, height: 50, borderColor: 'grey', borderWidth: 1, borderRadius: 5, marginLeft: 15 }} />

              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Apple Pay</Text>

              </View>
              <View style={{ flex: 0.3 }}>
                <Icon name="chevron-right" color="#002F72" size={30} />
              </View>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={payWithGoogle}>
          <Card style={{ height: 70, width: 320, marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
              <View style={{ flex: 0.5 }}>
                <Image source={require('../../assets/glogom.jpg')} style={{ width: 50, height: 50, borderColor: 'grey', borderWidth: 1, borderRadius: 5, marginLeft: 15 }} />

              </View>
              <View style={{ flex: 0.8 }}>
                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Google Pay</Text>

              </View>
              <View style={{ flex: 0.3 }}>
                <Icon name="chevron-right" color="#002F72" size={30} />
              </View>
            </View>
          </Card>
        </TouchableOpacity>

      </View>
      <Button
        mode='contained'
        labelStyle={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', }}
        style={{ backgroundColor: '#002F72', padding: 5 }}
        onPress={() => navigation.navigate('Success')}
      >confirm</Button>
    </View>
  )
}

export default PaymentScreen;
