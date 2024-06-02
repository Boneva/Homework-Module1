document.getElementById('contactSelect').addEventListener('change', function() {
    var contactMethod = document.getElementById('contactMethod');
    var contactLabel = document.getElementById('contactLabel');
    var contactInput = document.getElementById('contactInput');
    
    if (this.value === 'email') {
      contactLabel.textContent = 'Enter your email';
      contactInput.setAttribute('type', 'email');
      contactInput.setAttribute('placeholder', 'example@example.com');
      contactMethod.style.display = 'block';
    } else if (this.value === 'phone') {
      contactLabel.textContent = 'Enter your phone';
      contactInput.setAttribute('type', 'tel');
      contactInput.setAttribute('placeholder', '123-456-7890');
      contactMethod.style.display = 'block';
    } else {
      contactMethod.style.display = 'none';
    }
  });

  function submitForm() {
    alert('Form submitted!');
  }

  // Ensure the contact method section is hidden when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactMethod').style.display = 'none';
  });
