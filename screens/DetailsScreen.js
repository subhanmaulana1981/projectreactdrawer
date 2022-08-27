import { View, Text, Button, Image } from "react-native";
import Card from "../shared/Card";
import { globalStyles } from "../shared/globalStyles";
import { imageList } from "../shared/imageList";

function DetailsScreen({ route, navigation }) {

    const { itemTitle, itemRating, itemBody, itemID } = route.params;

    const pressHandler = () => {
        navigation.goBack();
    }

    const id = itemID;
    const rating = itemRating;

    return (
        
        <View style={ globalStyles.container }>
            {/* <Text style={ globalStyles.titleText }>
                Detail Screen
            </Text> */}

            <Card>
                <Text style={ globalStyles.titleText}>
                    { itemTitle }
                </Text>
                <Text style={ globalStyles.bodyText}>
                    { itemBody }
                </Text>
                <View style={ globalStyles.rating }>
                    <Text>Review's rating: </Text>
                    <Image style={ globalStyles.ratingImage } source={ imageList.ratings[rating] } />
                </View>
            </Card>


            {/* <Button 
                onPress={ pressHandler }
                title="Go back Home"
            /> */}
        </View>
    );
}

export default DetailsScreen;