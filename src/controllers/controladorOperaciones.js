const ctrlOperaciones=[]


ctrlOperaciones.sumar =async (req,res)=>{
 

    try {
    
        let matriz1 =req.body.matriz1
        let matriz2 =req.body.matriz2
    
    
        let fila1= matriz1.length
        let columna1 = matriz1[0].length
        
        let fila2= matriz2.length
        let columna2 = matriz2[0].length
        
        const resultado=[]
        if(matriz1.length !== matriz2.length){
            console.log("no se puede realizar la suma ")
            
        return    res.json({
                message:"no se puede realizar la suma, las dimensiones deben ser iguales"
            })
    
        }
        else{
            for (let i = 0; i < matriz1.length; i++) {
                resultado[i]=[]
                for (let j = 0; j < matriz1[0].length; j++) {
                   resultado[i][j] = matriz1[i][j] + matriz2[i][j]
                    
                }
            }
            console.log(JSON.stringify(resultado))
           return res.send(JSON.stringify(resultado))
        }
    
     
    } catch (error) {
        console.log(error)
        res.json({
            message:error.message
        })
    }


}
ctrlOperaciones.restar=async(req,res)=>{    

    try {
    
        let matriz1 =req.body.matriz1
        let matriz2 =req.body.matriz2
    
    
        let fila1= matriz1.length
        let columna1 = matriz1[0].length
        
        let fila2= matriz2.length
        let columna2 = matriz2[0].length
        
        const resultado=[]
        if(matriz1.length !== matriz2.length){
            console.log("no se puede realizar la resta ")
            
        return    res.json({
                message:"no se puede realizar la resta, las dimensiones deben ser iguales"
            })
    
        }
        else{
            for (let i = 0; i < matriz1.length; i++) {
                resultado[i]=[]
                for (let j = 0; j < matriz1[0].length; j++) {
                   resultado[i][j] = matriz1[i][j] - matriz2[i][j]
                    
                }
            }
            console.log(JSON.stringify(resultado))
           return res.send(JSON.stringify(resultado))
        }
    
     
    } catch (error) {
        console.log(error)
        res.json({
            message:error.message
        })
    }



}
ctrlOperaciones.multiplicar = async(req,res)=>{
    try {
     
   
   const matriz1 = req.body.matriz1;
   const matriz2 = req.body.matriz2;
 
   // Obtener las dimensiones de las matrices
   const rowsA = matriz1.length;
   const colsA = matriz1[0].length;
   const rowsB = matriz2.length;
   const colsB = matriz2[0].length;
   const result = [];
   // Verificar si las dimensiones de las matrices son válidas para la multiplicación
   if (colsA !== rowsB) {
     console.log("las dimensiones de las matrices no son validas para la multiplicación")
     return res.status(400).send(
         "las dimensiones de las matrices no son validas para la multiplicación"
     );
   }
   else{
    
 
     for (let i = 0; i < rowsA; i++) {
       result[i] = [];
       for (let j = 0; j < colsB; j++) {
         let sum = 0;
         for (let k = 0; k < colsA; k++) {
           sum += matriz1[i][k] * matriz2[k][j];
         }
         result[i][j] = sum;
        }
    }
    console.log(result)
   
     return res.send(JSON.stringify(result))
   }
 
 
    } catch (error) {
     res.status(500).json({
         message: "error en las dimensiones de las matrices",
         errorBody: error.message
     })
    }
 
 
 
 }


module.exports =ctrlOperaciones