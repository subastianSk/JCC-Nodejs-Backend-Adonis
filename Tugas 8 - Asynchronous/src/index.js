import Register from './lib/register';
import {
    regisUser,
    readData
} from './lib/fscallback';
import {
    login,
    addSiswa
} from './lib/fspromise';

const args = process.argv;
const input = args.toString().split(',').slice(2);

function register(role, callback) {
    if (role === 'admin' || role === 'trainer' || role === 'student') {
        callback(true);
    } else {
        callback(false);
    }
}

switch (input[0]) {
    case 'register':
        register(input[3], function (check) {
            if (check) {
                const register = new Register(input[1], input[2], input[3]);
                regisUser(register);
            } else {
                console.log('Role tidak tersedia!');
            }
        });
        break;
    case 'login':
        login(input[1], input[2]);
        break;
    case 'addSiswa':
        addSiswa(input[1], input[2]);
        break;
}
// readData()