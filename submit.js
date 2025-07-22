document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('complaintForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      alert('You must be logged in to submit a complaint.');
      window.location.href = 'login.html';
      return;
    }

    const id = Date.now(); // Unique complaint ID
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const date = new Date().toLocaleDateString();

    const newComplaint = {
      id,
      userId: currentUser, // Attach complaint to logged-in user
      category,
      description,
      date
    };

    const complaints = JSON.parse(localStorage.getItem('complaints')) || [];
    complaints.push(newComplaint);
    localStorage.setItem('complaints', JSON.stringify(complaints));

    alert('Complaint submitted successfully!');
    window.location.href = 'my_complaints.html'; // Redirect after submitting
  });
});
