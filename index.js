"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const c = (f) => {
    setTimeout(() => {
        f('Callback 1');
        setTimeout(() => {
            f('Callback 2');
            setTimeout(() => {
                f('Callback 3');
            }, 1000);
        }, 1000);
    }, 1000);
};
c((text) => console.log(text));
const delay = (ms) => new Promise(f => setTimeout(f, ms));
const p = (f) => __awaiter(void 0, void 0, void 0, function* () {
    yield delay(1000);
    f('Promise 1');
    yield delay(1000);
    f('Promise 2');
    yield delay(1000);
    f('Promise 3');
});
p((text) => console.log(text));
