import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      /* flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center', */
      padding: 24,
    },

    titleText: {
      fontSize: 24,
      fontWeight: "bold",
    },

    bodyText: {
      fontSize: 16,
    },

    rating: {
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#EEE",
    },

    ratingImage: {
        height: 48,
        width: 240,
        resizeMode: "contain"
    }

  });

