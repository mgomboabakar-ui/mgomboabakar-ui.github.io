// Initialiser le SDK Pi
Pi.init({ version: "2.0", sandbox: true });

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const authSection = document.getElementById('auth-section');
const userSection = document.getElementById('user-section');
const usernameSpan = document.getElementById('username');
const balanceSpan = document.getElementById('balance');

// Fonction de connexion
loginBtn.addEventListener('click', async function() {
  try {
    const scopes = ['username', 'payments'];
    const auth = await Pi.authenticate(scopes, onIncompletePaymentFound);
    
    usernameSpan.textContent = auth.user.username;
    authSection.style.display = 'none';
    userSection.style.display = 'block';
    
    // Simuler un solde
    balanceSpan.textContent = "10.50";
    
  } catch (error) {
    console.error(error);
    alert("Erreur de connexion Pi");
  }
});

// Fonction de déconnexion
logoutBtn.addEventListener('click', function() {
  authSection.style.display = 'block';
  userSection.style.display = 'none';
});

// Gérer les paiements incomplets
function onIncompletePaymentFound(payment) {
  console.log("Paiement incomplet trouvé:", payment);
}
