class Reloj {
  static time;
  static interval;
  constructor() {}

  calculateTime() {
    if (!Reloj.time) Reloj.time = new Date();
    Reloj.time.setSeconds(Reloj.time.getSeconds() + 1);

    const parsedTime = Reloj.time.toLocaleTimeString('en-US')
    console.log(parsedTime);
  }

  encender() {
    return (Reloj.interval = setInterval(this.calculateTime.bind(this), 1000));
  }

  apagar() {
    return clearInterval(Reloj.interval);
  }
}

const reloj = new Reloj();
reloj.encender();
setTimeout(reloj.apagar, 5000);
