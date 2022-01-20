# TODO

- diagram OK
- musician GUILAIN
  - il recoit en argument son son ("piano", "drum", "flute", "trumpet", "violin")
  - broadcast sonson("ti-ta-ti", "pouet", ...) chaque seconde avec son UUID
- auditor MEHDI
  - se connecte au broadcast
  - crée ou met à jour un tableau contenant le son de chaque musicien actif 
   depuis les 5 dernières seconds
    - 2 options: 
      - un timer par musicien qui est réinitialisé à chaque fois 
  qu'un son est recu de ce musicien. Si ce timer atteint 0, on supprime 
     le musicien
  - il se met en écoute sur un port en attente de client 
  - il envoie son tableau à chaque client connectés
- dockeriser tout ce machin