import react from "react";
import {SafeAreaView, View, Image, Text, Button} from 'react-native'


function Referral(props) {

     return (
         <SafeAreaView>
           
           <View style={{
                marginTop: 40,
                marginStart: 15
               }}>
               <Image source={require('./src/assets/back.png')}/>
               <Text style={{
                    marginTop: -20,
                    textAlign: "center",
                    color: '#21334F',
                    lineHeight: 19
                    
               }}>Invite Friends</Text>
           
           </View>

           <View style={{
             alignItems: "center"
           }}>
             <Image style={{
               width: '90%',
               marginTop: 18,
             }}
             source={require('./src/assets/Frame1.png')}/>
           </View>
           <View>
             <Text style={{
               marginStart: 20,
               color: '#21334F',
               fontSize: 32,
               fontStyle: 'normal',
               marginTop: 8
             }}>Refer your friends & get cash back</Text>

<Text style={{
               marginStart: 20,
               color: '#21334F',
               fontSize: 17,
               marginTop: 5,
              //  fontFamily: 'manrope'
             }}>Invite your friends to join Aqua and get N500 cashback for each friend that joins using your referral code.</Text>
           </View>
           <View style={{
             alignItems: "center"
           }}>
             <Image style={{
               width: '100%',
               marginTop: 15,
             }}
             source={require('./src/assets/Rectangle_1.png')}/>
           </View>
           <View>
           <Text style={{
               marginStart: 20,
               color: '#21334F',
               fontSize: 15,
               marginTop: 10,
              //  fontFamily: 'manrope'
             }}>My Referrals</Text>
           </View>

           <View style={{
             alignItems: "center"
           }}>
             <Image style={{
               marginTop: 15,
               marginStart: 15
             }}
             source={require('./src/assets/Group_1.png')}/>
           </View>

           <View style={{
             marginTop: 12,
             marginStart: 15,
             marginEnd: 15
           }}>
           <Button
          style={{
            color: '#147DF5',
            
          }}
        title="Invite more Friends"
        
      />
           </View>
           
               
         </SafeAreaView>
     );
 }
 
 export default Referral;