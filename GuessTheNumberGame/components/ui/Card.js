import { StyleSheet,View ,Dimensions} from "react-native";

function Card({children}){
    return(
        <View style ={styles.card} >{children}</View>   
    );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:deviceWidth < 380 ? 18 : 36,
        padding:16,
        backgroundColor:'#3b021f',
        marginHorizontal:24,
        borderRadius:8,
        elevation:8,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowRadius:6,
        shadowOffset:{width:0,height:2},        
    },

})