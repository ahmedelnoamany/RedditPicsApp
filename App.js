import React, { Component } from 'react';
import{
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';

import { Provider } from "react-redux";

import store from "./src/store";

import Posts from './src/Components/Posts';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Content />
          <Footer>
            <FooterTab>
              <Button
                onClick={() =>
                <View>
                  <Posts />
                </View>} >
                <Text>Comments</Text>
              </Button>
              <Button>
                <Text>Users</Text>
              </Button>
              <Button>
                <Text>Settings</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Provider>
    );
  }
}
