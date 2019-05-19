import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import AddToDo from './containers/AddToDo';

class TodoApp extends Component {

    render() {
        return (
            <View style={styles.container}>
                <AddToDo />
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});