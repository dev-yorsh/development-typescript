// Genericos en interfaces:
interface Crud <T> {
    create(T): T;
    update(id: number) : string;
    list(name: string) : T[];
}

const crud : Crud<string> = {
    create(T): string {
        return "Creado Correctamente " + T;
    },

    list(name: string): string[] {
      return ["",""]
    },

    update(id: number): string {
        return "ss"
    }
}

console.log(crud.create("OBJETO"))


// Genericos en funciones
function imprimir<T>(data:T) {
    return data;
}


const dataNumber = imprimir(2);
const dataString = imprimir<string>('Juan');



