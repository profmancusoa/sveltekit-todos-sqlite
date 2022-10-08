# sveltekit-todos-sqlite

Semplice applicazione ToDo che dimostra come usare l'ORM prisma.io con sqlite e sveltekit

## Run dell'applicazione

Per esegurie l'applicazione e sviluppare seguire i seguenti passi:

1. git clone del repo
2. cd sveltekit-todos-sqlite
3. npm i #per installare le dipendenze

```bash
added 243 packages, and audited 244 packages in 4s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

4. npx prisma migrate dev --name initdb  #per inizializzare il DB

 ```bash
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": SQLite database "todoDB.db" at "file:./todoDB.db"

SQLite database todoDB.db created at file:./todoDB.db

Applying migration `20221008200251_initdb`

The following migration(s) have been created and applied from new schema changes:

migrations/
  └─ 20221008200251_initdb/
    └─ migration.sql

Your database is now in sync with your schema.

✔ Generated Prisma Client (4.4.0 | library) to ./node_modules/@prisma/client in 59ms
 ```
 5. npm run dev -- --open # per aprire il browser e lanciare l'applicazione

```bash
VITE v3.1.6  ready in 601 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
Query TODOS dal DB:  []
Query data dal DB: {}
Query TODOS dal DB:  []
Query data dal DB: {}
Query TODOS dal DB:  []
Query data dal DB: {}
Query TODOS dal DB:  []
Query data dal DB: {}
Query TODOS dal DB:  []
Query data dal DB: {}
```

Ora potete interagire con la ToDo list, aggiungere, modificare e rimuovere ToDo.

Per vedere come viene modificato il DB, eseguire
```bash
npx prisma studio

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Prisma Studio is up on http://localhost:5555
```

- Ora prite il browser sulla porta 5555 e vedrete una bella interfaccia di amministrazione del DB.
- Se fate una modifica dall'applicazione, in prisma studio vedrete le modifiche (dovete fare il refresh).
- Se fate una modifica da prisma studio, vedrete le modifiche nell'applicazione sveltekit (fate il refresh della pagina)
- Sperimentate e provate a fare delle modifiche allo schema del DB e eseguite nuovamente il comando `prisma migrate`
