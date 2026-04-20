// ============================================================
// BONNY - Sistema TypeScript per la gestione di bonus statali
// ============================================================

// --------------------
// INTERFACCE
// --------------------

interface IIncentivo {
  codice: string;
  descrizione: string;
  valore: number; // in euro
  criteriEleggibilita: string[];
  assegnaAStartup(startup: IStartup): void;
}

interface IStartup {
  nome: string;
  settoreFocus: string;
  descrizione: string;
  prodottiServizi: string[];
  incentiviRicevuti: IIncentivo[];
  riceviIncentivo(incentivo: IIncentivo): void;
}

interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];
  partecipaAttivita(startup: IStartup): void;
}

// --------------------
// CLASSI
// --------------------

class Startup implements IStartup {
  nome: string;
  settoreFocus: string;
  descrizione: string;
  prodottiServizi: string[];
  incentiviRicevuti: IIncentivo[] = [];

  constructor(
    nome: string,
    settoreFocus: string,
    descrizione: string,
    prodottiServizi: string[]
  ) {
    this.nome = nome;
    this.settoreFocus = settoreFocus;
    this.descrizione = descrizione;
    this.prodottiServizi = prodottiServizi;
  }

  riceviIncentivo(incentivo: IIncentivo): void {
    this.incentiviRicevuti.push(incentivo);
    console.log(
      `✅ La startup "${this.nome}" ha ricevuto l'incentivo: "${incentivo.descrizione}" (€${incentivo.valore})`
    );
  }
}

class Incentivo implements IIncentivo {
  codice: string;
  descrizione: string;
  valore: number;
  criteriEleggibilita: string[];

  constructor(
    codice: string,
    descrizione: string,
    valore: number,
    criteriEleggibilita: string[]
  ) {
    this.codice = codice;
    this.descrizione = descrizione;
    this.valore = valore;
    this.criteriEleggibilita = criteriEleggibilita;
  }

  assegnaAStartup(startup: IStartup): void {
    console.log(
      `📋 Assegnazione incentivo "${this.descrizione}" alla startup "${startup.nome}"...`
    );
    startup.riceviIncentivo(this);
  }
}

class Cittadino implements ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];

  constructor(
    nome: string,
    cognome: string,
    eta: number,
    interessiSportivi: string[]
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.interessiSportivi = interessiSportivi;
  }

  partecipaAttivita(startup: IStartup): void {
    console.log(
      `🏃 ${this.nome} ${this.cognome} partecipa alle attività di "${startup.nome}".`
    );
    console.log(
      `   Servizi disponibili: ${startup.prodottiServizi.join(", ")}`
    );
  }
}

// --------------------
// TEST / ISTANZE
// --------------------

console.log("=== BONNY - Sistema Bonus Statali ===\n");

// Startup
const fittech = new Startup(
  "FitTech",
  "app per il fitness",
  "App che gamifica l'attività fisica e premia gli utenti con cashback.",
  ["App mobile fitness", "Programmi di allenamento personalizzati", "Cashback sport"]
);

const wearSport = new Startup(
  "WearSport",
  "tecnologie wearable",
  "Dispositivi indossabili per il monitoraggio delle performance sportive.",
  ["Smartwatch sportivi", "Sensori biometrici", "Dashboard analisi dati"]
);

const sportBonus = new Startup(
  "SportBonus",
  "attrezzature sportive innovative",
  "Piattaforma che collega cittadini ad associazioni sportive convenzionate con Bonny.",
  ["Elenco associazioni convenzionate", "Prenotazione corsi", "Gestione bonus sport"]
);

// Incentivi
const bonusGiovani = new Incentivo(
  "INC-001",
  "Bonus Sport Giovani",
  500,
  ["Età compresa tra 5 e 18 anni", "ISEE inferiore a 35.000€"]
);

const bonusBenessere = new Incentivo(
  "INC-002",
  "Bonus Benessere Attivo",
  300,
  ["Cittadino residente in Italia", "Iscrizione ad associazione sportiva riconosciuta"]
);

const bonusDigitale = new Incentivo(
  "INC-003",
  "Bonus Digitale Sport",
  200,
  ["Startup con sede in Italia", "Settore tech applicato allo sport"]
);

// Cittadini
const mario = new Cittadino("Mario", "Rossi", 34, ["calcio", "ciclismo", "yoga"]);
const giulia = new Cittadino("Giulia", "Bianchi", 27, ["corsa", "pilates", "nuoto"]);

// --- TEST LOGICA ---
console.log("--- Assegnazione incentivi alle startup ---\n");

bonusGiovani.assegnaAStartup(sportBonus);
bonusBenessere.assegnaAStartup(fittech);
bonusDigitale.assegnaAStartup(wearSport);
bonusDigitale.assegnaAStartup(fittech);

console.log("\n--- Partecipazione cittadini alle attività ---\n");

mario.partecipaAttivita(sportBonus);
giulia.partecipaAttivita(fittech);
mario.partecipaAttivita(wearSport);

console.log("\n--- Riepilogo incentivi ricevuti ---\n");

[fittech, wearSport, sportBonus].forEach((s) => {
  console.log(`🏢 ${s.nome}: ${s.incentiviRicevuti.length} incentivo/i ricevuto/i`);
  s.incentiviRicevuti.forEach((inc) =>
    console.log(`   - ${inc.descrizione} (€${inc.valore}) [${inc.codice}]`)
  );
});