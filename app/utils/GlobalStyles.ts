import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "./StyleConstants";

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: AppColor.white,

    },
    imageBackground: {
        flex: 1,
        padding: 10
    },
    heading: {
        marginVertical: 20,
        textAlign: 'center',
        color: AppColor.white,
        fontSize: FontSize.heading
    },
    
    
});