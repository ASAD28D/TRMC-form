document.querySelectorAll('.file-input-wrapper').forEach(wrapper => {
  const fileInput = wrapper.querySelector('.file-input');
  const fileDisplay = wrapper.querySelector('.file-display');
  const fileNameSpan = wrapper.querySelector('.file-name');
  const removeFileBtn = wrapper.querySelector('.remove-file-btn');
  const fileLabel = wrapper.querySelector('.file-btn');

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
      fileNameSpan.textContent = file.name;
      fileDisplay.style.display = 'flex';
      fileLabel.style.display = 'none';
    }
  });

  removeFileBtn.addEventListener('click', () => {
    fileInput.value = '';
    fileDisplay.style.display = 'none';
    fileLabel.style.display = 'inline-flex';
  });
});

const form = document.getElementById("form");

const requiredFields = form.querySelectorAll("input[required], select[required], textarea[required]");

requiredFields.forEach(field => {
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

    if (field.type === "radio") {
      const checkedRadio = form.querySelector(`input[name="${field.name}"]:checked`);
      if (checkedRadio) {
        formData[field.name] = checkedRadio.value;
        inputDiv.classList.remove("error");
        errorMsg.style.display = "none";
      } else {
        formData[field.name] = "";
        inputDiv.classList.add("error");
        errorMsg.style.display = "block";
        hasError = true;
      }
    }

    else {
      if (!field.value.trim()) {
        inputDiv.classList.add("error");
        errorMsg.style.display = "block";
        hasError = true;
      } else {
        inputDiv.classList.remove("error");
        errorMsg.style.display = "none";
        formData[field.name] = field.value.trim();
      }
    }
  });

  if (!hasError) {
    console.log("Form submitted successfully!");
    console.log(formData);
    alert("Form submitted successfully! Check console for data.");
  }
});

const clearBtn = document.querySelector(".clear-form-btn");
clearBtn.addEventListener("click", () => {
  requiredFields.forEach(field => {
    if (field.type === "radio" || field.type === "checkbox") {
      field.checked = false;
    } else {
      field.value = "";
    }
  })


  document.querySelectorAll('.file-input-wrapper').forEach(wrapper => {
    const fileInput = wrapper.querySelector('.file-input');
    const fileDisplay = wrapper.querySelector('.file-display');
    const fileLabel = wrapper.querySelector('.file-btn');

    if (fileInput && fileDisplay && fileLabel) {
      fileInput.value = "";
      fileDisplay.style.display = "none";
      fileLabel.style.display = "inline-flex";
    }
  })
})

