export default (func) =>(req,res,next)=>{
    Promise.resolve(controllerFunction(req,res,next)).catch(next)
}