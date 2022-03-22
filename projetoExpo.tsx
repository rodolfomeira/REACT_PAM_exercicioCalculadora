import React, { useState } from 'react';
import { Button, View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons';

//Tela da Operação Aritmeticas
function Operacoesaritmeticas({ navigation }) {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [tema, setTema] = useState(true);
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: tema ? "#fff" : "#000",   
      padding: 8,
    },
      text: {
      color: tema ? "#000" : "#fff", 
    },
    textP:{
      color: tema ? "#000" : "#fff", 
      fontSize: 20,
    },
    textInput: {
      color: tema ? "#000" : "#fff",
      backgroundColor: tema ? "#dcdce3" : "#5A5E69",
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: tema ? "#000": "#fff",
      borderRadius: 10,
      padding: 10,
    },
    botaoContainer:{
      flex:1,
      flexDirection: "column",
      alignItems: "center",
    },
    botao: {
      alignItems: "center",    
      margin:5,
      backgroundColor:  tema ? "#575757" : "#272729",
      borderRadius: 4,
      padding: 10,
      width: 300,    
    },
    botaoM:{    
      alignItems: "center",    
      margin:5,
      backgroundColor: tema ? "#575757" : "#272729",
      borderRadius: 4,
      padding: 10,
      width: 300,
    },

    botaotexto: {
      color: "#fff",
      textTransform: "uppercase",
    },
    temaBotao:{
      alignSelf: "flex-start",
      margin: 5,
      backgroundColor: tema ? "#e5e5e5" : "#7b8084",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,      
    }

});
 
  const soma = () => {
    let resultado = x + y;
    alert(`${x} + ${y} = ${resultado}`);
    setX('');
    setY('');
  };

  const subtrair = () => {
    let resultado = x - y;
    alert(`${x} - ${y} = ${resultado}`);
    setX('');
    setY('');
  };

  const multiplicar = () => {
    let resultado = x * y;
    alert(`${x} * ${y} = ${resultado}`);
    setX('');
    setY('');
  };

  const dividir = () => {
    let resultado = x / y;
    alert(`${x} / ${y} = ${resultado}`);
    setX('');
    setY('');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.temaBotao}>
        <Entypo name={tema ? "moon" : "light-up"} size={24} color={tema ? "black" : "white"} onPress={()=> tema ? setTema(false) : setTema(true)} />      
      </TouchableOpacity>
      <Text style={styles.text}>Digite um número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setX(parseInt(texto))}
        value={x}
      />
      <Text style={styles.text}>Digite outro número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setY(parseInt(texto))}
        value={y}
      />
      <View style={styles.botaoContainer}>
        <TouchableOpacity style={styles.botao} onPress={soma}>
          <Text style={styles.botaotexto}>Soma</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={subtrair}>
          <Text style={styles.botaotexto}>
            Subtrair
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={multiplicar}>
          <Text style={styles.botaotexto}>
            Multiplicar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={dividir}>
          <Text style={styles.botaotexto}>
            Dividir
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoM} onPress={() => navigation.navigate('Cálculos Geométricos')}>
          <Text style={styles.botaotexto}>Calculo Geométricos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//Tela Calculos Geometricos
