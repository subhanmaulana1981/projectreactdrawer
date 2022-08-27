import { View, Text, Button } from "react-native";
import { globalStyles } from "../shared/globalStyles";
import { NavigationContainer } from "@react-navigation/native";

function AboutScreen ({ navigation }) {
    return (
        <View style={ globalStyles.container }>
            <Text style={ globalStyles.titleText }>
                About Screen
            </Text>
        </View>
    );
}

export default AboutScreen;