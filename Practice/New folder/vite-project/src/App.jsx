import React, { useState } from "react";

function App() {
  const [service, setService] = useState(""); // Selected service
  const [feedbackList, setFeedbackList] = useState([]); // List of feedbacks
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });

  // Handle dropdown change
  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.rating ||
      !formData.comments
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    const newFeedback = { service, ...formData };
    setFeedbackList([...feedbackList, newFeedback]);
    setFormData({ name: "", email: "", rating: "", comments: "" });
  };

  const serviceFeedbacks = feedbackList.filter((fb) => fb.service === service);
  const totalFeedback = serviceFeedbacks.length;
  const averageRating =
    totalFeedback > 0
      ? (
          serviceFeedbacks.reduce((sum, fb) => sum + Number(fb.rating), 0) /
          totalFeedback
        ).toFixed(2)
      : 0;

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-5">
        Feedback Collection System
      </h1>

      {/* Service Selection */}
      <div className="mb-5 text-center">
        <label className="font-semibold text-lg mr-3">Select Service: </label>
        <select
          value={service}
          onChange={handleServiceChange}
          className="border p-2 rounded shadow-sm"
        >
          <option value="">-- Select Service --</option>
          <option value="Customer Support">Customer Support</option>
          <option value="Delivery">Delivery</option>
          <option value="Product Quality">Product Quality</option>
        </select>
      </div>

      {/* Feedback Form */}
      {service && (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Submit Feedback for {service}</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <textarea
            name="comments"
            placeholder="Your Comments"
            value={formData.comments}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit Feedback
          </button>
        </form>
      )}

      {/* Feedback Display */}
      {service && (
        <div className="mt-5 max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-3">
            Feedback for {service}
          </h2>
          {serviceFeedbacks.length > 0 ? (
            <ul className="space-y-2">
              {serviceFeedbacks.map((fb, index) => (
                <li
                  key={index}
                  className="p-3 bg-gray-200 rounded shadow-sm"
                >
                  <strong>{fb.name}</strong> ({fb.rating}/5): {fb.comments}
                </li>
              ))}
            </ul>
          ) : (
            <p>No feedback submitted yet.</p>
          )}
        </div>
      )}

      {/* Feedback Summary */}
      {service && (
        <div className="mt-5 max-w-md mx-auto text-center">
          <h3 className="text-lg font-semibold">Feedback Summary</h3>
          <p>Total Feedback: {totalFeedback}</p>
          <p>Average Rating: {averageRating}</p>
        </div>
      )}
    </div>
  );
}

export default App;
