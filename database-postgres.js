import { randomUUID } from 'node:crypto';
import {sql} from './db.js';

export class DatabasePostgres {
  async list() {
    // Declare transactions variable using 'let'
    let transactions = await sql`select * from transactions`;

    return transactions;
  }

  async create(data) {
    const transactionId = randomUUID();

    const { description, category, price, type, createdAt } = data;

    await sql`insert into transactions (id, description, category, price, type, createdAt) VALUES (${transactionId}, ${description}, ${category}, ${price}, ${type}, ${createdAt})`;
  }

  async delete(id) {
    await sql`delete from transactions where id = ${id}`;
  }
}
