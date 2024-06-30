function calculateFlowRate() {
    const deltaP = parseFloat(document.getElementById('deltaP').value);
    const radius = parseFloat(document.getElementById('radius').value);
    const viscosity = parseFloat(document.getElementById('viscosity').value);
    const length = parseFloat(document.getElementById('length').value);

    if (isNaN(deltaP) || isNaN(radius) || isNaN(viscosity) || isNaN(length)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const flowRate = (deltaP * Math.PI * Math.pow(radius, 4)) / (8 * viscosity * length);
    document.getElementById('result').textContent = flowRate.toFixed(6);
}