import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import estilosGlobal from "./estilos";
import { ScrollView } from "react-native-gesture-handler";

export function retornaValorProporcional(valor, porcentagem) {
  const valorProporcional = (valor * porcentagem) / 100;

  return valorProporcional;
}

export function retornaTotalJuros(valorDivida, jurosDivida) {
  const total = parseFloat(valorDivida) + parseFloat(jurosDivida);

  return total;
}

export function retornaTotalDesconto(valorDivida, descontoDivida) {
  const total = parseFloat(valorDivida) - parseFloat(descontoDivida);

  return total;
}

export default function App () {

    const [valor, setValor] = useState(0);
    const [juros, setJuros] = useState(0);
    const [valorJuros, setValorJuros] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    function handleCalculaJuros() {
        const jurosCalculado = retornaValorProporcional(valor, juros);
        const totalDivida = retornaTotalJuros(valor, jurosCalculado);

        setValorJuros(jurosCalculado)
        setValorTotal(totalDivida);
    }

    return(
        <ScrollView style={estilosGlobal.container}>
            <Text style={estilosGlobal.titulo}>Calcular Juros</Text>
            <View style={estilosGlobal.areaInput}>
                <Text style={estilosGlobal.text}>R$</Text>
                <TextInput style={estilosGlobal.input} placeholder="Digite o valor em reais" onChangeText={(valor) => { setValor(valor) }} />
            </View>
            <View style={estilosGlobal.areaInput}>
                <Text style={estilosGlobal.text}>%</Text>
                <TextInput style={estilosGlobal.input} placeholder="Digite o percentual de juros" onChangeText={(juros) => { setJuros(juros) }} />
            </View>
            <View style={estilosGlobal.areaResultado}>
                <Text style={estilosGlobal.tituloResultado}>Valor original da dívida:</Text>
                <Text style={estilosGlobal.valorResultado}>R$ {valor} </Text>
                <Text style={estilosGlobal.tituloResultado}>Juros de {juros} %:</Text>
                <Text style={estilosGlobal.valorResultado}>R$ {valorJuros} </Text>
                <Text style={estilosGlobal.tituloResultado}>Valor total à pagar:</Text>
                <Text style={estilosGlobal.valorResultado}>R$ {valorTotal} </Text>
            </View>
            <Button color='#00BFFF' title="Calcular Juros" onPress={handleCalculaJuros} />
            <View>
              <Text style={estilosGlobal.final}>Copyright Diego Oliveira</Text>
            </View>
        </ScrollView>
    );
}