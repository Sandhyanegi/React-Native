import {View,Text,StyleSheet} from 'react-native';

function NumberCOntainer({children}){

    return(
            <View style = {styles.container}>
                <Text style = {styles.numberText}>{children}</Text>
            </View>
        );
}

export default NumberCOntainer;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'#ddb52f',
        padding:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center',

    },

    numberText:{
        color:'#ddb52f',
        fontSize:36,
        fontFamily:'open-sans-bold',
    },
})