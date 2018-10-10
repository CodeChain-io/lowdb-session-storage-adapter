const lowdb = require('lowdb')

const Base = require('lowdb/adapters/Base');

const sessionStorage = window['sessionStorage'];

class SessionStorage extends Base {
    read() {
        const data = sessionStorage.getItem(this.source);
        if (data) {
            return this.deserialize(data);
        }
        sessionStorage.setItem(this.source, this.serialize(this.defaultValue));
        return this.defaultValue;
    }

    write(data) {
        sessionStorage.setItem(this.source, this.serialize(data))
    }
}

module.exports = SessionStorage;
