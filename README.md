# PostSnap

É um blog que está atualmente em desenvolvimento.
Estou a utilizar o React JS para o desenvolvimento.

ATT: Ainda não é possivel teres acesso a home e nem a outras pages, apenas teras acesso a telas de cadastro e login.


Nota de hoje:

Hoje, a gente avançou bastante na funcionalidade de criação de posts na tua aplicação! 🚀 Aqui está um resumo do que fizemos:

## Melhoramos a funcionalidade do modal de criação de posts

O usuário agora pode escrever um texto e adicionar imagens antes de postar.
Melhoramos a exibição de imagens prévias no modal.
Garantimos que o botão "Publicar" só funciona se houver conteúdo + imagem.

## Integramos a funcionalidade de envio do post para a API do PostSnap

Criamos a função handlePostSubmit, que:
Valida se o post tem texto e imagem antes de enviar.
Envia os dados para o backend via createPost(imageFile, content).
Mostra alertas informando se a postagem foi bem-sucedida ou se deu erro.
Fecha o modal após o envio com sucesso.

## Depuramos um erro de envio do post

O erro "Erro ao enviar o post" apareceu, então adicionamos console.log() para ver:
Se o arquivo da imagem está sendo corretamente capturado.
A resposta da API, para entender se o problema vem do frontend ou do backend.
Caso a API esteja falhando, decidimos testar a requisição manualmente com o Postman para tentar entender melhor o problema.

## Próximos passos

Testar se os console.log() ajudam a identificar o erro no envio do post.
Se ainda não funcionar, vamos verificar se o PostSnap está aceitando corretamente as imagens.
