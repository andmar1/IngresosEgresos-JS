class Ingreso extends Dato{
    
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos; //Asignando valores como se vayan agregando objetos, iterando
    }
    get id(){
        return this._id;
    }
}