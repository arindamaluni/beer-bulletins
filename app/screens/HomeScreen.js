import React from 'react';
import { View, ViewComponent } from 'react-native';
import { Input, SearchBar } from 'react-native-elements';

function HomeScreen(props) {
  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
      // onChangeText={this.updateSearch}
      // value={search}
      />
    </View>
  );
}

export default HomeScreen;
