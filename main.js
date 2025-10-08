// const fileInput = document.getElementById('fileInput');
// const fileDisplay = document.getElementById('fileDisplay');
// const fileNameSpan = document.getElementById('fileName');
// const removeFileBtn = document.getElementById('removeFile');
// const fileLabel = document.getElementById('fileLabel');

// fileInput.addEventListener('change', () => {
//   const file = fileInput.files[0];
//   if (file) {
//     fileNameSpan.textContent = file.name;
//     fileDisplay.style.display = 'inline-flex';

//     // Hide "Add File" text & icon
//     fileLabel.style.display = 'none';
//   }
// });

// removeFileBtn.addEventListener('click', () => {
//   fileInput.value = '';
//   fileDisplay.style.display = 'none';

//   // Bring back the Add File button
//   fileLabel.style.display = 'inline-flex';
// });

const form = document.getElementById("form");

const requiredFields = form.querySelectorAll("input[required], select[required], textarea[required]");

requiredFields.forEach(field => {
  // When user leaves the input
  field.addEventListener("blur", () => {
    const inputDiv = field.closest(".input-div");
    const errorMsg = inputDiv.querySelector(".error-message");

    if (!field.value.trim()) {
      inputDiv.classList.add("error");
      errorMsg.style.display = "block";
    } else {
      inputDiv.classList.remove("error");
      errorMsg.style.display = "none";
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;
  let formData = {};

  requiredFields.forEach(field => {
    const inputDiv = field.closest(".input-div");
    const errorMsg = inputDiv.querySelector(".error-message");

    if (!field.value.trim()) {
      inputDiv.classList.add("error");
      errorMsg.style.display = "block";
      hasError = true;
    } else {
      inputDiv.classList.remove("error");
      errorMsg.style.display = "none";
      formData[field.name] = field.value.trim();
    }
  });

  if (!hasError) {
    console.log("Form submitted successfully!");
    console.log(formData);
    alert("Form submitted successfully! Check console for data.");
  }
});

