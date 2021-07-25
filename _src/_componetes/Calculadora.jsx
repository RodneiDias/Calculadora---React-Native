import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import {styles} from '../Styles/Style'
export default function Calculadora() {
    const [valor, setValor] = useState({
        valorA: 0,
        valorB: 0,
        total: 0,
    })
    console.log(valor.total);
    const handleInputChange = (name, value) => {
        setValor({
            ...valor, [name]: value
        })
    }
    const soma = () => {
        console.log('soma');
        setValor({
            ...valor, total: (valor.valorA + valor.valorB)
        })
    }
    const subTracao = () => {
        setValor({
            ...valor, total: (valor.valorA - valor.valorB)
        })
    }
    const divisao = () => {
        console.log('divisão');
        setValor({
            ...valor, total: (valor.valorA / valor.valorB)
        })
    }
    const multiplicacao = () => {
        setValor({
            ...valor, total: (valor.valorA * valor.valorB)
        })
    }
    const exponencialA = () => {
        setValor({
            ...valor, total: Math.pow(valor.valorA, 2)
        })
    }
    const exponencialB = () => {
        setValor({
            ...valor, total: Math.pow(valor.valorB, 2)
        })
    }
    const exponencialAB = () => {
        setValor({
            ...valor, total: Math.pow(valor.valorA, valor.valorB)
        })
    }
    const raizQuadrada = () => {
        setValor({
            ...valor, total: Math.pow(valor.valorA, 0.5)
        })
    }
    const raizCubica = () => {
        setValor({
            ...valor, total: Math.pow(valor.valorA, 1/3)
        })
    }
    const pi = () => {
        setValor({
            ...valor, total:(Math.PI)
        })
    }
    const tan = () => {
        setValor({
           
            ...valor, total: Math.tan(valor.valorA)
        })
    }
    const sin = () => {
        setValor({
            ...valor, total: Math.sin(valor.valorA, 10)
        })
    }
    const cos = () => {
        setValor({
            ...valor, total: Math.cos(valor.valorA)
        })
    }
    const log = () => {
        setValor({
            ...valor, total: Math.log(valor.valorA)
        })
    }
    const log10 = () => {
        setValor({
            ...valor, total: Math.log10(valor.valorA)
        })
    }
    const acos = () => {
        setValor({
            ...valor, total: Math.acos(valor.valorA)
        })
    }

    const limpar = () => {
        setValor({
            valorA: "",
            valorB: "",
            total: "",
        })
    }
    const {total} = valor;
    return (
        <View  >
            <View style={styles.visor}>
                <TextInput
                    style={styles.visorTxt}
                    placeholder="Valor A"
                    value={valor.valorA}
                    onChangeText={(valor) => handleInputChange("valorA", Number(valor))}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.visorTxt}
                    placeholder="Valor B"
                    value={valor.valorB}
                    onChangeText={(valor) => handleInputChange("valorB", Number(valor))}
                    keyboardType="numeric"
                />
            </View>           
            <Text style={styles.visorResult}>Resultado: {total}</Text>
        <View style={styles.viewBts1}>
            <View style={styles.viewBtslinha}>
                <TouchableOpacity style={styles.botoes}  onPress={soma} color="#969696"><Text style={styles.textBotao}>+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botoes}  onPress={subTracao} color="#969696"><Text style={styles.textBotao}>-</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botoes}  onPress={divisao} color="#969696"><Text style={styles.textBotao}>/</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botoes}  onPress={multiplicacao} color="#969696"><Text>*</Text></TouchableOpacity>
                <TouchableOpacity style={styles.botoes}  onPress={exponencialA} color="#969696"><Text>a²</Text></TouchableOpacity>
                {/* <TouchableOpacity style={styles.botoes}  onPress={exponencialB} color="#969696"><Text>b²</Text></TouchableOpacity>          */}
            </View>
        <View style={styles.viewBtslinha}>
            <TouchableOpacity style={styles.botoes}  onPress={exponencialAB} color="#969696"><Text style={styles.textBotao}>a^b</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botoes} onPress={raizQuadrada} color="#969696"><Text style={styles.textBotao}>Raiz²</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botoes} onPress={raizCubica} color="#969696"><Text style={styles.textBotao}>Raiz³</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botoes} onPress={pi}><Text style={styles.textBotao}>Pi</Text ></TouchableOpacity>
            <TouchableOpacity style={styles.botoes} onPress={sin} color="#969696"><Text style={styles.textBotao}>Sin</Text></TouchableOpacity>
            {/* <TouchableOpacity style={styles.botoes} onPress={limpar}><Text>Limpa</Text></TouchableOpacity> */}
            
        </View> 
           <View style={styles.viewBtslinha}>
            <TouchableOpacity style={styles.botoes} onPress={cos} color="#969696"><Text style={styles.textBotao}>Cos</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botoes}  onPress={tan} color="#969696"><Text style={styles.textBotao}>Tan</Text></TouchableOpacity>
            
            <TouchableOpacity style={styles.botoes} onPress={log} color="#969696"><Text style={styles.textBotao}>log</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botoes}  onPress={log10} color="#969696"><Text style={styles.textBotao}>log10</Text></TouchableOpacity>
            <TouchableOpacity style={styles.botoes} onPress={acos} color="#969696"><Text style={styles.textBotao}>acos</Text></TouchableOpacity>
            {/* <TouchableOpacity style={styles.botoes} onPress={raizCubica} color="#969696"><Text style={styles.textBotao}>raiz³</Text></TouchableOpacity>
             */}
        </View> 
        <View style={styles.viewLimpa}>
            <View >
                <TouchableOpacity style={styles.botaoLimpa} onPress={limpar}><Text style={styles.textBotao}>Limpa</Text></TouchableOpacity>
            </View>

            
        </View>
        
        </View>    
        

            
    </View>
    )
}

    
