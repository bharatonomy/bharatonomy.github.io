import * as dotenv from 'dotenv';
dotenv.config();

export let res = '';
async function query(data: any) {
	const response = await fetch(
		'https://api-inference.huggingface.co/models/openai-community/gpt2',
		{
			headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
			method: 'POST',
			body: JSON.stringify(data)
		}
	);
	const result = await response.json();
	return result;
}

query({ inputs: 'Can you please let us know more details about your ' }).then((response) => {
	console.log(JSON.stringify(response));
	res = JSON.stringify(response);
});
