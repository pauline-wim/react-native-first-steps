import { useState, _useContext, _createContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  // TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import AlertBtn from "./components/AlertBtn";

// export const AppContext = createContext(AppContext);

export default function App() {
  const [showLoading, setShowLoading] = useState(false);

  const handlePress = () => {
    setShowLoading(true);
    return setTimeout(() => {
      Alert.alert("Ouh yes... I'm impressed !");
      setShowLoading(false);
    }, 2000);
  };

  // const value = {
  //   showLoading: showLoading,
  //   setShowLoading: setShowLoading,
  // };

  return (
    // <AppContext.Provider value={value}>
    <ScrollView style={styles.container}>
      {/* {console.log(showLoading)} */}
      <View style={styles.textWrapper}>
        <Text style={styles.text1}>My first try...</Text>
        <Text style={styles.text2}>On React Native</Text>
        <Text style={styles.text3}>Exciting!</Text>
        <Image
          style={styles.imgKonexio}
          source={{
            uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
          }}
        />
        <Image
          style={styles.imgIcon}
          source={require("./assets/favicon.png")}
        />
        <AlertBtn onPress={handlePress} />
        {showLoading ? (
          <ActivityIndicator style={styles.loader}></ActivityIndicator>
        ) : null}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
    // </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4F3FA",
  },
  textWrapper: {
    margin: 20,
    backgroundColor: "white",
  },
  text1: {
    margin: 80,
    fontSize: 30,
  },
  text2: {
    margin: 80,
    textAlign: "center",
  },
  text3: {
    margin: 80,
    fontWeight: "bold",
  },
  imgKonexio: {
    margin: "auto",
    width: 160,
    height: 50,
  },
  imgIcon: {
    margin: 10,
    width: 50,
    height: 50,
  },
  btn: {
    margin: "auto",
    marginBottom: 20,
    width: 200,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1.5,
    borderStyle: "solid",
    backgroundColor: "#E4F3FA",
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
  loader: {
    margin: 10,
  },
});
