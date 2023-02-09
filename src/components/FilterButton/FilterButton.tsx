import React from 'react';
import {Button, View} from "react-native";
import {FilterValuesType} from "../../reducers/todolists-reducer";

type FilterButtonPropsType = {
    title: string
    onPress: () => void
    active?: boolean
}

const FilterButton: React.FC<FilterButtonPropsType> = ({title, onPress, active}) => {
    const color = active ? "#3e2465" : '#bdae59'
    return (
        <View style={{}}>
            <Button title={title} color={color} onPress={onPress} />
        </View>
    )
};

export default FilterButton;