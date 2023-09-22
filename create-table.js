import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS transactions`.then(() => {
//   console.log('table apagada')
// })

sql`
  CREATE TABLE transactions (
    id TEXT PRIMARY KEY,
    description TEXT,
    price INTEGER,
    category TEXT,
    type TEXT,
    createdAt TEXT
  )
`.then(() => {
  console.log('tabela criada!')
})
