# 🟢 Bonny - Sistema TypeScript per la gestione di Bonus Statali

Progetto sviluppato per **Bonny**, una startup marchigiana che semplifica l'accesso dei cittadini italiani ai bonus e alle agevolazioni fiscali statali.

---

## 📌 Descrizione

Questo progetto modella in TypeScript la struttura operativa di Bonny, simulando le interazioni tra:

- **Startup** innovative nel settore dello sport
- **Incentivi statali** destinati a promuovere l'attività fisica
- **Cittadini** che partecipano alle iniziative sportive

---

## 🗂 Struttura del progetto

```
bonny-typescript/
├── bonny.ts          # Codice sorgente principale
├── tsconfig.json     # Configurazione TypeScript
├── package.json      # Dipendenze del progetto
└── README.md         # Documentazione
```

---

## ⚙️ Installazione

1. Clona la repository:

   ```bash
   git clone https://github.com/tuo-username/bonny-typescript.git
   cd bonny-typescript
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

---

## ▶️ Esecuzione

Esegui il progetto con:

```bash
npx ts-node bonny.ts
```

---

## 🧱 Architettura

### Interfacce

| Interfaccia  | Descrizione                                             |
| ------------ | ------------------------------------------------------- |
| `IStartup`   | Rappresenta una startup innovativa nel settore sportivo |
| `IIncentivo` | Rappresenta un incentivo statale                        |
| `ICittadino` | Rappresenta un cittadino partecipante                   |

### Classi

| Classe      | Implementa   | Descrizione                          |
| ----------- | ------------ | ------------------------------------ |
| `Startup`   | `IStartup`   | Gestisce info e incentivi ricevuti   |
| `Incentivo` | `IIncentivo` | Gestisce l'assegnazione alle startup |
| `Cittadino` | `ICittadino` | Partecipa alle attività sportive     |

---

## 💡 Scelte progettuali

- **Interfacce TypeScript** per garantire la tipizzazione forte e la coerenza tra le classi
- **Separazione delle responsabilità**: ogni classe gestisce la propria logica interna
- **Console logging** per rendere visibile e verificabile il flusso di assegnazione incentivi

---

## 👩‍💻 Autore

Progetto realizzato da **Camilla Salvati**
