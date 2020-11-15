import React, { useState } from 'react';
import { View, ViewComponent } from 'react-native';
import { Input, SearchBar } from 'react-native-elements';



function HomeScreen(props) {
  const [search, setSearch] = useState('');

  return (
    <View>
      <SearchBar
        placeholder="Search for a beer or brewery"
        onChangeText={(searchText) => {
          setSearch(searchText);
        }}
        value={search}
        platform="ios"
      />
    </View>
  );
}

export default HomeScreen;
