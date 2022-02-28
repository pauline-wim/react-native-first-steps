import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AlertBtn(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn}>
      <Text style={styles.btnText}>Press me, yes !</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
