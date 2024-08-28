import React from 'react';


const Employee = (employee) => {
    return (
        <div>
            <div><img src={employee.avatar} /></div>
            <p>사번: {employee.userId}</p>
            <p>이름: {employee.userName}</p>
            <p>부서: {employee.team}</p>
            <p>직급: {employee.position}</p>
            <p>생년월일: {employee.birth}</p>
            <p>성별: {employee.gender}</p>
            <p>연락처: {employee.phone}</p>
            <p>이메일: {employee.email}</p>
        </div>
    );
};

export default Employee;