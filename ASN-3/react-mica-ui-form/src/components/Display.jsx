import PropTypes from 'prop-types';

export default function Display({ data }) {
  return (
    <div className="bg-blue-700 p-6 rounded-lg shadow-lg border border-yellow-400 mt-6">
      <h2 className="text-xl font-bold text-yellow-400 mb-2">Submitted Data</h2>
      <p className="text-yellow-300">Name: {data.name}</p>
      <p className="text-yellow-300">Age: {data.age}</p>
    </div>
  );
}

Display.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
  }).isRequired
};
