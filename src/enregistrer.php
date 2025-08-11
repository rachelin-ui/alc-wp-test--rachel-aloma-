<?php
// Connexion à la base de données (à adapter selon ton config)
$host = 'localhost';
$dbname = 'alc';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Récupération des données du formulaire
$email = $_POST['email'] ?? '';
$nom = $_POST['nom'] ?? '';
$motdepasse = $_POST['motdepasse'] ?? '';

// Vérification accès temporaire
if ($email === 'recrutement@alc.test') {
    echo "✅ Accès admin temporaire accordé à $email";
    // Tu peux ici créer un compte admin ou rediriger vers une page spéciale
} else {
    // Enregistrement classique
    $sql = "INSERT INTO utilisateurs (nom, email, motdepasse) VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$nom, $email, password_hash($motdepasse, PASSWORD_DEFAULT)]);
    echo "✅ Utilisateur enregistré avec succès.";
}
?>
