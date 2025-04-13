import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = ({ texto, icon, onPress, style, textStyle }) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      {icon}
      <Text style={[styles.buttonText, textStyle]}>{texto}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});

export default Button;