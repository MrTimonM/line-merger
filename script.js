document.getElementById("combineBtn").addEventListener("click", function () {
    const box1 = document.getElementById("box1").value.split("\n");
    const box2 = document.getElementById("box2").value.split("\n");
    const delimiter = document.getElementById("delimiter").value || ""; // Default to no delimiter if empty
    const combined = [];

    // Combine lines only where both boxes have data
    for (let i = 0; i < Math.min(box1.length, box2.length); i++) {
        combined.push(box1[i] + delimiter + box2[i]);
    }

    // Output combined lines
    document.getElementById("output").value = combined.join("\n");
    document.getElementById("result").style.display = "block";
});
