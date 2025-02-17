import { useState } from "react";
import PropTypes from 'prop-types';

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [error, setError] = useState("");

  const validateInput = () => {
    if (!formData.name.trim()) return "Name cannot be empty.";
    if (!formData.age || isNaN(formData.age) || formData.age <= 0) return "Age must be a positive number.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    onSubmit(formData);
    setFormData({ name: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-yellow-300 mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 rounded-lg bg-blue-900 text-white border border-yellow-400 shadow-lg focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block text-yellow-300 mb-2">Age</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="w-full p-3 rounded-lg bg-blue-900 text-white border border-yellow-400 shadow-lg focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {error && <p className="text-red-400">{error}</p>}

      <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 rounded-lg p-3 font-bold text-black shadow-lg">
        Submit
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
