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
//Table예제는 www.material-ui.com/demos/tables/에서 확인

const styles = theme => ({
  root: { //root class
    width: '100%', //너비
    marginTop: theme.spacing.unit * 3, //3의 가중치만큼 여백
    overflowX: "auto" //전체,x축으로overflow 발생할 수 있도록.
  },
  table: {
    minWidth: 1080 //전체의 1080픽셀만큼 테이블의 크기가 자리잡아서 테이블 형태가 망가지지 않도록 가로스크롤바가 생길 것임.
  }

})

const customers = [
  {
    'id':'1',
    'image':'https://placeimg.com/64/64/1',
    'name': 'Park Seolyeong',
    'birthday':'941005',
    'gender':'female',
    'job':'developer'
  },
  {
    'id':'2',
    'image':'https://placeimg.com/64/64/2',
    'name': 'Lee Sangheon',
    'birthday':'940131',
    'gender':'male',
    'job':'developer'
  },
  {
  'id':'3',
  'image':'https://placeimg.com/64/64/3',
  'name': 'Siru',
  'birthday':'190406',
  'gender':'male',
  'job':'CUTE'
  }
]

//위에서 정의한 스타일이 적용될 수 있도록 classes생성.
//**React.Component 
//paper 가로 스크롤 바 생성 1080보다 작아질 때도 테이블 형태유지
class App extends React.Component {
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
          {customers.map(c => { return (
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
          })}</TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
