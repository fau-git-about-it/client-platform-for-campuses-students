import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllStudentsView = (props) => {
  if (!props.allStudents.length) {
    return <div>There are no students.</div>;
  }

  return (
    <div>
      <h1>All Students</h1>
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>
              {student.firstname} {student.lastname}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
