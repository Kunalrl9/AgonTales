import React from "react";
import { view, Text, Button, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';


const my_list =({navigator}) => {
    return (
        <view style={StyleSheet.container}>
            <Text>My list of manga </Text>
            <Button title="click Here"
            onPress={()=> alert('Button Clicked!')}
            />
        </view>
    );
};

export default my_list;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
});