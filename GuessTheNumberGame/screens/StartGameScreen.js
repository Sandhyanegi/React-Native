import {View, TextInput,StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}){

    const [enteredNumber, setEnteredNumber] = useState('');

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

    return (
        <View style = {styles.rootContainer}>            
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
    );

}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
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
