import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({ 
    container: {
        width: '100%',
        padding: 6,
    },
    areaInput: {
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        width: '15%',
        height: 40,
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        backgroundColor: '#339999',
    },
    input: {
        width: '85%',
        height: 40,
        borderWidth: 2,
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 25,
    },
    areaResultado: {
        marginBottom: 20,
    },
    tituloResultado: {
        fontSize: 16,
        padding: 2,
        color: 'white',
        backgroundColor: '#339999',
    },
    valorResultado: {
        fontSize: 16,
        padding: 8,
        color: 'white',
        backgroundColor: '#047575',
    }
})

export default estilos;