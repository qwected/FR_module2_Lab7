"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealedClass = SealedClass;
exports.ToUpperCase = ToUpperCase;
function SealedClass(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function ToUpperCase() {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        // Переопределяем метод
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = originalMethod.apply(this, args);
            if (typeof result === 'string') {
                return result.toUpperCase();
            }
            return result;
        };
        // Возвращаем измененный descriptor
        return descriptor;
    };
}
