const gridContainer = document.querySelector('#gridContainer');
const gridSizeSlider = document.querySelector('#gridSizeSlider');
const colorBtn = document.querySelector('#colorBtn');
const clearBtn = document.querySelector('#clearBtn')

// Creating starting 16x16 grid
let size = 16;
createGrid(size);

// Changing grid size using slider
gridSizeSlider.addEventListener('input', function () {
  let size = gridSizeSlider.value
  createGrid(size)
});

function createGrid(size) {
  gridContainer.innerHTML = '';
  const gridContainerSize = (600 / size)
  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('gridSquare');
    gridSquare.style.width = gridContainerSize + 'px';
    gridSquare.style.height = gridContainerSize + 'px';
    gridContainer.append(gridSquare);
    gridSquare.addEventListener('mouseover', function() {
      gridSquare.style.backgroundColor = colorBtn.value;
    })
    clearBtn.addEventListener('click', function() {
      gridSquare.style.backgroundColor = '#f2f0f0'
    })
  }
}