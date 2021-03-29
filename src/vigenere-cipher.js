class VigenereCipheringMachine {

  alph = 'abcdefghijklmnopqrstuvwxyz';    
  directMachine;

  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }


  checkArgs(message, key) {

    if (message == null || key == null) {
      throw new Error("Error");
    }
  }

  encrypt(message, key) {

    this.checkArgs(message, key);

    if (this.directMachine) {
      return this._directEncrypt(message, key);
    } else {
      return this._reverseEncrypt(message, key);
    }
  }


  decrypt(message, key) {

    this.checkArgs(message, key);

    if (this.directMachine) {
      return this._directDecrypt(message, key);
    } else {
      return this._reverseDecrypt(message, key);
    }
  }


  _directEncrypt(message, key) {

    const arr = [];
    let counter = 0;
    const lowerCaseMessage = message.toLowerCase();
    const lowerCaseKey = key.toLowerCase();

    for (const messageChar of lowerCaseMessage) {

      if (this.alph.includes(messageChar)) {
        // Индекс сообщения равный индексу символа сообщения в алфавите
        const m = this.alph.indexOf(messageChar);
        // Индекс ключа равный индексу символа сообщения в алфавите
        const k = this.alph.indexOf(lowerCaseKey[counter % lowerCaseKey.length]);
        // Зашифрованноый символ исходя из индексов сообщения и ключа
        const c = this.alph[(m + k) % 26];
        arr.push(c);
        counter++;
      }
      else {
        arr.push(messageChar);
      }
    }

    return arr.join('').toUpperCase();
  }


  _directDecrypt(message, key) {

    const arr = [];
    let counter = 0;

    const lowerCaseMessage = message.toLowerCase();
    const lowerCaseKey = key.toLowerCase();

    for (const messageChar of lowerCaseMessage) {

      if (this.alph.includes(messageChar)) {
        let k = this.alph.indexOf(lowerCaseKey[counter % lowerCaseKey.length]);
        let c = this.alph.indexOf(messageChar.toLowerCase());
        let m = this.alph[(c - k + 26) % 26];
        arr.push(m);
        counter++;
      }
      else {
        arr.push(messageChar);
      }
    }

    return arr.join('').toUpperCase();;
  }

  _reverseEncrypt(message, key) {

    return this._directEncrypt(message, key).split('').reverse().join('');
  }


  _reverseDecrypt(message, key) {

    return this._directDecrypt(message, key).split('').reverse().join('');
  }
}


module.exports = VigenereCipheringMachine;
