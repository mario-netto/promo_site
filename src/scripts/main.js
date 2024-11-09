const dataDoEvento = new Date("December 5, 2024 19:00:00");
const timeStampDoevento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoevento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs)
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById('timer').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0){
        clearInterval(contaAsHoras)
        document.getElementById('title-hero').innerHTML = '<b>UMSÓ</b> App'
        document.getElementById('timer').classList.add('hero__content__text__time--padding-0');
        document.getElementById('timer').innerHTML = '<a class="button" href="$">DOWNLOAD</a>';
    }
}, 1000);