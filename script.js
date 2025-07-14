// Example data
const scheduleData = [
  { time: "9am - 12pm", staff: 5 },
  { time: "12pm - 3pm", staff: 6 },
  { time: "3pm - 6pm", staff: 5 },
  { time: "6pm - 9pm", staff: 4 }
];

// Function to build the table
function buildScheduleTable(data) {
  const table = document.createElement('table');
  table.className = 'schedule-table';

  // Header row
  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Time Slot</th>
      <th>Recommended Staff</th>
    </tr>
  `;
  table.appendChild(thead);

  // Data rows
  const tbody = document.createElement('tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.time}</td>
      <td>${item.staff}</td>
    `;
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Insert into the page
  const container = document.getElementById('schedule-container');
  container.appendChild(table);
}

buildScheduleTable(scheduleData);