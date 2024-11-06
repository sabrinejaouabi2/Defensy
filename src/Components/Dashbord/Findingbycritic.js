import React from 'react';

const Findingbycritic = () => {
  return (
    <div
      style={{
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white', // Fond blanc pour le cercle central
        overflow: 'hidden', // Empêche le contenu de dépasser du cercle
       
      }}
    >
      {/* Première partie (bleue) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
        
          height: '100%',
          background: '#5DADE2', // Couleur bleue pour la première partie
          borderRight: '2px solid 5DADE2', // Bordure à droite pour séparer les deux parties
          borderTop: '2px solid 5DADE2', // Bordure en haut pour réduire l'épaisseur
          borderBottom: '2px solid 5DADE2', // Bordure en bas pour réduire l'épaisseur
          zIndex: 1,
        }}
      />

      {/* Deuxième partie (rouge et jaune) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          width: '50%',
          height: '100%',
          background: 'linear-gradient(to bottom, red 50%, yellow 50%)', // Dégradé linéaire rouge (50%) et jaune (50%)
       
    
          borderTop: '2px solid red', // Bordure en haut pour réduire l'épaisseur
         
          zIndex: 1,
        }}
      />

      {/* Cercle central (bleu) */}
      <div
        style={{
          width: '120px',
          height: '120px',
          backgroundColor: 'white', // Couleur bleue pour le cercle central
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
         
          zIndex: 2,
        }}
      >
       
      </div>
    </div>
  );
};

export default Findingbycritic;
