import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = ({ texto, onPress, style, textStyle, disable }) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress} disable={disable}>
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
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;