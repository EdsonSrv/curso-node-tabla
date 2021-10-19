const fs = require('fs');
require('colors');

const crearArchivo = async ( base = 5, listar, limite ) => {
  try{
    let salida = '';

    for(let i = 1; i <= limite; i++) salida += (`${ base } X ${ i } = ${ i * base}\n`);

    if(listar) 
    {
      console.log('----------------------------'.green)
      console.log(`Tabla del ${base}`.yellow)
      console.log('----------------------------'.green)
      console.log(salida);
    } 
  
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`.cyan;
  }catch (err) {
    throw err
  }
  
}

module.exports = {
  crearArchivo
}