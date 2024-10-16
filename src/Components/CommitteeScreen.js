import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

export default function CommitteeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.committee}>
                <TouchableOpacity>
                    <Text>Core</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text> CoComm</Text>
                </TouchableOpacity>
            </View >
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 8,
    },
    committee: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30, // Extra space from the top after the safe area
        backgroundColor: 'white',
        borderRadius: 8,
        height: 30,
        borderWidth: 3, // Sets the thickness of the border
        borderColor: 'black'
    }
});


