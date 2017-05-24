import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Spinner, Button, Container, Content } from 'native-base';
import { logoutUser } from '../store/auth/actions';
import { fetchCurrentUser } from '../store/user/actions';

class HomeScreen extends Component {
  componentWillMount() {
    this.props.fetchCurrentUser();
  }
  render() {
    const { profile, logoutUser, navigation, loading } = this.props;
    return (
      <Container>
        <Content>
          {loading
            ? <Spinner size="large" />
            : <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row' }}>
                {profile.avatar
                    ? <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: profile.avatar.medium.split('?')[0] }}
                    />
                    : null}
                <View>
                  <Text>
                    {profile.name}
                  </Text>
                  <Text>
                    {profile.email}
                  </Text>
                  <Text>
                    {profile.about}
                  </Text>
                </View>
              </View>
            </View>}
          <Button onPress={() => logoutUser(navigation)}>
            <Text>
              Logout
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { loading, profile } = user;
  return { loading, profile };
};
export default connect(mapStateToProps, { logoutUser, fetchCurrentUser })(HomeScreen);