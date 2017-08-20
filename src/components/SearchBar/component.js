import * as React from 'react';
import { PropTypes } from 'prop-types';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { commonStyles } from 'kitsu/common/styles';
import { styles } from './styles';

export class SearchBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hasFocus: false,
      value: props.defaultValue,
    };
  }

  onChangeText = (value) => {
    this.setState({ value });
    this.props.onChangeText(value);
  }

  render() {
    return (
      <View style={[styles.searchContainer, this.props.containerStyle]}>
        <Icon
          name="search"
          style={[
            styles.searchIcon,
            commonStyles.colorLightGrey,
            { paddingRight: this.props.searchIconOffset },
            ((this.props.value || this.state.value) && styles.searchIconFocus),
          ]}
        />
        <TextInput
          {...this.props}
          onChangeText={this.onChangeText}
          placeholder={this.props.placeholder}
          style={[
            commonStyles.text,
            commonStyles.colorLightGrey,
            styles.input,
          ]}
          value={this.props.value || this.state.value}
        />
      </View>
    );
  }
}

SearchBar.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  defaultValue: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  searchIconOffset: PropTypes.number,
  value: PropTypes.string,
};

SearchBar.defaultProps = {
  containerStyle: {},
  defaultValue: '',
  onChangeText: () => {},
  placeholder: 'Search',
  searchIconOffset: 80,
  value: '',
};
