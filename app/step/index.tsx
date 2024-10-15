import { Text, View, Image, StyleSheet, Pressable} from "react-native";
import { colors } from '../../constants/colors';
import { Header } from "@/components/hearder";

export default function Step() {
    return (
        <View>
            <Header 
            step="Passo 1" 
            title="Monte uma refeição!"/>
        </View>
    );
}