let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let result = document.getElementById("result");
  let birthDate = new Date(userInput.value);

  if (!userInput.value) {
    result.innerHTML = "⛔ Please select your birth date.";
    return;
  }

  let today = new Date();
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(m1, y1) + d2 - d1;
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
  }

  result.innerHTML = `🎉 You are <strong>${y3}</strong> years, <strong>${m3}</strong> months, and <strong>${d3}</strong> days old.`;
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}