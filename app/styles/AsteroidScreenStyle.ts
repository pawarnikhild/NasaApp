import { StyleSheet } from "react-native";
import { FontSize } from "../utils/StyleConstants";

export default StyleSheet.create({
    horizontalCenterContainer: {
        alignItems: 'center',
        marginTop: 80
    },
    row : {
        flexDirection: 'row',
        margin: 10
    },
    field: {
        fontSize: FontSize.large,
        fontWeight: 'bold',
    },
    data: {
        fontSize: FontSize.large,
    }    
});