import React from "react";
import { StyleSheet, View } from "react-native";

function Card( props ) {
    return (
        <View style={ styles.card }>
            <View style={ styles.cardContent }>
                { props.children }
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#FFF",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },

    cardContent: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
});
