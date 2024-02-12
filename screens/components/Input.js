// components/Input.js
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useController } from 'react-hook-form';

const Input = ({ logo,label,placeholder, control, name, rules, error, ...props }) => {
  // Use useController to connect the input component to the form state and validation rules
  const {
    field: { ref, value, onChange, onBlur },
  } = useController({
    name,
    control,
    rules,
    defaultValue: '',
  });

  return (
    // Use View to wrap the input field and the error message
   <View>
      <TextInput
      style={styles.input}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
      
      {error && <Text style={styles.error}>{error.message}</Text>}
      </View>
  );
};

// Use StyleSheet to create styles
const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ddd',
    //marginBottom: 5,
  },
  input: {
    
      width:'74',
      height:'15',
      paddingTop:5,
      paddingRight:'10',
      paddingBottom:'10',
      paddingLeft:'26',
    
  },
  error: {
    fontSize: 14,
    color: '#f00',
    marginTop: 5,
  },
});

export default Input;
