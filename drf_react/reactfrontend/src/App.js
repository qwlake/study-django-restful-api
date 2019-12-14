import React from 'react';
import './App.css';
import api from './api';
import PostView from './Components/PostView';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    // console.log(_results)
  }

  handlingChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handlingSubmit = async (event) => {
    event.preventDefault() // event 기능 -> 막는다
    let result = await api.createPost({title:this.state.title, content:this.state.content})
    // console.log("제출 완료",result)
    this.setState({title:'', content:''})
    this.getPosts()
  }

  handlingDelete = async (id) => {
    await api.deletePost(id)
    this.getPosts()
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <div className="PostingSection">
            <Paper className="PostingPaper">
              <h2>대나무 숲 글 작성하기</h2>
              <form className="PostingForm" onSubmit={this.handlingSubmit}>
                <TextField
                  className="outlined-name"
                  label="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handlingChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  className="outlined-name"
                  label="content"
                  name="content"
                  multiline
                  value={this.state.content}
                  onChange={this.handlingChange}
                  rows="4"
                  margin="normal"
                  variant="outlined"
                />
                <Button variant="outlined" type="submit">제출하기</Button>
              </form>
            </Paper>
          </div>
          <div className="ViewSection">
            {
              this.state.results.map((post) =>
                <Card key={post.id} className={'card'}>
                  <CardContent>
                    <Typography variant="body2" component="p">
                      <PostView key={post.id} title={post.title} content={post.content}/>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button color="primary" size="small">더보기</Button> */}
                    <Button color="secondary" onClick={(event) => this.handlingDelete(post.id)} size="small">삭제하기</Button>
                  </CardActions>
                </Card>
              )
            }
          </div>
        </Container>
      </div>
    );
  }
}
export default App;
