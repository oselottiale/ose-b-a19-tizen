firebaseAuth.currentUser.getIdToken().then(token => {
  const from = encodeURIComponent(window.location.href);

  window.location.href =
    `https://script.google.com/macros/s/AKfycbyPDEf3_WietpXzUtwdAKbagY67WZGxzSpc6ZYYhS1W0vcliGE694CpckPXqTYlqcNuCQ/exec?token=${token}&from=${from}`;
});
