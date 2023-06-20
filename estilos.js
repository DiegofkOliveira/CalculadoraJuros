import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({ 
    container: {
        width: '100%',
        padding: 6,
        top: 70
    },
    areaInput: {
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        width: '15%',
        height: 40,
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        backgroundColor: '#00BFFF',
    },
    input: {
        width: '85%',
        height: 40,
        borderWidth: 2,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderColor: '#00BFFF'
    },
    titulo: {
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 25,
        color: '#00BFFF'
    },
    areaResultado: {
        marginBottom: 20,
    },
    tituloResultado: {
        fontSize: 16,
        padding: 2,
        color: 'white',
        backgroundColor: '#00BFFF',
    },
    valorResultado: {
        fontSize: 16,
        padding: 8,
        color: 'white',
        backgroundColor: '#00BFFF',
    },
    final: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 150,
        color: '#00BFFF',
    }
})

export default estilos;