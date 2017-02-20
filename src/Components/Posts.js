import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Text
} from 'react-native';

import { connect } from "react-redux";
import postsActions from "../redux/actions/postsActions"

import store from '../store'
import Card from './Card.js';
import Login from './Login.js';

class Posts extends Component{

  componentWillMount() {
    this.props.getPosts()
  }

  getComments = (url) => {
    console.log(url)
    var address = url
    var jAddress = address.concat('.json')
    console.log(jAddress)
    fetch(jAddress)
    .then(response => response.json())
    .then(data => {
      this.setState({comments: data.children})
    })
  }
  render() {
    console.log(this.props)
    return (
        <View style={styles.titleContainer}>
          <View style={{flex: 0.1}}>
            <View style={{flex: 0.05}}>
              <Text style={styles.text}>
                Top Posts
              </Text>
            </View>
            <View style={{flex: 0.05, flexDirection: 'row'}}>
              <Login />
            </View>
          </View>
          <View style={{flex: 0.9}}>
            <ScrollView>
            {this.props.posts.map((post,index) =>(
              <TouchableOpacity onPress= {() => this.getComments(post.data.url)} key={post.data.id}>
              <View style={[styles.post]}>
                <Text style={styles.title}>{post.data.title}</Text>
                <Text style={styles.author}>{post.data.author}</Text>
                <Text style={styles.author}>Comments: {post.data.num_comments}</Text>
              </View>
            </TouchableOpacity>
            ))}
            </ScrollView>
          </View>
        </View>

    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => {
    dispatch(postsActions.getPosts())
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b2d68',
    padding: 1

  },
  text: {
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'left',
    top: 20,
    //padding: 15,
    color: '#778fb7'
  },
  title: {
    fontSize: 12,
    fontWeight: '200',
    textAlign: 'left',
    color: 'white'
  },
  author: {
    fontSize: 8,
    textAlign: 'center',
    color: 'darkblue'
  },
  post: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#778fb7',
    borderWidth: 2,
    borderColor: 'black'
  },
  button: {
    //flex:0.1,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'flex-end',
    borderRadius: 3
  },
  titleContainer: {
    flex: 1,
    backgroundColor: '#1b2d68'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
