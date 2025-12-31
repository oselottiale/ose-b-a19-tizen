async function slides() {
  const user = firebase.auth().currentUser;
  if (!user) {
    console.error("No user logged in");
    return;
  }

  const token = await user.getIdToken();
  const from = encodeURIComponent(window.location.href);

  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbxvQs2pmXCVC-RVjY7-nKzve-fBCG7oO-bXVu4jLJNSc9HvLAIui1FuOrWH05XqAu8hMg/exec?token=${token}&from=${from}`
  );

  const data = await res.json();
  
  window.location.href = data.url;
}

slides();
