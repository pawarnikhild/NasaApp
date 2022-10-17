import { StyleSheet } from "react-native";

import { AppColor, FontSize } from "../utils/StyleConstants";

export default StyleSheet.create({
    normalText: {
        textAlign: 'center',
        color: AppColor.white,
        fontSize: FontSize.large,
    },
    customTextInput: {
        marginTop: 100,
        marginBottom: 20        
    },
    customButton: {
        marginBottom: 10        

    }    
});