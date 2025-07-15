// Default example data
const defaultData = [
  { time: "9am - 12pm", staff: 5 },
  { time: "12pm - 3pm", staff: 6 },
  { time: "3pm - 6pm", staff: 5 },
  { time: "6pm - 9pm", staff: 4 }
];

function buildScheduleTable(data) {
  const container = document.getElementById('schedule-container');
  container.innerHTML = "";  // Clear previous

  const table = document.createElement('table');
  table.className = 'schedule-table';

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Time Slot</th>
      <th>Recommended Staff</th>
    </tr>
  `;
  table.appendChild(thead);

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

  container.appendChild(table);
}

// Initial render
buildScheduleTable(defaultData);

// Handle user input
document.getElementById('load-button').addEventListener('click', () => {
  const input = document.getElementById('json-input').value;
  try {
    const parsed = JSON.parse(input);
    if (!Array.isArray(parsed)) throw new Error("Input must be a JSON array");
    buildScheduleTable(parsed);
  } catch (e) {
    alert("Error parsing JSON: " + e.message);
  }
});