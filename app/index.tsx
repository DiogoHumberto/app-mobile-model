import { Text, View, Image, StyleSheet, Pressable} from "react-native";
import { colors } from '../constants/colors';
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />

      <Text style={styles.title}>Estrutura base para novo APP:
        <Text style={{color: colors.white}}> Feito com criatividade para desenvolvimentos futuros</Text></Text>

      <Text style={styles.text}>Somente feito o direcionamento</Text>

      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ir para outra view</Text>
        </Pressable>
      </Link>
      
      <Link href="/step" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ir para outra view!</Text>
        </Pressable>
      </Link>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.green
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    width: 240,
    marginBottom: 8, 
    marginTop: 8,
    color: colors.white
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: colors.blue,
    width: '100%',
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34
  }
})