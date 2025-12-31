firebaseAuth.currentUser.getIdToken().then(token => {
  const from = encodeURIComponent(window.location.href);

  window.location.href =
    `https://script.google.com/macros/s/AKfycbzDeaRjRC7rAfxwpjGxI63igdamyDc8X2PBnbYVZmjDZ1DCmbM-HAumhUtxk_7ypDFQzA/exec?token=${token}&from=${from}`;
});
