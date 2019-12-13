import React from 'react';
import './App.css';
import api from './api';
import PostView from './Components/PostView';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      results: [],
    }
  }

  componentWillMount() {
    this.getPosts()
  }

  async getPosts() {
    const _results = await api.getAllPosts()
    this.setState({results:_results.data})
    console.log(_results)
  }

  handlingChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handlingSubmit = async (event) => {
    event.preventDefault() // event 기능 -> 막는다
    let result = await api.createPost({title:this.state.title, content:this.state.content})
    console.log("제출 완료",result)
    this.setState({title:'', content:''})
    this.getPosts()
  }

  handlingDelete = async (event) => {
    await api.deletePost(event.target.value)
    this.getPosts()
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <div className="PostingSection">
            <Paper className="PostingForm">
              <h2>대나무 숲 글 작성하기</h2>
              <form onSubmit={this.handlingSubmit}>
                <TextField
                  id="outlined-name"
                  label="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handlingChange}
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="content"
                  name="content"
                  multiline
                  value={this.state.content}
                  onChange={this.handlingChange}
                  rows="4"
                  variant="outlined"
                />
                <Button variant="outlined" type="submit">제출하기</Button>
              </form>
            </Paper>
          </div>
          <div className="ViewSection">
            {
              this.state.results.map((post) =>
                <div>
                  <PostView key={post.id} id={post.id} title={post.title} content={post.content}/>
                  <button value={post.id} onClick={this.handlingDelete}>삭제하기</button>
                </div>
              )
            }
          </div>
        </Container>
      </div>
    );
  }
}
export default App;
