import { StatusBar } from "expo-status-bar";
import { Text,TextInput,ScrollView,View,StyleSheet } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    paddingTop: 400,
    paddingBottom: 490
  },
  textStyle:{
    color: 'white',
    fontSize: 30
  },
  inputStyle:{
    backgroundColor: 'white',
    color:'black',
    marginTop: 20,
    padding: 20,
    width: 300,
    borderRadius: 20
  }
})

const TextRight = () => {
  const [text, setText] = useState('')
  return(
    <View>
      <TextInput style={styles.inputStyle} placeholder="Type here to translate"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize:42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  )
}

const TextChange = () => {
  return(
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textStyle}>I am Victor by name</Text>
        <StatusBar style="auto"/>
        <TextRight />
      </View>
    </ScrollView>
  )
}

export default TextChange