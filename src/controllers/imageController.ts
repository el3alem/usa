//import csv from 'csvtojson';
// import { promises as fspromises } from "fs";
import fs from 'fs'
import express from 'express'

import sharp from 'sharp'
function sharper(imageName: string, imageWidth: number, imageHeight: number) {
    sharp(`./assets/full/${imageName}.jpg`)
        .resize(imageWidth, imageHeight)
        .toFile(`./assets/thumb/${imageName}w${imageWidth}h${imageHeight}output.jpg`)
}
const resize = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const query = req.query
        const width = parseInt(String(query.width))
        const height = parseInt(String(query.height))
        const found = fs.existsSync(`./assets/thumb/${query.filename}w${query.width}h${query.height}output.jpg`)

        if (found) {
            await fs.readFile(
                `./assets/thumb/${req.query.filename}w${req.query.width}h${req.query.height}output.jpg`,
                function (err: unknown, data: unknown) {
                    if (err) res.status(400).send(err)
                    res.set({ 'Content-Type': 'image/png' })
                    console.log(data)
                    res.end(data)
                }
            )
        } else {
            await sharper(String(query), width, height)
            next()
        }
    } catch (error) {
        res.status(404).send('image not found')
    }
}
const formated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await fs.readFile(
        `./assets/thumb/${req.query.filename}w${req.query.width}h${req.query.height}output.jpg`,
        function (err: unknown, data: unknown) {
            if (err) res.status(400).send(err)
            res.set({ 'Content-Type': 'image/png' })
            res.end(data)
        }
    )
    next()
}

export { resize, formated, sharper }
// const converter=(req:express.Request,res:express.Response)=>{
//     res.send("converting");
//   csv()
//   .fromFile(csvFilePath)
//   .then((data)=>{
//    let newData=data.map((item:{
//                          first_name:string;last_name:string;phone:string;
//                          }
//    )=>{
//        let first=item.first_name;
//        let last=item.last_name;
//        let phone=item.phone;
//        if(item.phone===""){
//            phone="missing Data";
//        }
//        return{first,last,phone}
//    }
//    )   ;
//     fs.writeFile(outputPath,JSON.stringify(newData));
//   });

//   };
// export{converter};