function CalculosGeometricos({ navigation }) {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);  
  const [tema, setTema] = useState(true);
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: tema ? "#fff" : "#000",   
      padding: 8,
    },
      text: {
      color: tema ? "#000" : "#fff", 
    },
    textP:{
      color: tema ? "#000" : "#fff", 
      fontSize: 20,
    },
    textInput: {
      color: tema ? "#000" : "#fff",
      backgroundColor: tema ? "#fff" : "#272729",
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: tema ? "#000": "#272729",
      borderRadius: 10,
      padding: 10,
    },
    botaoContainer:{
      flex:1,
      flexDirection: "column",
      alignItems: "center",
    },
    botao: {
      alignItems: "center",    
      margin:5,
      backgroundColor: tema ? "#575757" : "#272729",
      borderRadius: 4,
      padding: 10,
      width: 300,    
    },
    botaoM:{    
      alignItems: "center",    
      margin:5,
      backgroundColor: tema ? "#1c1b1b" : "#575757",
      borderRadius: 4,
      padding: 10,
      width: 300,
    },

    botaotexto: {
      color: "#fff",
      textTransform: "uppercase",
    },

    temaBotao:{
      alignSelf: "flex-start",
      margin: 5,
      backgroundColor: tema ? "#e5e5e5" : "#7b8084",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
    }

});
    const retangulo = () => {
    let resultado = x * y;
    alert(`Base ${x}  Altura ${y} = Area ${resultado}`);
    setX('');
    setY('');
  };

    const triangulo = () => {
    let resultado = x * y / 2;
    alert(`Base ${x}  Altura ${y} = Area ${resultado}`);
    setX('');
    setY('');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.temaBotao}>
        <Entypo name={tema ? "moon" : "light-up"} size={24} color={tema ? "black" : "white"} onPress={()=> tema ? setTema(false) : setTema(true)} />      
      </TouchableOpacity>

      <Text style={styles.text}>Digite um número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setX(parseInt(texto))}
        value={x}
      />
      <Text style={styles.text}>Digite outro número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setY(parseInt(texto))}
        value={y}
      />
      <View style={styles.botaoContainer}>
        <TouchableOpacity style={styles.botao} onPress={retangulo}>
          <Text style={styles.botaotexto}>
            Calculo Retângulo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={triangulo}>
          <Text style={styles.botaotexto}>
            Calculo Triângulo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoM} onPress={() => navigation.navigate('Cálculos Perimetro')}>
          <Text style={styles.botaotexto}>Cálculos Perimetro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//Tela Peimetro
function CalculosPerimetro({ navigation }) {  
  const [tema, setTema] = useState(true);
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: tema ? "#fff" : "#000",   
      padding: 8,
    },
      text: {
      color: tema ? "#000" : "#fff", 
    },
    textP:{
      color: tema ? "#000" : "#fff", 
      fontSize: 20,
    },
    textInput: {
      color: tema ? "#000" : "#fff",
      backgroundColor: tema ? "#fff" : "#272729",
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: tema ? "#000": "#272729",
      borderRadius: 10,
      padding: 10,
    },
    botaoContainer:{
      flex:1,
      flexDirection: "column",
      alignItems: "center",
    },
    botao: {
      alignItems: "center",    
      margin:5,
      backgroundColor:  tema ? "#575757" : "#272729",
      borderRadius: 4,
      padding: 10,
      width: 300,    
    },
    botaoM:{    
      alignItems: "center",    
      margin:5,
      backgroundColor: tema ? "#575757" : "#272729",
      borderRadius: 4,
      padding: 10,
      width: 300,
    },

    botaotexto: {
      color: "#fff",
      textTransform: "uppercase",
    },

    temaBotao:{
      alignSelf: "flex-start",
      margin: 5,
      backgroundColor: tema ? "#e5e5e5" : "#7b8084",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
    }

});
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.temaBotao}>
        <Entypo name={tema ? "moon" : "light-up"} size={24} color={tema ? "black" : "white"} onPress={()=> tema ? setTema(false) : setTema(true)} />      
      </TouchableOpacity> 
      <Text style={styles.textP}>Selecione qual perimetro deseja calcular</Text>
      <View style={styles.botaoContainer}>
        <TouchableOpacity style={styles.botaoM} onPress={() => navigation.navigate('Perimetro Quadrado')}>
            <Text style={styles.botaotexto}>Cálculo Perimetro do Quadrado</Text>
        </TouchableOpacity>
              <TouchableOpacity style={styles.botaoM} onPress={() => navigation.navigate('Perimetro Triangulo')}>
            <Text style={styles.botaotexto}>Cálculo Perimetro do Triangulo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//Tela do calclulo do perimetro do quadrado
