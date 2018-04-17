import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

const submit = ({firstName='', lastName='', email=''}, submitAction) => {
  let error ={};
  let isError = false;

  if (firstName.trim() === '') {
    error.firstName = 'Required';
    isError = true;
  }

  if (firstName.length > 20) {
    error.firstName = 'Too long';
    isError = true;
  }

  if (lastName.trim() === '') {
    error.lastName = 'Required';
    isError = true;
  }

  if (email.trim() === '') {
    error.email = 'Required';
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(error);
  } else {
    submitAction({firstName, lastName, email});
  }
};

const renderField = ({type, label, input, meta:{touched, error}}) => (

)