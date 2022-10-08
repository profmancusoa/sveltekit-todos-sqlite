import { PrismaClient } from '@prisma/client';

// Istanzia il client per il DB
const DB = new PrismaClient();

export async function load({ params }) {
	// query SQL al DB per tutte le entry nella tabella todo
	const todos = await DB.todo.findMany();

	console.log('Query TODOS dal DB: ', todos);

	// restituisco il risultato della query SQL
	return todos;
}

export const actions = {
	create_todo: async ({ cookies, request }) => {
		const form_data = await request.formData();
		const todo_text = form_data.get('new-todo');

        // inserisco un nuovo todo nel DB
		await DB.todo.create({
			data: {
				text: todo_text
			}
		});
		console.log("Inserito nel DB il todo: ", todo_text);

		return { success: true };
	},

    update_todo_done: async ({ cookies, request }) => {
		const form_data = await request.formData();
		const todo_done = form_data.get('done') == 'true';
        const todo_uid = parseInt(form_data.get('uid'));

        // aggiorno il campo done di un todo nel DB
		await DB.todo.update({
			data: {
				done: todo_done
			},
            where: {
                uid: todo_uid
            }
		});
        
		console.log(`Update nel DB del todo ${todo_uid} da ${!todo_done} a ${todo_done}`);
		return { success: true };
    },
    update_todo_text: async ({ cookies, request }) => {
        const form_data = await request.formData();
		const todo_text = form_data.get('update-text');
        const todo_uid = parseInt(form_data.get('uid'));

        // aggiorno il campo text di un todo nel DB
		await DB.todo.update({
			data: {
				text: todo_text
			},
            where: {
                uid: todo_uid
            }
		});
        
		console.log(`Update nel DB del todo ${todo_uid} con ${todo_text}`);
		return { success: true };
    },
    delete_todo: async ({ cookies, request }) => {
        const form_data = await request.formData();
        const todo_uid = parseInt(form_data.get('uid'));

        // rimuovo todo dal DB
		await DB.todo.delete({
            where: {
                uid: todo_uid
            }
		});
        
		console.log(`Rimosso dal DB il todo ${todo_uid}`);
		return { success: true };
    }
};
