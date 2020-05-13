import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
//style 예제는 www.material-ui.com/demos/에서 확인

const styles = theme => ({
  root: { //root class
    width: '100%', //너비
    marginTop: theme.spacing.unit * 3, //3의 가중치만큼 여백
    overflowX: "auto" //전체,x축으로overflow 발생할 수 있도록.
  },
  table: {
    minWidth: 1080 //전체의 1080픽셀만큼 테이블의 크기가 자리잡아서 테이블 형태가 망가지지 않도록 가로스크롤바가 생길 것임.
  },
  progress: {
    margin: theme.spacing.unit *2
  }

});


//위에서 정의한 스타일이 적용될 수 있도록 classes생성.
//**React.Component 
//paper 가로 스크롤 바 생성 1080보다 작아질 때도 테이블 형태유지
class App extends React.Component {
//고객의 데이터는 처음에 비어있다가, 서버에 접속해서 가져올 수 있도록 해야함. 
//사용자의 요청에 따라 데이터를 받으면 재구성 되는 경우라 state로 customers를 명시.
//probs:변경될 수 없는 변수를 처리할 때 사용.
  state = {
      customers: "",
      completed: 0 //progress애니메이션이 0부터100까지차오름.
    }

  //api서버에 접근해서 데이터를 받아오는 작업
  //모든 컴포넌트가 mount 완료되었을 때 실행.
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);//0.02초마다progress함수가 실행
    this.callApi() //body를 가져와서 then함수로 res로 이름을 바꿔서 customers변수에 넣겠다.
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err)); //오류발생하면 출력.
  }
  
  //비동기적으로 수행. 접속하고자 하는 api를 불러올 수 있음.
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json(); //가져온 데이터를 json형태로 body에 저장.
    return body;
  }

  progress = () => {
    const {completed} = this.state; //state에서 completed를 사용하겠다.
    this.setState({ completed: completed >= 100 ? 0 : completed+1 });
  }

  render(){
    const { classes } = this.props;
    return (
      //paper: component를 감쌀 수 있는 태그
      <Paper className={classes.root}> 
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>      
          {this.state.customers ? this.state.customers.map(c => { return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                gender={c.gender}
                job={c.job}
                birthday={c.birthday}
              />
            );
          }):
          <TableRow>
              <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
          </TableRow> 
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
