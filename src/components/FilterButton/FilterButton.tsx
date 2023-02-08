import React from 'react';
import {Button, View} from "react-native";

type FilterButtonPropsType = {
    title: string
    onPress: () => void
}

const FilterButton: React.FC<FilterButtonPropsType> = ({title, onPress}) => {

    return (
        <View style={{}}>
            <Button title={title} color={'#bdae59'} onPress={onPress}/>
        </View>
    )
};

export default FilterButton;