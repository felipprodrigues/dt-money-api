import {randomUUID} from 'node:crypto'

export class DatabaseMemory {
  #transactions = new Map()

  list() {
    return Array.from(this.#transactions.values());
  }

  create(transaction) {
    const transactionId = randomUUID()

    this.#transactions.set(transactionId, transaction)
  }

  delete(id) {
    this.#transactions.delete(id)
  }

}
