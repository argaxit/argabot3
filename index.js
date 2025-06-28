const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan password: ', (password) => {
    if (password === 'vip') {
        console.log('✅ Password benar! Bot jalan...');
        // Taruh script bot lu disini
    } else {
        console.log('❌ Password salah! Bot keluar.');
        process.exit();
    }
});