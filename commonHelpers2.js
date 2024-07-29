import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".feedback-form");var e={email:"",message:""};o.addEventListener("input",function(t){const a=t.target;a.name==="email"?e.email=a.value:a.name==="message"&&(e.message=a.value),n()});function n(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function s(){const t=localStorage.getItem("feedback-form-state");t&&(Object.assign(e,JSON.parse(t)),i())}function i(){document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message}s();o.addEventListener("submit",function(t){t.preventDefault(),e.email&&e.message?(console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},o.reset(),alert("Form submitted successfully!")):alert("Please fill in all fields.")});const r=document.createElement("style");r.type="text/css";const m=`
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
`;r.appendChild(document.createTextNode(m));document.head.appendChild(r);
//# sourceMappingURL=commonHelpers2.js.map
