import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  elementContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignSelf: 'center',
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
    maxWidth: '60%',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: "#7ef759",
    marginRight: 10
  },
  deleteButton: {
    backgroundColor: '#f03030',
  },
});

export default styles;
