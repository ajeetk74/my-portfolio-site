// Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    emailjs.send("service_tbd34nq", "template_9ni39zl", {
      from_name: document.querySelector('input[name="from_name"]').value,
      reply_to: document.querySelector('input[name="reply_to"]').value,
      from_number: document.querySelector('input[name="from_number"]').value,
      message: document.querySelector('textarea[name="message"]').value
    })
    .then(function(response) {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Failed to send message: " + JSON.stringify(error));
    });
  });
