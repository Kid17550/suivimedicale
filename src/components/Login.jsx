import React from "react";
import "./Login.css"; 

function Login() {
  return (
    <div className="login-container">
      <h1 className="title">SuiviHealth</h1>
      <p className="subtitle">Professionnel • Sécurisé • Accessible</p>

      <div className="login-sections">
        {/* Section Patient */}
        <div className="login-card patient">
          <h2>Patient</h2>
          <p>
            Accédez à votre dossier médical, consultez des médecins en ligne et
            suivez votre santé
          </p>
          <ul>
            <li>Consultation instantanée</li>
            <li>Dossier médical numérique</li>
            <li>Suivi de vos symptômes</li>
          </ul>
          <button className="btn patient-btn">
            Se connecter en tant que Patient
          </button>
        </div>

        {/* Section Médecin */}
        <div className="login-card doctor">
          <h2>Médecin</h2>
          <p>
            Gérez vos consultations, suivez vos patients et accédez aux dossiers
            médicaux
          </p>
          <ul>
            <li>Agenda des consultations</li>
            <li>Gestion des dossiers patients</li>
            <li>Ordonnances et diagnostics</li>
          </ul>
          <button className="btn doctor-btn">
            Se connecter en tant que Médecin
          </button>
        </div>
      </div>

      <div className="signup">
        <p>
          Vous n'avez pas encore de compte ?{" "}
          <a href="/signup">Créer un compte</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
