import React from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';

const SearchbarScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <View>
      <Padding>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Padding>
    </View>
  );
};

export default SearchbarScreen;
