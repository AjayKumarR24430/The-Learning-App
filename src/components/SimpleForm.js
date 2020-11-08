import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from './Review';

class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}! What is the course you want to know about?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'physics', label: 'Physics', trigger: '5' },
                { value: 'biology', label: 'Biology', trigger: '5' },
                { value: 'python', label: 'Python', trigger: '5' },
                { value: 'java', label: 'Java', trigger: '5' },

              ],
            },
            {
              id: '5',
              message: 'What is your query?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              // validator: (value) => {
              //   if (isNaN(value)) {
              //     return 'value must be a number';
              //   } else if (value < 0) {
              //     return 'value must be positive';
              //   } else if (value > 120) {
              //     return `${value}? Come on!`;
              //   }
  
              //   return true;
              // },
            },
            {
              id: '7',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Course', trigger: 'update-gender' },
                { value: 'age', label: 'Query', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },
            {
              id: 'end-message',
              message: 'Thanks! Your data was submitted successfully!',
              end: true,
            },
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;