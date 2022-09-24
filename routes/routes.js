
const appRouter = (app,fs)=> {
    
    const dataPath = './data/db.json';

    app.get('/list',(req,res)=>{
        // let idPar = req.params.id;
        
        fs.readFile(dataPath,'utf8',(err,data)=>{
            if(err){
                throw err;
            }

            res.send(JSON.parse(data))
        })
    })

    app.get('/list/:id',(req,res)=>{
        // console.log(req.params['id']);
        let idRF = req.params.id;
        const dataJ = fs.readFileSync(dataPath);
        const dataSend = JSON.parse(dataJ)
        let senddt
        // console.log(dataSend[idRF])
        senddt =dataSend[idRF]    
        if (dataSend[idRF]==undefined)
        {
            senddt = "undefined"
        }
        
        // res.send(JSON.parse("halooo "+ req.params['id']))
        res.send(senddt)
    })

}


module.exports = appRouter;