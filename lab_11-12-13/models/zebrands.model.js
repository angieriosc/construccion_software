const botones = [
    {
        nombre: "Botón 1",
        accion: "/accion1"
    },
    {
        nombre: "Botón 2",
        accion: "/accion2"
    }
];

module.exports = class Zebrand {

    constructor(mi_nombre, mi_accion) {
        this.nombre = mi_nombre;
        this.accion = mi_accion;
    }

    save() {
        botones.push({
            nombre: this.nombre,
            accion: this.accion
        });
    }

    static fetchAll() {
        return botones;
    }
}
