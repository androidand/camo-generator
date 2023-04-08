function initPatternOptions() {
  const patterns = [
      { value: 'm90', label: 'Swedish Army M90' },
      // Add more pattern options here
  ];

  patterns.forEach(pattern => {
      const option = document.createElement('option');
      option.value = pattern.value;
      option.textContent = pattern.label;
      patternSelect.appendChild(option);
  });
}

function initColorSchemeOptions() {
  const colorSchemes = [
      { value: 'standard', label: 'Standard' },
      { value: 'desert', label: 'Desert' },
      { value: 'forest', label: 'Forest' },
      { value: 'urban', label: 'Urban' },
      { value: 'snow', label: 'Snow' },
      { value: 'jungle', label: 'Jungle' },
      // Add more color scheme options here
  ];

  colorSchemes.forEach(colorScheme => {
      const option = document.createElement('option');
      option.value = colorScheme.value;
      option.textContent = colorScheme.label;
      colorSchemeSelect.appendChild(option);
  });
}

function generatePattern() {
  // ...

  // Set the canvas size
  patternCanvas.width = patternCanvas.clientWidth;
  patternCanvas.height = patternCanvas.clientHeight;

  // ...
}

function generateM90(ctx, colorScheme) {
  // Define the color scheme for the M90 pattern
  const colors = {
      standard: ['#4D6A50', '#2C4538', '#94A4A4', '#7A8989'],
      // Add more color schemes if needed
  };

  const selectedColors = colors[colorScheme] || colors.standard;

  // Set the number of shapes, shape size, and corner count
  const shapeCount = 100;
  const shapeSize = 100;
  const minCorners = 4;
  const maxCorners = 12;

  for (let i = 0; i < shapeCount; i++) {
      const x = Math.random() * patternCanvas.width;
      const y = Math.random() * patternCanvas.height;
      const corners = Math.floor(Math.random() * (maxCorners - minCorners + 1)) + minCorners;
      const color = selectedColors[Math.floor(Math.random() * selectedColors.length)];

      drawPolygon(ctx, x, y, corners, shapeSize, color);
  }
}

function drawPolygon(ctx, x, y, corners, size, color) {
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

  for (let i = 1; i <= corners; i++) {
      const angle = (i * 2 * Math.PI) / corners;
      const radius = size * (0.5 + 0.5 * Math.random());
      const newX = x + radius * Math.cos(angle);
      const newY = y + radius * Math.sin(angle);
      ctx.lineTo(newX, newY);
  }

  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}
