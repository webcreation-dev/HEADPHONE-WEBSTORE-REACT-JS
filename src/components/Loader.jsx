import React from 'react';
import '../Loader.css'; // Assurez-vous d'avoir ce fichier pour les styles

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Chargement...</p>
    </div>
  );
};

export default Loader;
