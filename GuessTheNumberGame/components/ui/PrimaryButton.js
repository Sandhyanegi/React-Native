import {View,Text, Pressable,StyleSheet} from 'react-native';

function PrimaryButton({children, onPressV}){

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]:styles.buttonInnerContainer} 
                onPress={onPressV} 
                android_ripple={{color: '#640233'}}>
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({

    buttonOuterContainer:{
        borderRadius:28,        
        margin:4,
        overflow:'hidden',
    },
    buttonInnerContainer:{
        backgroundColor:'#72063c',
        paddingHorizontal:16,
        paddingVertical:8,
        elevation:2,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:6,
        shadowOffset:{width:0,height:2}, 

    },
    buttonText:{
        color:'white',
        textAlign:'center',
    },

    pressed:{
        opacity:0.75,
    }
})