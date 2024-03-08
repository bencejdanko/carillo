
const duckdb = require('duckdb-async')

async function main() {
    const db = await duckdb.Database.create(':memory:')
    const rows = await db.all(`
        CREATE TABLE Customers (
            customer_id INTEGER, 
            guest_name INTEGER,
        
        );

        INSERT INTO test VALUES (1, 2);
        SELECT * FROM test;
    `)
    console.log(rows)
}

main()