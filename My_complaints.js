window.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('complaintsTableBody');
  const currentUser = localStorage.getItem('currentUser');

  if (!currentUser) {
    alert("Please log in to view your complaints.");
    window.location.href = 'login.html';
    return;
  }

  const allComplaints = JSON.parse(localStorage.getItem('complaints')) || [];

  const userComplaints = allComplaints.filter(c => c.userId === currentUser);

  if (userComplaints.length === 0) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 4;
    cell.textContent = 'No complaints found.';
    cell.style.textAlign = 'center';
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }

  userComplaints.forEach(complaint => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${complaint.id}</td>
      <td>${complaint.category}</td>
      <td>${complaint.description}</td>
      <td>${complaint.date}</td>
    `;
    tbody.appendChild(row);
  });
});
