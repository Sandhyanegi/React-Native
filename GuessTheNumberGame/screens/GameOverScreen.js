import { View,Image,StyleSheet,Text } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber,userNumber,onStartNewGame}){
    return(
        <View style={styles.rootCOntainer}>
            <Title>Game Over!</Title>
            <View style = {styles.imageContainer}>
              <Image style={styles.image} source={require('../assets/images/success.jpg')}></Image>
            </View>
            <View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text> rounds to guess the number
                    <Text style={styles.highLight}>{userNumber}</Text>.
                </Text>
                <View style={styles.button}>
                  <PrimaryButton onPressV={onStartNewGame}>Start New Game</PrimaryButton>
                </View>
            </View>
        </View>
        );
}

export default GameOverScreen;
const styles = StyleSheet.create({
    rootCOntainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer:{
        borderRadius:150,
        width:300,
        height:300,
        borderWidth:3,
        borderColor:'#3b021f',
        overflow:'hidden',
        margin:36,

    },
    image:{
        width:'100%',
        height:'100%',
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:24,
    },
    highLight:{
        fontFamily:'open-sans-bold',
        color:'#72063c',
    },
    button:{
        justifyContent:'center',
        alignItems:'center',

    }
})