document.getElementById('statusForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const complaintId = document.getElementById('complaint-id').value.trim();
  const statusDiv = document.getElementById('statusResult');
  const complaints = JSON.parse(localStorage.getItem('complaints')) || [];

  const foundComplaint = complaints.find(c => c.id.toString() === complaintId);

  if (foundComplaint) {
    statusDiv.innerHTML = `
      <p><strong>Complaint ID:</strong> ${foundComplaint.id}</p>
      <p><strong>Category:</strong> ${foundComplaint.category}</p>
      <p><strong>Status:</strong> ${foundComplaint.status}</p>
      <p><strong>Description:</strong> ${foundComplaint.description}</p>
      <p><strong>Date:</strong> ${foundComplaint.date}</p>
      <p><strong>Remarks:</strong> ${foundComplaint.status === 'Pending' ? 'Your complaint is being reviewed by the Student Affairs Office.' : 'Resolved.'}</p>
    `;
  } else {
    statusDiv.innerHTML = `<p style="color: red;">No complaint found with ID: ${complaintId}</p>`;
  }
});
