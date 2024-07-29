const form = document.querySelector('.feedback-form');
var formData = {
  email: "",
  message: ""
};

form.addEventListener('input', function(event) {
  const target = event.target;
    if (target.name === 'email') {
    formData.email = target.value;
  } else if (target.name === 'message') {
    formData.message = target.value;
  }
  saveFormData();
});
function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    Object.assign(formData, JSON.parse(savedData));
    synchroForm();
  }
}
function synchroForm() {
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}
loadFormData();

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    form.reset();
    alert("Form submitted successfully!");
  } else {
    alert("Please fill in all fields.");
  }
});

const styleElement = document.createElement('style');
styleElement.type = 'text/css';
const styles = `
.feedback-form, input[name="email"], textarea[name="message"], button[type="submit"] {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #2e2f42;  
}
.feedback-form {
  border-radius: 8px;
  padding: 24px;
  width: 408px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
input[name="email"] {
  border: 1px solid #808080;
  border-radius: 4px;
  width: 360px;
  height: 40px;
  margin-top: 8px;
  margin-bottom: 8px;
}
textarea[name="message"] {
  border: 1px solid #808080;
  border-radius: 4px;
  width: 360px;
  height: 80px;
  margin-top: 8px;
  margin-bottom: 16px;
  resize: none;
}
button[type="submit"] {
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  width: 95px;
  height: 40px;
  background: #4e75ff;
  color: #fff;
  font-weight: 500;
}
`;
styleElement.appendChild(document.createTextNode(styles));
document.head.appendChild(styleElement);