import React, {Component} from 'react';
import{
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
import Card from './Card.js'

class Posts extends Component{
  constructor(){
    super()
    this.state= {
      posts: [],
      red: {backgroundColor: 'red'},
      purple: {backgroundColor: 'purple'},
      currentColor: null
    }
  }

  componentWillMount(){
    fetch('https://www.reddit.com/r/footballhighlights/top/.json?sort=top&t=all&limit=100',{
      Accept: 'application/json'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({posts: data.data.children})
    })
  }

  switchColor = () => {
    if (this.state.currentColor === this.state.red) {
      this.setState({ currentColor: this.state.purple })
    }
    else {
      this.setState({ currentColor: this.state.red })
    }
  }

  getJson = (url) => {
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
    return (
        <View style={styles.container}>
          <View style={{flex: 0.1}}>
          <Text style={styles.text}>
            Top Posts
          </Text>
          </View>
          <View style={{flex: 0.9}}>
            <ScrollView>
            {this.state.posts.map((post,index) =>(
              <TouchableOpacity onPress= {() => this.getJson(post.data.url)} key={post.data.id}>
              <View style={[styles.post, this.state.currentColor]}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e3438'

  },
  text: {
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
    top: 20,
    padding: 15,
    color: 'white'
  },
  title: {
    fontSize: 12,
    fontWeight: '200',
    textAlign: 'left',
    color: 'blue'
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
    backgroundColor: '#d0dfe8',
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default Posts;
