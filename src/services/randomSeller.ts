import { Request, Response } from 'express';

let id = 0

export const getNumber = async (req: Request, res: Response) => {
	const telefones = [
		{telefone: "5511984324059", vendedor: "Ronei Batista"},
		{telefone: "5511916055695", vendedor: "Indyra Matos"},
		{telefone: "5521997930286", vendedor: "Nayara Gois"},
		{telefone: "5531995240534", vendedor: "Roberta Andrade"},
		{telefone: "5511972902045", vendedor: "Kysla Rabelo"}
	];

    id = (id === telefones.length-1 ? 0 : id+1)
    console.log(id,"/",telefones.length)
    const telefone = telefones[id].telefone
    const vendedor = telefones[id].vendedor
	
    try {
        console.log(JSON.stringify({
            "data":{
                "id": id,
                "telefone": telefone,
                "vendedor": vendedor
            }}))
        return res.status(200).json({id ,telefone, vendedor})
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: 'Internal server error', error})
    }
}