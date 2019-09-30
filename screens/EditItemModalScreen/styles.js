import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  opacityBackground: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalContainer: {
    height: '80%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    paddingTop: 30
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#ff3636'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18
  }
});

export default styles;
