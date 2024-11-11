// JavaScript Code

// Event Listener on the Button
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let grade1 = +document.getElementById("clientSideScripting1").value;
  let grade2 = +document.getElementById("structedProgramming1").value;
  let grade3 = +document.getElementById("structuredProgramming2").value;
  let grade4 = +document.getElementById("clientSideScripting2").value;
  let grade5 = +document.getElementById("projectA").value;

  // Process
  let finalGrade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

  // Output

  document.getElementById("output").innerHTML = finalGrade.toFixed(1);
}