function perimetroQuadrado({ navigation }) {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);  
  const [tema, setTema] = useState(true);
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: tema ? "#fff" : "#000",   
      padding: 8,
    },
      text: {
      color: tema ? "#000" : "#fff", 
    },
    textP:{
      color: tema ? "#000" : "#fff", 
      fontSize: 20,
    },
    textInput: {
      color: tema ? "#000" : "#fff",
      backgroundColor: tema ? "#fff" : "#272729",
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: tema ? "#000": "#272729",
      borderRadius: 10,
      padding: 10,
    },
    botaoContainer:{
      flex:1,
      flexDirection: "column",
      alignItems: "center",
    },
    botao: {
      alignItems: "center",    
      margin:5,
      backgroundColor: tema ? "#841584" : "#272729",
      borderRadius: 4,
      padding: 10,
      width: 200,    
    },
    botaoM:{    
      alignItems: "center",    
      margin:5,
      backgroundColor: "#1a237e",
      borderRadius: 4,
      padding: 10,
      width: 200,
    },

    botaotexto: {
      color: "#fff",
      textTransform: "uppercase",
    },

    temaBotao:{
      alignSelf: "flex-start",
      margin: 5,
      backgroundColor: tema ? "#e5e5e5" : "#7b8084",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
    }
});

  const QuadradoPerimetro = () => {
    let resultado = x + y + a + b;
    alert(`Lado 1: ${x}  Lado 2: ${y} Lado 3: ${a}  Lado 4: ${b} = Perímetro do Quadrado ${resultado}`);
    setX('');
    setY('');
    setA('');
    setB('');
  };
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.temaBotao}>
        <Entypo name={tema ? "moon" : "light-up"} size={24} color={tema ? "black" : "white"} onPress={()=> tema ? setTema(false) : setTema(true)} />      
      </TouchableOpacity>
      <Text style={styles.text}>Digite um número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setX(parseInt(texto))}
        value={x}
      />
      <Text style={styles.text}>Digite outro número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setY(parseInt(texto))}
        value={y}
      />

      <Text style={styles.text}>Digite outro número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setA(parseInt(texto))}
        value={a}
      />

      <Text style={styles.text}>Digite outro número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setB(parseInt(texto))}
        value={b}
      />

      <View style={styles.botaoContainer}>
          <TouchableOpacity style={styles.botao} onPress={QuadradoPerimetro}>
            <Text style={styles.botaotexto}>
              Calculo Perimetro
            </Text>
          </TouchableOpacity>
        </View>
    </View>
    );
}

//Tela do calculo do perimetro do triangulo
function perimetroTriangulo({ navigation }) {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [a, setA] = useState(null);  
  const [tema, setTema] = useState(true);
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: tema ? "#fff" : "#000",   
      padding: 8,
    },
      text: {
      color: tema ? "#000" : "#fff", 
    },
    textP:{
      color: tema ? "#000" : "#fff", 
      fontSize: 20,
    },
    textInput: {
      color: tema ? "#000" : "#fff",
      backgroundColor: tema ? "#fff" : "#272729",
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: tema ? "#000": "#272729",
      borderRadius: 10,
      padding: 10,
    },
    botaoContainer:{
      flex:1,
      flexDirection: "column",
      alignItems: "center",
    },
    botao: {
      alignItems: "center",    
      margin:5,
      backgroundColor: tema ? "#61CF9D" : "#272729",
      borderRadius: 4,
      padding: 10,
      width: 200,    
    },
    botaoM:{    
      alignItems: "center",    
      margin:5,
      backgroundColor: "#1a237e",
      borderRadius: 4,
      padding: 10,
      width: 200,
    },

    botaotexto: {
      color: "#fff",
      textTransform: "uppercase",
    }

});

  const TrianguloPerimetro = () => {
    let resultado = x + y + a;
    alert(`Lado 1: ${x}  Lado 2: ${y} Lado 3: ${a} = Perímetro do Triangulo ${resultado}`);
    setX('');
    setY('');
    setA('');
  };
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.temaBotao}>
        <Entypo name={tema ? "moon" : "light-up"} size={24} color={tema ? "black" : "white"} onPress={()=> tema ? setTema(false) : setTema(true)} />      
      </TouchableOpacity>
      <Text style={styles.text}>Digite um número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setX(parseInt(texto))}
        value={x}
      />
      <Text style={styles.text}>Digite outro número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setY(parseInt(texto))}
        value={y}
      />

      <Text style={styles.text}>Digite outro número</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Número"
        placeholderTextColor={tema ? "#000" : "#fff"}
        keyboardType="number-pad"
        onChangeText={(texto) => setA(parseInt(texto))}
        value={a}
      />

        <View style={styles.botaoContainer}>
          <TouchableOpacity style={styles.botao} onPress={TrianguloPerimetro}>
            <Text style={styles.botaotexto}>
              Calculo Perimetro
            </Text>
          </TouchableOpacity>
        </View>
    </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Operações aritméticas" component={Operacoesaritmeticas} />
        <Stack.Screen name="Cálculos Geométricos" component={CalculosGeometricos} />
        <Stack.Screen name="Cálculos Perimetro" component={CalculosPerimetro} />
        <Stack.Screen name="Perimetro Quadrado" component={perimetroQuadrado} />        
        <Stack.Screen name="Perimetro Triangulo" component={perimetroTriangulo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App