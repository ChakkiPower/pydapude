import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    alignSelf: 'center',
    alignItems: 'center',
    width: "90%"
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.4)",
    width: "80%",
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonContainer: {
    backgroundColor: '#3474eb',
    width: '20%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default styles;
