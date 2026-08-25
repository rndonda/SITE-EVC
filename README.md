# Site officiel de Kelvin Muyoko

Site statique, sans serveur ni base de données, conçu pour être déployé gratuitement sur Vercel ou Cloudflare Pages.

## Mise à jour du contenu

Les livres et ressources affichés sont centralisés dans [`content.js`](content.js). Modifiez les objets dans ce fichier pour ajouter ou modifier un livre, un article, une vidéo ou une réflexion. Les liens de contact (`email`, `WhatsApp`, `YouTube`) sont directement dans [`index.html`](index.html).

## Prévisualisation locale

```bash
python3 -m http.server 8080
```

Ouvrez ensuite `http://localhost:8080`.
