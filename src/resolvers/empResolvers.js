
export default {
    Query : {
        getEmployees:(root,args,{empModel}) =>{
            console.log( "inside get employees");
            console.log(empModel);
            try {
                return new Promise((resolve,reject) =>{
                    empModel.find({},(error,result)=>{
                         if(error){
                             reject(error);
                         }
                         resolve(result);
                     })
                }).then(result=>{
                    return result;
                }).catch(error =>{throw error;});
            } catch (error) {
                console.error(error);
                return null;
            }

        }
    },
 Mutation :{
    saveEmployee:(root,args,{empModel}) =>{
       console.log(`inside save empoyee`);
       return new Promise((resolve,error)=>{
           try {
            
            empModel(args).save({},(error,result)=>{
                if(error) reject(error)
                resolve(result);
            }).then(result =>{
               return result;
            }).catch(error =>{throw error;});
           } catch (error) {
               console.log(error);
               return null;
           }
       });
    }
 }
}