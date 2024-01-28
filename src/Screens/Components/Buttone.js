import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function Buttone({ mt, bg, color, children, onPress }) {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 55,
        marginTop: mt,
        borderRadius: 999, // Use a large number for full roundness
        backgroundColor: bg,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Text style={{ color, fontWeight: 'bold' }}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Buttone;
