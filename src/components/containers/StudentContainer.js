import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudentThunk } from '../../store/thunks';

import { StudentView } from '../views/StudentView';

class StudentContainer extends Component {
  componentDidMount() {
    this.props.fetchStudent(this.props.params.id);
  }

  render() {
    return <StudentView student={this.props.student} />;
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
