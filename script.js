function evaluateStream() {
  const maths = parseFloat(document.getElementById("maths").value);
  const physics = parseFloat(document.getElementById("physics").value);
  const chemistry = parseFloat(document.getElementById("chemistry").value);
  const biology = parseFloat(document.getElementById("biology").value);

  const streamSelect = document.getElementById("stream");
  streamSelect.innerHTML = "";

  let suggestions = [];

  if (maths >= 75 && physics >= 70) suggestions.push("Engineering");
  if (biology >= 75 && chemistry >= 70) suggestions.push("Medical");
  if (suggestions.length === 0) suggestions.push("Other Fields");

  suggestions.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt.toLowerCase();
    option.text = opt;
    streamSelect.appendChild(option);
  });

  document.getElementById("step2").style.display = "block";
}

function showRecommendation() {
  const stream = document.getElementById("stream").value;
  const interest = document.getElementById("interest").value;
  const skills = document.getElementById("skills").value;

  let result = "";

  if (stream === "engineering") {
    result += "Your science and math skills make you a good fit for Engineering.\n";
  } else if (stream === "medical") {
    result += "With strong biology and chemistry, medical or allied health is ideal.\n";
  } else {
    result += "Explore skill-based or creative fields that match your passion.\n";
  }

  result += "Recommended Career Paths:\n";

  switch (interest) {
    case "ai":
      result += "- AI/ML Engineer\n- Robotics Developer\n- NLP Specialist\n";
      break;
    case "web":
      result += "- Frontend Developer\n- Web App Designer\n- Full Stack Developer\n";
      break;
    case "data":
      result += "- Data Analyst\n- BI Developer\n- Data Engineer\n";
      break;
    case "cloud":
      result += "- Cloud Architect\n- AWS/GCP Engineer\n- DevOps\n";
      break;
    case "cyber":
      result += "- Ethical Hacker\n- Cybersecurity Analyst\n- Pen Tester\n";
      break;
    case "design":
      result += "- UI Designer\n- UX Researcher\n- Graphic Designer\n";
      break;
    case "healthcare":
      result += "- Pharmacist\n- Lab Technician\n- Public Health Specialist\n";
      break;
    case "business":
      result += "- Business Analyst\n- Digital Marketer\n- HR Manager\n";
      break;
  }

  result += `\nYour Skills: ${skills}`;

  document.getElementById("output").innerText = result;
  document.getElementById("resultBox").style.display = "block";
}