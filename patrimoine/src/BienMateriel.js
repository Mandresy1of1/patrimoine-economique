// src/BienMateriel.js
import Possession from './Possession';

export default class BienMateriel extends Possession {
  constructor(possesseur, libelle, valeur, dateDebut, dateFin, tauxAmortissement) {
    super(possesseur, libelle, valeur, dateDebut, dateFin, tauxAmortissement);
  }

  getValeur(date) {
    return super.getValeur(date);
  }
}
