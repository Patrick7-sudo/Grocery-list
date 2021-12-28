import pg from 'pg';

const pool = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PASSWORD,
    port: process.env.port,
    ssl:{rejectUnauthorized:false}
})

export function query(text,params){
    return pool.query(text,params);
}

