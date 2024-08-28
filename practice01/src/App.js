import React from 'react';
import './App.css';
import Employee from './components/Employee';

function App() {

  const employees = [
    {
      userId: 1,
      avatar: 'https://avatar.iran.liara.run/public/boy',
      userName: '홍길동',
      team: '인사팀',
      position: '팀장',
      birth: '1985.05.20',
      gender: '남성',
      phone: '010-1234-5678',
      email: 'hong@test.com'
    },
    {
      userId: 2,
      avatar: 'https://avatar.iran.liara.run/public/girl',
      userName: '김땡땡',
      team: '디자인팀',
      position: '사원',
      birth: '1998.04.12',
      gender: '여성',
      phone: '010-1111-2222',
      email: 'kim@test.com'
    },
    {
      userId: 3,
      avatar: 'https://avatar.iran.liara.run/public/boy',
      userName: '이땡구',
      team: '개발팀',
      position: '주임',
      birth: '1991.12.20',
      gender: '남성',
      phone: '010-3333-4444',
      email: 'lee@test.com'
    },
    {
      userId: 4,
      avatar: 'https://avatar.iran.liara.run/public/boy',
      userName: '임철수',
      team: '개발팀',
      position: '사원',
      birth: '2001.03.14',
      gender: '남성',
      phone: '010-5555-6666',
      email: 'lim@test.com'
    },
    {
      userId: 5,
      avatar: 'https://avatar.iran.liara.run/public/girl',
      userName: '김코코',
      team: '디자인팀',
      position: '과장',
      birth: '1988.07.18',
      gender: '여성',
      phone: '010-7777-8888',
      email: 'kimkiki@test.com'
    }
  ]

  const emList = employees.map((em) => (
    <Employee key={em.userId}
              avatar={em.avatar}
              userId={em.userId}
              userName={em.userName}
              team={em.team}
              position={em.position}
              birth={em.birth}
              gender={em.gender}
              phone={em.phone}
              email={em.email} />
            ))

  



  return (
    <div className="App gray-bg">
      {emList}
        {/* <Employee employee={employee} /> */}
        {/* {employee.map((e) =>
          <Employee key={e.id}
                    userId={e.userId}
                    userName={e.userName}
                    team={e.team}
                    position={e.position}
                    birth={e.birth}
                    gender={e.gender}
                    phone={e.phone}
                    email={e.email} />
        )} */}
        
    </div>
  );
}

export default App;
