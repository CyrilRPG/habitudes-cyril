# Mes Habitudes 🔥

Webapp mobile (PWA) de suivi d'habitudes et de productivité, pensée pour le téléphone.
Aucune base de données externe : **toutes les données restent sur l'appareil** (`localStorage`).

## Fonctionnalités

- **Jour** — to-do des habitudes du jour, % de productivité, couleur et message d'encouragement, note personnelle.
- **Semaine** — barre de productivité jour par jour, moyenne, meilleur jour, série 🔥.
- **Mois** — calendrier coloré selon le % de chaque jour passé, avec détail au clic.
- **Habitudes personnalisables** (ajout / suppression) via ⚙️ Réglages.
- **Sport en cycle** : chaque habitude a 3 états au toucher — à faire → fait ✓ → repos 💤 (les jours de repos ne pénalisent pas le score).
- **Sauvegarde** : export / import JSON de tes données.
- **Installable** sur l'écran d'accueil (PWA, fonctionne hors-ligne).

## Habitudes par défaut

Prière du soir · Sport · Lecture de la Bible + commentaire · Anglais (Pingo) ·
Travail Hermione Médecine · Projets Stéphane / Sonia · Apprendre 1 item / Réviser 2.

## Développement local

```bash
node .dev-server.js   # http://localhost:4599
```

Site 100 % statique — aucun build nécessaire. Déployé sur Vercel.
