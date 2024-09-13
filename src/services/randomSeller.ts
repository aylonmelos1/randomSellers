import { Request, Response } from 'express';

let id = 0

export const getNumber = async (req: Request, res: Response) => {
	const telefones = [
		{telefone: "5573935050217", vendedor: "0 - Aylon Melo"},
		{telefone: "5573935050217", vendedor: "1 - Aylon Melo"},
		{telefone: "5573935050217", vendedor: "2 - Aylon Melo"}	
	];

    id = (id === telefones.length-1 ? 0 : id+1)
    console.log(id,"/",telefones.length)
    const telefone = telefones[id].telefone
    const vendedor = telefones[id].vendedor
	
    try {
        console.log(JSON.stringify({id ,telefone, vendedor}))
        return res.status(200).json({id ,telefone, vendedor})
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: 'Internal server error', error})
    }
}