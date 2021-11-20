const addToDb = item => {
    const db = getDb();
    if (!db[item]) {
        db[item] = 1;
    }
    else {
        db[item] = db[item] + 1;
    }
    saveToDb(db);
}

const removeDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db);
}

const getDb = () => {
    const savedDb = localStorage.getItem('cart')
    if (!savedDb) {
        const db = {};
        return db;
    }
    else {
        return JSON.parse(savedDb);
    }
}

const saveToDb = db => {
    const jsonDb = JSON.stringify(db);
    localStorage.setItem('cart', jsonDb);
}

export { addToDb, getDb, saveToDb, removeDb };