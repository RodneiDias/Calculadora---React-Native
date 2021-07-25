import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    formato:{
        flex: 6,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#363636",
  
    },
    content:{
        backgroundColor: "#0000CD",
        height:'auto',
        // justifyContent:"center",
        alignItems:"center",        
        borderWidth:1,
        borderRadius:30,
        flex:10,
    },
    viewHeader:{
        width:360,
        height:60,
        backgroundColor: '#483D8B',
        justifyContent:'center',
        alignItems: 'center',
        textAlign:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        flex:1,
    },
    textHeader:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        
    },
    viewcontent:{
        width:360,
        height:500,
        backgroundColor: 'green',
        justifyContent:'center',
        alignItems: 'center',
    
    },
    textcontent:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
    
    },
    botoes:{
        width:60,
        height:50,        
        margin:2,
        backgroundColor:'#969696',
        padding:10,
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:10,
        borderColor: 'black',        
        textAlign:'center',
        
      
        height:50,        
    },
    botaoLimpa:{
        width:100,  
        margin:20,
        backgroundColor:'#969696',
        padding:8,
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:10,
        borderColor: 'black',        
        textAlign:'center',  
             
    },
    viewLimpa:{
        flex:1,
        flexDirection:"row", 
        justifyContent:'center',
        alignContent:'center'
    },
 
    viewBts1:{
        flex:1,
        flexDirection:"column",
        marginTop: 20,
    },
    viewBtslinha:{
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        
    },
    visor:{
        
        height:40,
        flexDirection:'row',
       
    },
    visorTxt:{
        fontSize:20,
        textAlign:'center',
        width:180,
        backgroundColor:'#B0C4DE',
    },
    visorResult:{
        fontSize:20,
        textAlign:'center',
        color:'white',
        padding:20,
        backgroundColor:'#B0C4DE',
    },

    viewfooter:{
        width:'auto',
        height:'auto',
        justifyContent:'flex-end',
        alignItems: 'center',
        flex:1,
    },
    viewfooter1:{
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'flex-end',
    
    },
    textfooter:{
        color:'white',
        fontWeight:'bold',
        fontSize:14,
        
    
    },
})