import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../shared/globalStyles";
import Card from "../shared/Card";

function HomeScreen({ navigation }) {

    const [reviews, setReviews] = useState([

        { 
            title: "Pemrograman di masa depan", 
            rating: 5, 
            body: "Bahasa yang mendominasi dunia pemrograman adalah yang berbasis Java", 
            key: "1" 
        },

        { 
            title: "Robot menggantikan manusia", 
            rating: 4, 
            body: "Seiring dengan pelajaran robotik sudah dimulai sejak usia dini", 
            key: "2" 
        },

        { 
            title: "Paranoid penyakit menular", 
            rating: 3, 
            body: "Apakah seseorang dapat menularkan penyakit paranoid-nya ke orang lain?", 
            key: "3" 
        },

    ]);

    // const pressHandler = () => {
    //     navigation.navigate("Detail");
    // }
    
    return (
        <View style={ globalStyles.container }>
            <Text style={ globalStyles.titleText }>
                Home Screen
            </Text>

            <FlatList 
                data={ reviews }
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Detail", {
                            itemTitle: item.title,
                            itemRating: item.rating,
                            itemBody: item.body,
                            itemID: item.key,
                        })}
                    >
                        <Card>
                            <Text style={ globalStyles.bodyText }>
                                { item.title }
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

            {/* <Button 
                onPress={ pressHandler }
                title="Go to Detail"
            /> */}

        </View>

    );
}

export default HomeScreen;