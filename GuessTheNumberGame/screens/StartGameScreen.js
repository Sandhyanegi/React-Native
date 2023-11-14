import {View, TextInput,StyleSheet, Alert,ScrollView, useWindowDimensions,KeyboardAvoidingView} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}){

    const [enteredNumber, setEnteredNumber] = useState('');

    const {width, height} = useWindowDimensions();

    function numberInoutHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function confirmInputHadler(){
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                    'Invalid Number',
                    'Number has to be a number between 1 and 99.',
                    [{text:'okay', style: 'destructive', onPress: resetInputHandler}]
                );
            return;
        }

        onPickNumber(chosenNumber);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style = {styles.screen}>
            <KeyboardAvoidingView style = { styles.screen} behavior = 'position'>
                <View style = {[styles.rootContainer, {marginTop : marginTopDistance}]}>            
                    <Title>Guess my number</Title>        
                <Card>
                        <InstructionText>Enter a number</InstructionText>
                        <TextInput 
                            style = {styles.numberInput} 
                            maxLength={2} 
                            keyboardType='number-pad'
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={numberInoutHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPressV={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPressV={confirmInputHadler}>confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );

}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    rootContainer:{
        flex:1,
        // marginTop:deviceHeight < 300 ? 30 : 100,
        alignItems:'center',
    },

    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        textAlign:'center',
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
    },

    buttonsContainer:{
        flexDirection:'row',
    },

    buttonContainer:{
        flex:1
    },

})
