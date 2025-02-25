import Dexie from 'dexie';

export const db = new Dexie('instamock');

db.version(1).stores({
    posts: '++id',
});
