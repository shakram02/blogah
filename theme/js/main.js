String.prototype.toArabicIndicDigits = function () {
    let id = ['۰', '۱', '۲', '۳', '۴', '۵', '٦', '۷', '۸', '۹'];
    return this.replace(/[0-9]/g, function (w) {
        return id[+w]
    });
}

// function initializeReveal() {
//     // More info about initialization & config:
//     // - https://revealjs.com/initialization/
//     // - https://revealjs.com/config/
//     Reveal.initialize({
//         slideNumber: slide => {
//             let slideNum = Reveal.getIndices(slide).h;
//             return [slideNum.toString().toArabicIndicDigits()];
//         }
//     });
// }

// initializeReveal();