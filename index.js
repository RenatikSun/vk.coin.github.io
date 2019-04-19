const VKCOINAPI = require('node-vkcoinapi'); // Импорт модуля
const vkcoin = new VKCOINAPI({
    key: '1C*f0b7N1yTwJoa_8pk,jJd*QDOXipV]_v]Nz3Y;j6VxQJTMd_',
    userId: 268172678, // Тут ваш ID вк
    token: '3593c5e351c46517fee6d69ef50ac26d6ecf0bbbd20db6e6616d1ec3b56863944aa86f772d6ccbda7c8a2'
});

const { VK } = require('vk-io'); // Импорт модуля для бота
const vk = new VK(); // Новый экземпляр 

vk.setOptions({ // Устанавливаем опции
    pollingGroupId: 181190199, // Тут ID группы
    token: '7d4d78181ec7c483a34727187d90c58521a73c4abb5d2a8832307823f4dde285aa61f66247596764a1a42'
});

vk.updates.on(['new_message'], async(msg) => { // Прослушка новых сообщений
    if (msg.isOutbox) return; // Если исходящее, то возвращаем

    if (msg.text === 'дайте коинов') { // Если входящее сообщение будет в точности равно 'дайте коинов', то...
        await vkcoin.sendPayment(msg.senderId, 1000); // Отправляем 1000 коинов пользователю

        return msg.send('Мы отправили вам 1 коин, можете проверить!'); // Отправляем сообщение
    }
});

vk.updates.startPolling(); // Старт прослушивания