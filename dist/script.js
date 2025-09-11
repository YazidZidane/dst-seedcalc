const graphSelect = document.getElementById('graph-select');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentGraph = document.getElementById('current-graph');

let historicalGraphs = [
  'https://placehold.co/600x400/007BFF/white?text=Graph_1',
  'https://placehold.co/600x400/28A745/white?text=Graph_2',
  'https://placehold.co/600x400/FFC107/black?text=Graph_3',
  'https://placehold.co/600x400/DC3545/white?text=Graph_4',
];

let currentIndex = 0;

// Function to fetch the list of available graphs from a JSON file
async function fetchGraphs() {
  try {
    const response = await fetch('graphs/graphs.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Create a temporary array to store the graph URLs
    let fetchedGraphs = [];
    if (data.length > 0) {
      // The `graphs.json` only contains the filename, so we add the directory path
      const latestGraph = `graphs/${data[0]}`;
      fetchedGraphs.push(latestGraph);
    }
    
    // Only proceed if a new graph was found
    if (fetchedGraphs.length > 0) {
      historicalGraphs = fetchedGraphs.concat(historicalGraphs);
    }
    
  } catch (error) {
    console.error("Failed to fetch graphs:", error);
    document.getElementById('fetch-status').textContent = 'Failed to load graphs from previous run!';
  }

  // Always proceed with populating the dropdown and updating the image
  // This ensures the placeholder images are used even if fetching fails
  populateDropdown();
  updateImage();
}

// Function to populate the dropdown
function populateDropdown() {
  graphSelect.innerHTML = ''; // Clear existing options
  historicalGraphs.forEach((url, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `Graph ${index === 0 && historicalGraphs[index].startsWith('graphs/') ? '(Latest)' : index + 1}`;
    graphSelect.appendChild(option);
  });
}

// Function to update the displayed image
function updateImage() {
  currentGraph.src = historicalGraphs[currentIndex];
}

// Event listener for the dropdown
graphSelect.addEventListener('change', (event) => {
  const selectedIndex = parseInt(event.target.value, 10);
  currentIndex = selectedIndex;
  updateImage();
});

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
  if (historicalGraphs.length > 0) {
    currentIndex = (currentIndex + 1) % historicalGraphs.length;
    graphSelect.value = currentIndex;
    updateImage();
  }
});

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
  if (historicalGraphs.length > 0) {
    currentIndex = (currentIndex - 1 + historicalGraphs.length) % historicalGraphs.length;
    graphSelect.value = currentIndex;
    updateImage();
  }
});

// Initialize the page by fetching the graph data
document.addEventListener('DOMContentLoaded', fetchGraphs);
