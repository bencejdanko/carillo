
const duckdb = require('duckdb-async')

const schema = async () => {
    const db = await duckdb.Database.create(':memory:')
    const result = await db.all(/*sql*/`
        CREATE TABLE Customers (
            customer_id INTEGER PRIMARY KEY, 
            guest_name VARCHAR,
            phone_number VARCHAR,
            email VARCHAR,
        );

        CREATE TABLE ServiceAdvisor (
            service_advisor_id INTEGER PRIMARY KEY, 
            service_advisor_name VARCHAR,
            service_advisor_email VARCHAR,
            service_advisor_phone_number VARCHAR,
        );

        CREATE TABLE Vehicles (
            vehicle_id INTEGER PRIMARY KEY, 
            customer_id INTEGER REFERENCES Customers(customer_id),
            license_plate VARCHAR,
            vin VARCHAR,
            make VARCHAR,
            model VARCHAR,
            year INTEGER,
        );

        CREATE TABLE RepairOrders (
            ro_number INTEGER PRIMARY KEY, 
            customer_id INTEGER REFERENCES Customers(customer_id),
            vehicle_id INTEGER REFERENCES Vehicles(vehicle_id),
            service_advisor_id INTEGER REFERENCES ServiceAdvisor(service_advisor_id),
            ro_date DATE,
            ro_status VARCHAR,
            ro_description VARCHAR,
            ro_total_cost DECIMAL(10, 2),
        );

        CREATE TABLE Services (
            service_id INTEGER PRIMARY KEY, 
            ro_number INTEGER REFERENCES RepairOrders(ro_number),
            vehicle_id INTEGER REFERENCES Vehicles(vehicle_id),
            service_name VARCHAR,
            service_date DATE,
            service_type VARCHAR,
            service_description VARCHAR,
            service_cost DECIMAL(10, 2),
            estimated_time INTEGER,
        );

        CREATE TABLE WorkLog (
            log_id INTEGER PRIMARY KEY,
            ro_number INTEGER REFERENCES RepairOrders(ro_number),
            service_id INTEGER REFERENCES Services(service_id),
            work_description VARCHAR,
            work_date DATE,
            start_time DATETIME,
            end_time DATETIME,
        );
    `)
    return db
}

async function insertDummyData(db) {
    const result = await db.all(/*sql*/`
        INSERT INTO Customers (customer_id, guest_name, phone_number, email) VALUES 
            (1, 'John Doe', '123-456-7890', 'example@example.com')
        `
    )	
}


async function init_db() {
    const db = await schema()
    await insertDummyData(db)
    return db
}

async function get_customers(db) {
    const result = await db.all(/*sql*/`
        SELECT * FROM Customers
    `)
    return result
}

/**
 * Build a whole RO database with only the company related information
 */
async function build_ro_database(db) {

}



module.exports = {
    init_db,
    get_customers
}